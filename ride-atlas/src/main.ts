import { Place } from './data';
import { Superbike } from './enthusiastData';
import { Exhaust } from './exhaustData';
import { supabase } from './supabase';
import './style.css';

const API_BASE = 'http://144.24.157.65:3001/api';

// --- AUDIO SYSTEM ---
const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

function playEngineRev(freq = 100) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 3, audioCtx.currentTime + 0.1);
  osc.frequency.exponentialRampToValueAtTime(freq, audioCtx.currentTime + 0.5);
  
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
}

// --- STATE ---
let allPlaces: Place[] = [];
let allSuperbikes: Superbike[] = [];
let allExhausts: Exhaust[] = [];

let selectedTags: string[] = ['all'];
let sortBy = 'rating';
let searchQuery = '';
let minKm = 0;
let maxKm = 1000;
let showingEnthusiasts = false;
let showingExhausts = false;
let user: any = null;

// --- DOM ELEMENTS ---
const grid = document.getElementById('grid')!;
const totalEl = document.getElementById('total-count')!;
const filteredEl = document.getElementById('filtered-count')!;
const enthusiastGrid = document.getElementById('enthusiast-grid')!;
const enthusiastSection = document.getElementById('enthusiast-section')!;
const exhaustGrid = document.getElementById('exhaust-grid')!;
const exhaustSection = document.getElementById('exhaust-section')!;

const authBtn = document.getElementById('auth-btn')!;
const authModal = document.getElementById('auth-modal')!;
const authClose = document.getElementById('auth-close')!;
const authForm = document.getElementById('auth-form') as HTMLFormElement;
const authMsg = document.getElementById('auth-msg')!;

const submitRideBtn = document.getElementById('submit-ride-btn')!;
const submitModal = document.getElementById('submit-modal')!;
const submitClose = document.getElementById('submit-close')!;
const rideForm = document.getElementById('ride-form') as HTMLFormElement;
const submitMsg = document.getElementById('submit-msg')!;

// --- DATA FETCHING ---
async function fetchData() {
  console.log("[NITRO] Fetching data from backend...");
  try {
    const [placesRes, bikesRes, exhaustsRes] = await Promise.all([
      fetch(`${API_BASE}/places`),
      fetch(`${API_BASE}/superbikes`),
      fetch(`${API_BASE}/exhausts`)
    ]);

    if (!placesRes.ok || !bikesRes.ok || !exhaustsRes.ok) {
      throw new Error("One or more API requests failed");
    }

    allPlaces = await placesRes.json();
    allSuperbikes = await bikesRes.json();
    allExhausts = await exhaustsRes.json();
    
    console.log(`[NITRO] Data Loaded: ${allPlaces.length} places, ${allSuperbikes.length} bikes, ${allExhausts.length} exhausts`);
    
    renderCards();
    renderEnthusiasts();
    renderExhausts();
  } catch (err) {
    console.error("Failed to fetch data from NITRO server:", err);
    grid.innerHTML = `<div class="error-msg" style="color:var(--accent); text-align:center; padding:50px; font-family:'Black Ops One';">⚠️ BACKEND OFFLINE. RESTRICTED THROTTLE.</div>`;
  }
}

// --- AUTH LOGIC ---
async function handleAuth() {
  const { data } = await supabase.auth.getSession();
  user = data.session?.user;
  updateAuthUI();

  supabase.auth.onAuthStateChange((_event, session) => {
    user = session?.user;
    updateAuthUI();
  });
}

function updateAuthUI() {
  if (user) {
    authBtn.textContent = `LOGOUT (${user.email.split('@')[0]}) 👤`;
    authBtn.style.background = 'var(--accent)';
    authBtn.style.color = 'white';
  } else {
    authBtn.textContent = 'LOGIN 👤';
    authBtn.style.background = 'transparent';
    authBtn.style.color = 'var(--accent)';
  }
}

authBtn.addEventListener('click', async () => {
  if (user) {
    await supabase.auth.signOut();
  } else {
    authModal.classList.remove('hidden');
  }
});

