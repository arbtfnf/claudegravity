import Image from "next/image";
import Link from "next/link";
import { AshokaChakra, OmSymbol, Trishul, DivaLamp, GangaWaves, FloatingPetals, MandalaPattern } from "@/components/SanataniElements";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <FloatingPetals />

      {/* ===== HERO SECTION ===== */}
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero_shiva.png" alt="Lord Shiva in Himalayan Meditation" fill style={{ objectFit: 'cover', opacity: 0.5 }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.6) 50%, #050505 100%)' }} />
        </div>

        {/* Ashoka Chakra Background */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <AshokaChakra size={600} />
        </div>

        {/* Mandala corners */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', zIndex: 1 }}>
          <MandalaPattern size={400} />
        </div>
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', zIndex: 1 }}>
          <MandalaPattern size={350} />
        </div>

        {/* Hero Content */}
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '850px', padding: '0 24px' }}>
          {/* Trishul + Om Header */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
            <Trishul size={40} />
            <OmSymbol size={50} />
            <Trishul size={40} />
          </div>

          <h1 className="cinzel glow-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
            The Sacred <span style={{ color: '#ff9933' }}>Bhang</span> Chronicles
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', fontWeight: 300, letterSpacing: '0.05em', lineHeight: 1.6 }}>
            From the ripples of the cosmic ocean to the ghats of Banaras.<br />
            Where the divine meets the earthly, where Shiva meets his devotees.
          </p>

          {/* Diyas row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '40px' }}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{ animationDelay: `${i * 0.4}s` }}>
                <DivaLamp />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/origins" style={{
              background: 'linear-gradient(135deg, #ff9933, #e67300)',
              color: '#000',
              padding: '16px 40px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              transition: 'all 0.3s',
              boxShadow: '0 0 30px rgba(255, 153, 51, 0.3)',
            }}>
              ✦ Explore Origins
            </Link>
            <Link href="/stories" className="glass" style={{
              padding: '16px 40px',
              borderRadius: '999px',
              color: 'white',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 500,
              border: '1px solid rgba(255, 153, 51, 0.2)',
              transition: 'all 0.3s',
            }}>
              Read Stories
            </Link>
          </div>
        </div>

        {/* Ganga waves at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5 }}>
          <GangaWaves />
        </div>
      </section>

      {/* ===== VARANASI SECTION ===== */}
      <section style={{ position: 'relative', padding: '100px 20px', overflow: 'hidden' }}>
        {/* Subtle Ashoka Chakra background */}
        <div style={{ position: 'absolute', top: '50%', right: '-200px', transform: 'translateY(-50%)' }}>
          <AshokaChakra size={500} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div className="animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <DivaLamp />
              <span style={{ color: '#ff9933', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Banaras • The Eternal City</span>
            </div>
            <h2 className="cinzel" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '24px', lineHeight: 1.2 }}>
              Where the Ganga Whispers Ancient <span style={{ color: '#ff9933' }}>Secrets</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              In the labyrinthine alleys of Varanasi, where temple bells ring at dawn and the aroma of incense fills the air, government-licensed bhang shops have been serving pilgrims and seekers for centuries. Every sip of Thandai here carries the weight of three thousand years of tradition.
            </p>
            <Link href="/map" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ff9933',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              borderBottom: '1px solid rgba(255, 153, 51, 0.3)',
              paddingBottom: '4px',
              transition: 'all 0.3s',
            }}>
              Explore the Sacred Map <span>→</span>
            </Link>
          </div>

          {/* Varanasi Ghats Image */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }} className="saffron-glow animate-border-glow">
            <Image src="/images/varanasi_ghats.png" alt="Varanasi Ghats at Dusk" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 5 }}>
              <p className="cinzel" style={{ color: '#ff9933', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Dev Deepawali • Varanasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="divider-mandala" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <OmSymbol size={30} />
      </div>

      {/* ===== THANDAI + PREP SECTION ===== */}
      <section style={{ padding: '100px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Image first on this row */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '1/1' }} className="green-glow">
            <Image src="/images/thandai_prep.png" alt="Traditional Thandai Preparation" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(5,5,5,0.5) 100%)' }} />
          </div>

          <div>
            <span style={{ color: '#c9a227', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 600 }}>✦ The Sacred Elixir</span>
            <h2 className="cinzel" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', margin: '16px 0 24px', lineHeight: 1.2 }}>
              Five Sacred <span style={{ color: '#ff9933' }}>Plants</span> of the Vedas
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              Mentioned in the <em>Atharvaveda</em> over three millennia ago, Bhang is celebrated as one of the five sacred plants that releases us from anxiety and grants joy. Prepared with almonds, saffron, rose petals, and cardamom — it is more than an elixir; it is a spiritual bridge.
            </p>
            {/* Ingredient tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {['Almonds', 'Saffron', 'Rose Petals', 'Cardamom', 'Fennel', 'Poppy Seeds'].map((ingredient) => (
                <span key={ingredient} className="glass" style={{
                  padding: '6px 16px',
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.6)',
                  borderRadius: '999px',
                  letterSpacing: '0.1em',
                }}>
                  {ingredient}
                </span>
              ))}
            </div>
            <Link href="/origins" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#ff9933', fontSize: '0.8rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontWeight: 600,
              borderBottom: '1px solid rgba(255, 153, 51, 0.3)', paddingBottom: '4px',
            }}>
              Discover the Legend <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RITUALS SECTION ===== */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, #050505 0%, #0a0500 50%, #050505 100%)', maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* Rotating Mandala background */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <MandalaPattern size={800} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <DivaLamp />
              <h2 className="cinzel glow-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>Timeless Rituals</h2>
              <DivaLamp />
            </div>
            <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, transparent, #ff9933, transparent)', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: "Holi",
                subtitle: "The Festival of Colors",
                desc: "The vibrant explosion of colors where Thandai flows as the spirit of celebration. In Mathura and Vrindavan, bhang is the heartbeat of Holi.",
                link: "/rituals#holi",
                image: "/images/mathura_holi.png",
                emoji: "🎨"
              },
              {
                title: "Maha Shivratri",
                subtitle: "The Great Night of Shiva",
                desc: "Devotees offer Bhang as Prasad to honor the Lord of Meditation. The night-long vigil is sustained by deep prayer and the cooling elixir.",
                link: "/rituals#shivratri",
                image: "/images/floating_diyas.png",
                emoji: "🔱"
              },
              {
                title: "Banaras Ghats",
                subtitle: "The Eternal City",
                desc: "Where the ancient rituals of the holy city meet the daily rhythm of life. Government-licensed shops serve seekers from across the world.",
                link: "/map#varanasi",
                image: "/images/varanasi_ghats.png",
                emoji: "🪔"
              }
            ].map((item, idx) => (
              <div key={idx} className="glass glass-hover" style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                {/* Card Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #050505 100%)' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '2rem' }}>{item.emoji}</div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 className="cinzel" style={{ fontSize: '1.4rem', color: 'white', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ color: '#ff9933', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>{item.subtitle}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>{item.desc}</p>
                  <Link href={item.link} style={{
                    color: '#ff9933', fontSize: '0.7rem', textTransform: 'uppercase',
                    letterSpacing: '0.15em', fontWeight: 600,
                    borderBottom: '1px solid rgba(255, 153, 51, 0.2)', paddingBottom: '2px',
                  }}>
                    Explore More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GANGA WAVE DIVIDER ===== */}
      <GangaWaves />

      {/* ===== STORIES QUOTE ===== */}
      <section style={{ padding: '120px 20px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <AshokaChakra size={400} />
        </div>

        <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <OmSymbol size={40} />
          <h3 className="cinzel" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', margin: '32px 0', lineHeight: 1.7 }}>
            &ldquo;In the heart of Mathura, as the bells rang at dusk, the first sip of chilled thandai felt like a connection to something ancient — a whisper from the gods themselves.&rdquo;
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ width: '30px', height: '1px', background: '#ff9933' }} />
            <p style={{ color: '#ff9933', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Shared by Arjun K. • Mathura</p>
            <div style={{ width: '30px', height: '1px', background: '#ff9933' }} />
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/stories" style={{
              border: '1px solid rgba(255, 153, 51, 0.25)',
              color: 'white',
              padding: '14px 36px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}>
              ✦ Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FLOATING DIYAS SECTION ===== */}
      <section style={{ padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', aspectRatio: '21/9' }} className="saffron-glow">
          <Image src="/images/floating_diyas.png" alt="Floating Diyas on the Ganga" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.8) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '24px' }}>
            <Trishul size={50} />
            <h2 className="cinzel glow-text" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: 'white', margin: '24px 0 16px' }}>
              Light a Diya for the World
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '500px' }}>
              Every flame carries a prayer. Every prayer carries a story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
