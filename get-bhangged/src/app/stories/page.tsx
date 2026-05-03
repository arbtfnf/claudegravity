"use client";
import { useState } from 'react';
import { AshokaChakra, OmSymbol, DivaLamp, GangaWaves, MandalaPattern } from "@/components/SanataniElements";

export default function Stories() {
  const [stories] = useState([
    {
      author: "Arjun K.",
      location: "Mathura, UP",
      text: "The first sip of chilled thandai during Lathmar Holi was transformative. The vibrant colors of the crowd blurred into a mosaic of joy, and for a moment, I felt the ancient heartbeat of the city — as if Krishna himself was dancing beside me.",
      date: "Holi 2024",
      emoji: "🎨"
    },
    {
      author: "Priya S.",
      location: "Varanasi, UP",
      text: "Watching the Ganga Aarti after visiting the old bhang shop near Dashashwamedh Ghat... everything felt perfectly aligned. The bells, the chanting, the rhythmic flow of the river — it spoke directly to my soul. Banaras changes you.",
      date: "Shivratri 2024",
      emoji: "🪔"
    },
    {
      author: "Rohan M.",
      location: "Pushkar, Rajasthan",
      text: "Pushkar has a unique energy. Sitting by the Sarovar with a 'Special Lassi' as the sun set behind the Aravali hills — it wasn't just about the drink; it was about the peace that followed. The camels, the temples, the silence.",
      date: "November 2023",
      emoji: "🐪"
    },
    {
      author: "Meera D.",
      location: "Jaisalmer, Rajasthan",
      text: "The golden fort at sunset, a glass of bhang thandai from the famous government shop, and the haunting notes of a Rajasthani folk song echoing through the sandstone walls. That evening in Jaisalmer was pure magic.",
      date: "December 2023",
      emoji: "🏜️"
    },
    {
      author: "Vikram T.",
      location: "Haridwar, Uttarakhand",
      text: "During Kumbh Mela, the Naga Sadhus offered us bhang as prasad near Har Ki Pauri. The experience was humbling — thousands of years of tradition alive in a single moment, by the banks of the holy Ganga.",
      date: "January 2024",
      emoji: "🔱"
    },
    {
      author: "Anjali R.",
      location: "Orchha, MP",
      text: "We stumbled upon a tiny bhang shop in Orchha, hidden behind the Jehangir Mahal. The owner, an elderly man, told us stories of the Bundela kings who would drink thandai before battle. History is alive in every sip here.",
      date: "March 2024",
      emoji: "🏰"
    }
  ]);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', top: '40%', right: '-200px', zIndex: 0 }}>
        <MandalaPattern size={500} />
      </div>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '60px 24px 40px', position: 'relative', zIndex: 2 }}>
        <OmSymbol size={40} />
        <h1 className="cinzel glow-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', margin: '20px 0 16px' }}>
          Shared <span style={{ color: '#ff9933' }}>Stories</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Every sip has a story. Every ritual has a memory. These are the voices of seekers from across the land.
        </p>
        <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, transparent, #ff9933, transparent)', margin: '32px auto 0' }} />
      </section>

      {/* Stories Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {stories.map((story, i) => (
            <div key={i} className="glass glass-hover" style={{
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {/* Emoji watermark */}
              <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '2.5rem', opacity: 0.1 }}>{story.emoji}</div>

              {/* Quote */}
              <div>
                <div style={{ color: '#ff9933', fontSize: '2rem', lineHeight: 1, marginBottom: '12px', fontFamily: 'serif' }}>&ldquo;</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {story.text}
                </p>
              </div>

              {/* Author */}
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 600 }}>{story.author}</h4>
                  <p style={{ color: '#ff9933', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{story.location}</p>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>{story.date}</span>
              </div>
            </div>
          ))}

          {/* Add Story Card */}
          <div className="glass" style={{
            padding: '32px',
            borderRadius: '20px',
            border: '2px dashed rgba(255, 153, 51, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: '280px',
            cursor: 'pointer',
            transition: 'all 0.5s',
            background: 'rgba(255, 153, 51, 0.02)',
          }}>
            <div className="diya-glow" style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(255, 153, 51, 0.06)',
              border: '1px solid rgba(255, 153, 51, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
            }}>
              <DivaLamp />
            </div>
            <h4 className="cinzel" style={{ color: 'white', fontSize: '1rem', marginBottom: '8px' }}>Add Your Story</h4>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>Share your divine experience with the community</p>
          </div>
        </div>
      </section>
    </div>
  );
}