authClose.addEventListener('click', () => authModal.classList.add('hidden'));

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = (document.getElementById('auth-email') as HTMLInputElement).value;
  const password = (document.getElementById('auth-password') as HTMLInputElement).value;
  
  authMsg.textContent = "ENGAGING STARTER...";
  
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  
  if (error) {
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      authMsg.textContent = `CRITICAL FAILURE: ${signUpError.message}`;
    } else {
      authMsg.textContent = "ACCOUNT CREATED. CHECK EMAIL FOR NITRO LINK.";
    }
  } else {
    authMsg.textContent = "LOGIN SUCCESSFUL. FULL THROTTLE!";
    setTimeout(() => authModal.classList.add('hidden'), 1000);
  }
});

// --- SUBMISSION LOGIC ---
submitRideBtn.addEventListener('click', () => {
  if (!user) {
    authModal.classList.remove('hidden');
    authMsg.textContent = "PLEASE JOIN THE PACK BEFORE MINTING ROUTES.";
  } else {
    submitModal.classList.remove('hidden');
  }
});

submitClose.addEventListener('click', () => submitModal.classList.add('hidden'));

rideForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!user) return;

  const name = (document.getElementById('ride-name') as HTMLInputElement).value;
  const desc = (document.getElementById('ride-desc') as HTMLTextAreaElement).value;
  const dist = (document.getElementById('ride-dist') as HTMLInputElement).value;
  const tags = (document.getElementById('ride-tags') as HTMLInputElement).value.split(',').map(t => t.trim());

  submitMsg.textContent = "UPLOADING TO THE GRID...";
  
  // Simulation: Save to a 'pending_rides' table in Supabase
  const { error } = await supabase
    .from('pending_rides')
    .insert([{ name, desc, distance: dist, tags, submitted_by: user.email }]);

  if (error) {
    console.error("Supabase Error:", error);
    submitMsg.textContent = "SIMULATION ONLY: DB NOT CONNECTED. DATA LOGGED TO CONSOLE.";
    console.log("NEW RIDE SUBMITTED:", { name, desc, dist, tags, user: user.email });
  } else {
    submitMsg.textContent = "ROUTE MINTED! PENDING REVIEW BY THE ELDERS.";
    setTimeout(() => submitModal.classList.add('hidden'), 2000);
  }
});

// --- CURSOR GLOW ---
const glow = document.getElementById('cursor-glow')!;
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

  const needle = document.querySelector('.needle') as HTMLElement;
  if (needle) {
    const rotation = (e.clientX / window.innerWidth) * 180 - 90;
    needle.style.transform = `rotate(${rotation}deg)`;
  }
});

// --- HERO CANVAS PARTICLES ---
const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    r: Math.random() * 3 + 1,
    o: Math.random() * 0.5 + 0.2
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 60, ${p.o})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// --- FILTERING & SORTING ---
function getFiltered(): Place[] {
  let filtered = allPlaces.filter(p => {
    const matchTag = selectedTags.includes('all') || selectedTags.some(tag => p.tags.includes(tag));
    const matchDist = p.distance >= minKm && p.distance <= maxKm;
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.includes(searchQuery)) ||
      p.highlight.toLowerCase().includes(searchQuery);
    return matchTag && matchDist && matchSearch;
  });
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'distance') filtered.sort((a, b) => a.distance - b.distance);
  else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}

// --- RENDER CARDS ---
function renderCards() {
  const filtered = getFiltered();
  totalEl.textContent = String(allPlaces.length);
  filteredEl.textContent = String(filtered.length);
  grid.innerHTML = '';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.setAttribute('data-id', String(p.id));
    card.innerHTML = `
      <div class="card-banner">
        <span class="card-emoji">${p.emoji}</span>
        <span class="card-rating">⭐ ${p.rating}</span>
        <span class="card-distance">${p.distance} km</span>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join('')}
        </div>
        <button class="map-btn" data-name="${p.name}">ENGAGE MAPS 🗺️</button>
        <div class="sim-warning">STATS ACHIEVED IN STIMULATION - NOT REAL WORLD</div>
      </div>
    `;
    card.addEventListener('mouseenter', () => playEngineRev(80));
    card.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).classList.contains('map-btn')) {
        playEngineRev(120);
        openModal(p);
      }
    });
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 50 * i);
  });
}

