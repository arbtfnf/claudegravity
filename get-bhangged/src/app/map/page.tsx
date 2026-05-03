import Image from "next/image";
import { AshokaChakra, OmSymbol, DivaLamp, GangaWaves, MandalaPattern, Trishul } from "@/components/SanataniElements";

export default function Map() {
  const locations = [
    {
      city: "Varanasi",
      state: "Uttar Pradesh",
      desc: "The spiritual capital of India. Home to the most famous bhang shops authorized by the government since time immemorial. The thandai from Godowlia Crossing is legendary — a ritual in itself.",
      notable: "Vishwanath Temple, Dashashwamedh Ghat, Godowlia",
      vibe: "Ancient, mystical, alive with prayer",
      emoji: "🪔",
      image: "/images/varanasi_ghats.png",
    },
    {
      city: "Mathura",
      state: "Uttar Pradesh",
      desc: "The birthplace of Lord Krishna. Bhang is the soul of Holi here — consumed as small 'golis' or mixed into creamy lassis. During Lathmar Holi, the entire city transforms into a divine playground.",
      notable: "Holi Gate, Vishram Ghat, Krishna Janmabhoomi",
      vibe: "Colorful, devotional, ecstatic",
      emoji: "🎨",
      image: "/images/mathura_holi.png",
    },
    {
      city: "Pushkar",
      state: "Rajasthan",
      desc: "A holy town surrounding the only Brahma temple in India. Known for its 'Special Lassis' and the vibrant Pushkar Camel Fair. The energy around the sacred lake is magnetic.",
      notable: "Pushkar Lake, Brahma Temple, Main Market",
      vibe: "Serene, bohemian, spiritual",
      emoji: "🐪",
    },
    {
      city: "Jaisalmer",
      state: "Rajasthan",
      desc: "The Golden City of the Thar Desert. The government-authorized 'Bhang Shop' near the fort entrance has gained international fame for its authentic recipes — passed down through generations.",
      notable: "Fort Gate, Patwon Ki Haveli, Sam Sand Dunes",
      vibe: "Golden, adventurous, timeless",
      emoji: "🏜️",
    },
    {
      city: "Haridwar",
      state: "Uttarakhand",
      desc: "The Gateway to the Gods. During Kumbh Mela, Naga Sadhus and holy men offer bhang as prasad near Har Ki Pauri — a practice dating back millennia.",
      notable: "Har Ki Pauri, Ganga Aarti, Chandi Devi Temple",
      vibe: "Sacred, powerful, transformative",
      emoji: "🔱",
    },
    {
      city: "Orchha",
      state: "Madhya Pradesh",
      desc: "A hidden gem where Bundela dynasty history meets living traditions. Small shops near the medieval palace complex serve thandai using recipes from the royal kitchens.",
      notable: "Jehangir Mahal, Ram Raja Temple, Betwa River",
      vibe: "Historical, quiet, regal",
      emoji: "🏰",
    },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', bottom: '-100px', right: '-100px', zIndex: 0 }}>
        <AshokaChakra size={400} />
      </div>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '60px 24px 40px', position: 'relative', zIndex: 2 }}>
        <Trishul size={50} />
        <h1 className="cinzel glow-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', margin: '24px 0 16px' }}>
          Sacred <span style={{ color: '#ff9933' }}>Map</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Navigate the cities where the ancient tradition of Bhang remains vibrant, revered, and alive.
        </p>
        <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, transparent, #ff9933, transparent)', margin: '32px auto 0' }} />
      </section>

      {/* Featured: Varanasi */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 2 }}>
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '21/9', marginBottom: '60px' }} className="saffron-glow">
          <Image src="/images/varanasi_ghats.png" alt="Varanasi Ghats" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <DivaLamp />
              <DivaLamp />
              <DivaLamp />
            </div>
            <span style={{ color: '#c9a227', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>Featured Destination</span>
            <h2 className="cinzel glow-text" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: 'white', margin: '8px 0' }}>
              Varanasi — The Eternal City
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: '500px' }}>
              Where every stone whispers a prayer and every ghat tells a story of three thousand years.
            </p>
          </div>
        </div>

        {/* Location Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {locations.map((loc, i) => (
            <div key={i} className="glass glass-hover" style={{
              padding: '0',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {/* Image header if available */}
              {loc.image && (
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <Image src={loc.image} alt={loc.city} fill style={{ objectFit: 'cover', opacity: 0.5 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #050505 100%)' }} />
                </div>
              )}

              <div style={{ padding: loc.image ? '0 28px 28px' : '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div>
                    <span style={{ color: '#ff9933', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{loc.state}</span>
                    <h3 className="cinzel" style={{ fontSize: '1.6rem', color: 'white', marginTop: '4px' }}>
                      {loc.emoji} {loc.city}
                    </h3>
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7, margin: '16px 0 20px' }}>
                  {loc.desc}
                </p>

                {/* Info boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: 'rgba(255, 153, 51, 0.04)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255, 153, 51, 0.08)' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>Notable Spots</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{loc.notable}</p>
                  </div>
                  <div style={{ background: 'rgba(13, 74, 36, 0.06)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(13, 74, 36, 0.1)' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>The Vibe</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontStyle: 'italic' }}>{loc.vibe}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '80px' }}>
          <GangaWaves />
          <div className="glass" style={{ maxWidth: '700px', margin: '40px auto 0', padding: '48px', textAlign: 'center' }} >
            <OmSymbol size={35} />
            <h2 className="cinzel" style={{ fontSize: '1.6rem', color: 'white', margin: '16px 0 12px' }}>
              Beyond the Border
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontStyle: 'italic' }}>
              While deeply rooted in Indian soil, the philosophy and rituals of Bhang have inspired seekers, artists, and explorers worldwide — bridging ancient mysticism with modern consciousness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
