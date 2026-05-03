import Image from "next/image";
import { AshokaChakra, OmSymbol, Trishul, DivaLamp, GangaWaves, MandalaPattern } from "@/components/SanataniElements";

export default function Origins() {
  const timeline = [
    { era: "~1500 BCE", title: "The Atharvaveda", desc: "Bhang is listed as one of the five sacred plants of India — a 'releaser of anxiety' and a 'joy-giver' for humanity." },
    { era: "~500 BCE", title: "Samudra Manthan", desc: "Legends tell of cannabis sprouting where drops of Amrit fell during the churning of the cosmic ocean by gods and demons." },
    { era: "~200 CE", title: "Ayurvedic Integration", desc: "Classical Ayurvedic texts document Bhang's medicinal properties for digestion, pain relief, and mental tranquility." },
    { era: "~1000 CE", title: "Sufi & Bhakti Movements", desc: "Mystics and saints across traditions used Bhang as an aid for deep meditation and spiritual communion." },
    { era: "Present", title: "Living Tradition", desc: "Government-licensed shops in Varanasi, Mathura, and Rajasthan continue serving pilgrims and seekers." },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* Background decorations */}
      <div style={{ position: 'fixed', top: '20%', right: '-150px', zIndex: 0 }}>
        <AshokaChakra size={400} />
      </div>
      <div style={{ position: 'fixed', bottom: '10%', left: '-150px', zIndex: 0 }}>
        <MandalaPattern size={350} />
      </div>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '60px 24px 40px', position: 'relative', zIndex: 2 }}>
        <Trishul size={50} className="" />
        <h1 className="cinzel glow-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', margin: '24px 0 16px' }}>
          Sacred <span style={{ color: '#ff9933' }}>Origins</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          A journey through the mythological, spiritual, and historical roots of India&apos;s most revered plant.
        </p>
        <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, transparent, #ff9933, transparent)', margin: '32px auto 0' }} />
      </section>

      {/* Samudra Manthan Story */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}>
          {/* Left: The Story */}
          <div>
            <div className="glass" style={{ padding: '40px', borderLeft: '3px solid #ff9933', borderRadius: '0 16px 16px 0', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <OmSymbol size={30} />
                <h2 className="cinzel" style={{ fontSize: '1.6rem', color: 'white' }}>The Churning of the Ocean</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', lineHeight: 1.8, fontSize: '1.05rem' }}>
                &ldquo;When the gods and demons churned the cosmic ocean — the Samudra Manthan — to find the nectar of immortality, drops of Amrit fell upon the earth. From these divine drops, the first cannabis plants sprouted, gifting humanity a bridge between the mortal and the divine.&rdquo;
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { text: "Lord Shiva, the Destroyer and Transformer, discovered the plant while wandering the Himalayan ranges during deep meditation." },
                { text: "When Shiva consumed the deadly Halahala poison to save the universe, Goddess Parvati offered him Bhang to cool his burning throat — and his throat turned blue forever." },
                { text: "The Atharvaveda, one of the four sacred Vedas, lists Bhang among the five sacred plants — a 'releaser of anxiety' and 'joy-giver' for all of humanity." },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="flame-flicker" style={{
                    minWidth: '8px', height: '8px', borderRadius: '50%',
                    background: '#ff9933', marginTop: '8px',
                    boxShadow: '0 0 12px rgba(255, 153, 51, 0.5)',
                  }} />
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lord of Bhang */}
          <div>
            <div className="glass" style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}>
              {/* Ashoka Chakra watermark */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px' }}>
                <AshokaChakra size={200} fast />
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <Trishul size={35} />
                  <h3 className="cinzel glow-text" style={{ fontSize: '1.8rem', color: 'white' }}>The Lord of Bhang</h3>
                </div>

                {[
                  { title: "🔱 The Protector", desc: "Shiva brought the sacred plant from the Himalayas for the benefit of mankind, as a tool for healing and transcendence." },
                  { title: "🧘 The Meditator", desc: "Sadhus and ascetics use Bhang to focus their minds during intense spiritual penance, channeling Shiva's own practice." },
                  { title: "🪔 The Compassionate", desc: "Bhang is offered to the Shivalinga in temples across India — a symbol of surrender and cooling the heat of worldly suffering." },
                  { title: "🌿 The Healer", desc: "Ayurvedic traditions describe Bhang as a medicine for the body and soul — calming the nervous system and aiding digestion." },
                ].map((item, i) => (
                  <div key={i} style={{
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    paddingBottom: '20px',
                    marginBottom: '20px',
                  }}>
                    <h4 style={{ color: '#ff9933', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div style={{
              marginTop: '24px',
              padding: '32px',
              background: 'linear-gradient(135deg, rgba(13, 74, 36, 0.15), rgba(5, 5, 5, 0.9))',
              borderRadius: '16px',
              border: '1px solid rgba(13, 74, 36, 0.2)',
            }} className="green-glow">
              <p style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.8 }}>
                &ldquo;Bhang is the nectar that flows from the hair of Shiva, cooling the fire of the mind and opening the third eye of perception.&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                <div style={{ width: '20px', height: '1px', background: '#0d4a24' }} />
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Ancient Sanskrit Text</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <GangaWaves />

      {/* Timeline */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="cinzel" style={{ fontSize: '2rem', color: 'white', marginBottom: '8px' }}>
            Through the <span style={{ color: '#ff9933' }}>Ages</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>A timeline of Bhang in Indian civilization</p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px',
            background: 'linear-gradient(to bottom, transparent, #ff9933, #0d4a24, transparent)',
          }} />

          {timeline.map((item, i) => (
            <div key={i} style={{ marginBottom: '48px', position: 'relative' }}>
              {/* Dot */}
              <div className="flame-flicker" style={{
                position: 'absolute', left: '-34px', top: '4px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: '#ff9933',
                boxShadow: '0 0 15px rgba(255, 153, 51, 0.5)',
                animationDelay: `${i * 0.5}s`,
              }} />
              <span style={{ color: '#c9a227', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>
                {item.era}
              </span>
              <h3 className="cinzel" style={{ color: 'white', fontSize: '1.2rem', margin: '8px 0' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