// --- RENDER ENTHUSIASTS ---
function renderEnthusiasts() {
  enthusiastGrid.innerHTML = '';
  allSuperbikes.forEach((bike) => {
    const card = document.createElement('div');
    card.className = 'enthusiast-card';
    card.innerHTML = `
      <img src="${bike.image}" class="bike-image" alt="${bike.name}">
      <div class="bike-count">${bike.count} IN BLR</div>
      <div class="bike-overlay">
        <div class="bike-name">${bike.name}</div>
        <div class="bike-stats-overlay">
          <div class="stat-row"><label>ENGINE</label><span>${bike.stats.engine}</span></div>
          <div class="stat-row"><label>POWER</label><span>${bike.stats.power}</span></div>
          <div class="stat-row"><label>TOP SPEED</label><span>${bike.stats.topSpeed}</span></div>
          <div class="stat-row"><label>TORQUE</label><span>${bike.stats.torque}</span></div>
        </div>
      </div>
    `;
    card.addEventListener('mouseenter', () => playEngineRev(150));
    enthusiastGrid.appendChild(card);
  });
}

// --- RENDER EXHAUSTS ---
function renderExhausts() {
  exhaustGrid.innerHTML = '';
  allExhausts.forEach((ex) => {
    const card = document.createElement('div');
    card.className = 'exhaust-card';
    card.innerHTML = `
      <img src="${ex.image}" class="exhaust-image" alt="${ex.brand}">
      <div class="exhaust-info">
        <div class="exhaust-brand">${ex.brand}</div>
        <div class="exhaust-model">${ex.model}</div>
        <div class="exhaust-stats">
          <div class="exhaust-badge">${ex.price}</div>
          <div class="exhaust-badge db-badge">${ex.decibels}</div>
        </div>
        <div class="crazy-factor">${ex.crazyFactor}</div>
        <div class="legal-grid">
          ${ex.legality.map(l => `
            <div class="legal-row"><label>${l.region}</label><span>${l.status}</span></div>
          `).join('')}
        </div>
      </div>
    `;
    card.addEventListener('mouseenter', () => playEngineRev(200));
    exhaustGrid.appendChild(card);
  });
}

// --- OPEN IN MAPS ---
function openInMaps(name: string) {
  const query = encodeURIComponent(`${name} Bangalore`);
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
}

document.body.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('map-btn')) {
    const name = target.getAttribute('data-name');
    if (name) openInMaps(name);
  }
});

// --- MODAL ---
const modal = document.getElementById('modal')!;
const modalBody = document.getElementById('modal-body')!;
const modalClose = document.getElementById('modal-close')!;

