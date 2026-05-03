import Image from "next/image";
import { AshokaChakra, OmSymbol, DivaLamp, GangaWaves, MandalaPattern } from "@/components/SanataniElements";

export default function Rituals() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', top: '30%', left: '-200px', zIndex: 0 }}>
        <MandalaPattern size={500} />
      </div>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '60px 24px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
          <DivaLamp />
          <DivaLamp />
          <DivaLamp />
        </div>
        <h1 className="cinzel glow-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '16px' }}>
          Ancient <span style={{ color: '#ff9933' }}>Rituals</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Sacred ceremonies where Bhang transcends from a drink to a divine offering.
        </p>
        <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, transparent, #ff9933, transparent)', margin: '32px auto 0' }} />
      </section>

      {/* HOLI SECTION */}
      <section id="holi" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#ff69b4', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 600 }}>🎨 Festival of Colors</span>
            <h2 className="cinzel" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', margin: '16px 0 24px', lineHeight: 1.2 }}>
              Holi in <span style={{ color: '#ff9933' }}>Mathura</span> & <span style={{ color: '#8b5cf6' }}>Vrindavan</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              As winter fades and spring blooms, North India erupts in a symphony of colors. In the Braj region — the land of Krishna — Holi is not just a festival, it is an experience that shakes the soul. The air fills with gulal, the streets echo with &ldquo;Holi hai!&rdquo;, and the sacred Thandai flows freely.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                "Chilled Thandai with crushed almonds, rose petals, and saffron strands",
                "Pakoras infused with bhang leaves — crispy, golden, and aromatic",
                "Lathmar Holi in Barsana — where women playfully beat men with sticks",
                "The spirit of 'Bura na mano, Holi hai' — let go and be free",
              ].map((detail, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    minWidth: '8px', height: '8px', borderRadius: '50%',
                    background: ['#ff69b4', '#ff9933', '#8b5cf6', '#c9a227'][i],
                    boxShadow: `0 0 10px ${['rgba(255, 105, 180, 0.5)', 'rgba(255, 153, 51, 0.5)', 'rgba(139, 92, 246, 0.5)', 'rgba(201, 162, 39, 0.5)'][i]}`,
                  }} />
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mathura Holi Image */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }} className="saffron-glow">
            <Image src="/images/mathura_holi.png" alt="Holi celebration in Mathura" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '24px', background: '#ff9933', borderRadius: '2px' }} />
              <div>
                <p className="cinzel" style={{ color: 'white', fontSize: '0.9rem' }}>Mathura, Uttar Pradesh</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>Land of Krishna • Birthplace of Holi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GangaWaves />

      {/* MAHA SHIVRATRI SECTION */}
      <section id="shivratri" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Image first */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }} className="green-glow">
            <Image src="/images/floating_diyas.png" alt="Diyas floating during Shivratri" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '24px', background: '#0d4a24', borderRadius: '2px' }} />
              <div>
                <p className="cinzel" style={{ color: 'white', fontSize: '0.9rem' }}>Maha Shivratri</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>The Great Night of Lord Shiva</p>
              </div>
            </div>
          </div>

          <div>
            <span style={{ color: '#c9a227', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 600 }}>🔱 The Great Night</span>
            <h2 className="cinzel" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', margin: '16px 0 24px', lineHeight: 1.2 }}>
              Maha <span style={{ color: '#ff9933' }}>Shivratri</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              On the 14th night of the dark fortnight, when the cosmos aligns with Shiva&apos;s energy, devotees across India stay awake in prayer and meditation. Bhang is consumed as sacred Prasad — not for recreation, but as a spiritual tool to quiet the mind and open the heart.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                "Offering bhang paste to the Shivalinga as an act of devotion",
                "Sadhus in deep meditation at the ghats of Varanasi and Haridwar",
                "Night-long jagran (vigil) sustained by prayer and the sacred elixir",
                "Chanting 'Om Namah Shivaya' as the smoke of dhoop fills the temple air",
              ].map((detail, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="flame-flicker" style={{
                    minWidth: '8px', height: '8px', borderRadius: '50%',
                    background: '#c9a227',
                    boxShadow: '0 0 10px rgba(201, 162, 39, 0.5)',
                    animationDelay: `${i * 0.3}s`,
                  }} />
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION METHOD */}
      <section style={{ padding: '80px 24px', position: 'relative', zIndex: 2, background: 'linear-gradient(180deg, #050505, #0a0500, #050505)', maxWidth: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <AshokaChakra size={500} />
        </div>

        <div className="glass" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <OmSymbol size={35} />
          <h2 className="cinzel" style={{ fontSize: '2rem', color: 'white', margin: '20px 0 16px' }}>
            The Art of <span style={{ color: '#ff9933' }}>Thandai</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            The traditional preparation is a meditation in itself — a slow, rhythmic process passed down through generations.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px' }}>
            {[
              { step: "Soaking", desc: "Fresh leaves soaked in water for hours", icon: "🌿" },
              { step: "Grinding", desc: "Manual grinding on sil-batta stone", icon: "⚙️" },
              { step: "Blending", desc: "Mixed with milk, nuts, and spices", icon: "🥛" },
              { step: "Serving", desc: "Chilled and garnished with rose petals", icon: "🪔" },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div className="diya-glow" style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(255, 153, 51, 0.08)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  {item.icon}
                </div>
                <h4 className="cinzel" style={{ color: 'white', fontSize: '0.85rem', letterSpacing: '0.1em' }}>{item.step}</h4>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