function openModal(p: Place) {
  modalBody.innerHTML = `
    <div class="modal-info">
      <h2 style="font-family:'Black Ops One'; color:var(--accent2); font-size:3rem;">${p.name}</h2>
      <p style="font-size:1.2rem; color:var(--accent3); border-left: 5px solid var(--accent); padding-left: 15px;">${p.desc}</p>
      
      <div class="race-stats-grid">
        <div class="stat-box">
          <label>SUITABLE BIKE</label>
          <div class="stat-val">${p.simStats.bike}</div>
        </div>
        <div class="stat-box">
          <label>SIMULATED PILOT</label>
          <div class="stat-val">${p.simStats.biker}</div>
        </div>
        <div class="stat-box">
          <label>MAX SPEED ACHIEVED</label>
          <div class="stat-val accent-val">${p.simStats.topSpeed} KM/H</div>
        </div>
        <div class="stat-box">
          <label>MAX RPM PUSHED</label>
          <div class="stat-val accent-val">${p.simStats.maxRPM} RPM</div>
        </div>
      </div>

      <div class="modal-disclaimer">
        ⚠️ Stats achieved in online stimulation game. This is illegal and unsafe in real world conditions. DO NOT TRY THIS.
      </div>

      <div class="modal-detail" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
        <div style="background:#222; padding:20px; border:2px solid var(--accent2);">
          <label style="display:block; font-size:0.8rem; color:#888;">DISTANCE</label>
          <span style="font-size:1.5rem; font-weight:900;">${p.distance} KM</span>
        </div>
        <div style="background:#222; padding:20px; border:2px solid var(--accent3);">
          <label style="display:block; font-size:0.8rem; color:#888;">RATING</label>
          <span style="font-size:1.5rem; font-weight:900;">${p.rating} / 5</span>
        </div>
      </div>
      <button class="map-btn" data-name="${p.name}" style="margin-top:30px; padding:20px; font-size:1.5rem;">LAUNCH NAVIGATION</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });

// --- T&C MODAL ---
const tcModal = document.getElementById('tc-modal')!;
const tcLink = document.getElementById('tc-link')!;
const tcClose = document.getElementById('tc-close')!;

tcLink.addEventListener('click', (e) => {
  e.preventDefault();
  tcModal.classList.remove('hidden');
});
tcClose.addEventListener('click', () => tcModal.classList.add('hidden'));
tcModal.addEventListener('click', (e) => { if (e.target === tcModal) tcModal.classList.add('hidden'); });

// --- FILTERS ---
document.querySelectorAll('.filter-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = (btn as HTMLElement).dataset.tag || 'all';
    if (tag === 'all') {
      selectedTags = ['all'];
      document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    } else {
      const idx = selectedTags.indexOf(tag);
      if (idx >= 0) {
        selectedTags.splice(idx, 1);
        btn.classList.remove('active');
      } else {
        if (selectedTags.includes('all')) selectedTags = [];
        selectedTags.push(tag);
        btn.classList.add('active');
      }
      if (selectedTags.length === 0) {
        selectedTags = ['all'];
        document.querySelector('.filter-chip[data-tag="all"]')?.classList.add('active');
      } else {
        document.querySelector('.filter-chip[data-tag="all"]')?.classList.remove('active');
      }
    }
    renderCards();
  });
});

document.getElementById('sort-select')?.addEventListener('change', e => {
  sortBy = (e.target as HTMLSelectElement).value;
  renderCards();
});

document.getElementById('search-input')?.addEventListener('input', e => {
  searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
  renderCards();
});

const minInput = document.getElementById('km-min') as HTMLInputElement;
const maxInput = document.getElementById('km-max') as HTMLInputElement;
const kmLabel = document.getElementById('km-label');

const updateKm = () => {
  minKm = Number(minInput?.value || 0);
  maxKm = Number(maxInput?.value || 1000);
  if (kmLabel) kmLabel.textContent = `${minKm} - ${maxKm} KM`;
  renderCards();
};

minInput?.addEventListener('input', updateKm);
maxInput?.addEventListener('input', updateKm);

document.getElementById('offbeat-btn')?.addEventListener('click', () => {
  selectedTags = ['offbeat', 'coffee'];
  document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-chip[data-tag="offbeat"]')?.classList.add('active');
  document.querySelector('.filter-chip[data-tag="coffee"]')?.classList.add('active');
  renderCards();
  document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' });
});

// --- ENTHUSIAST TOGGLE ---
document.getElementById('show-enthusiasts')?.addEventListener('click', () => {
  showingEnthusiasts = !showingEnthusiasts;
  if (showingEnthusiasts) {
    showingExhausts = false;
    exhaustSection.classList.add('hidden');
    document.getElementById('show-exhausts')!.textContent = "EXHAUST LAB 🔥";

    enthusiastSection.classList.remove('hidden');
    renderEnthusiasts();
    enthusiastSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('show-enthusiasts')!.textContent = "HIDE GARAGE 🛠️";
  } else {
    enthusiastSection.classList.add('hidden');
    document.getElementById('show-enthusiasts')!.textContent = "ENTHUSIASTS 🏆";
  }
});

// --- EXHAUST TOGGLE ---
document.getElementById('show-exhausts')?.addEventListener('click', () => {
  showingExhausts = !showingExhausts;
  if (showingExhausts) {
    showingEnthusiasts = false;
    enthusiastSection.classList.add('hidden');
    document.getElementById('show-enthusiasts')!.textContent = "ENTHUSIASTS 🏆";

    exhaustSection.classList.remove('hidden');
    renderExhausts();
    exhaustSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('show-exhausts')!.textContent = "CLOSE LAB 🧪";
  } else {
    exhaustSection.classList.add('hidden');
    document.getElementById('show-exhausts')!.textContent = "EXHAUST LAB 🔥";
  }
});

// --- NITRO BTN ---
document.getElementById('nitro-btn')?.addEventListener('click', () => {
  document.body.classList.add('nitro-active');
  playEngineRev(150);
  particles.forEach(p => {
    p.vx *= 5;
    p.vy *= 5;
  });
  setTimeout(() => {
    document.body.classList.remove('nitro-active');
    particles.forEach(p => {
      p.vx /= 5;
      p.vy /= 5;
    });
  }, 2000);
});

// --- INIT ---
fetchData();
handleAuth();
