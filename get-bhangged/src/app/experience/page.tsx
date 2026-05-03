"use client";
import { useState, useEffect, useRef } from 'react';
import { OmSymbol, MandalaPattern, AshokaChakra } from "@/components/SanataniElements";

export default function Experience() {
  const [phase, setPhase] = useState(0); // 0=intro, 1=onset, 2=peak, 3=transcend
  const [started, setStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Phase progression
  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setElapsed(prev => {
        const next = prev + 1;
        if (next >= 8 && phase === 0) setPhase(1);
        if (next >= 20 && phase === 1) setPhase(2);
        if (next >= 35 && phase === 2) setPhase(3);
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, phase]);

  // Canvas psychedelic effect
  useEffect(() => {
    if (!started || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animId: number;
    let t = 0;

    const draw = () => {
      t += 0.008;
      ctx.globalAlpha = 0.03;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Mandala rings
      const rings = phase >= 2 ? 12 : phase >= 1 ? 8 : 4;
      for (let r = 0; r < rings; r++) {
        const radius = 50 + r * (40 + Math.sin(t + r) * 15);
        const spokes = 12 + r * 2;
        for (let s = 0; s < spokes; s++) {
          const angle = (s / spokes) * Math.PI * 2 + t * (r % 2 === 0 ? 1 : -1) * 0.5;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const size = 3 + Math.sin(t * 2 + r + s) * 2;

          const hue = (t * 30 + r * 30 + s * 15) % 360;
          const saturation = 70 + Math.sin(t + r) * 20;
          const lightness = phase >= 3 ? 60 : phase >= 2 ? 50 : 40;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.3 + phase * 0.15})`;
          ctx.fill();

          // Connect lines in peak phase
          if (phase >= 2 && s % 2 === 0) {
            const nx = cx + Math.cos(angle + Math.PI / spokes) * radius;
            const ny = cy + Math.sin(angle + Math.PI / spokes) * radius;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.1)`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Floating particles
      const particleCount = phase >= 3 ? 60 : phase >= 2 ? 30 : 10;
      for (let p = 0; p < particleCount; p++) {
        const px = cx + Math.sin(t * 0.7 + p * 1.3) * (200 + p * 8);
        const py = cy + Math.cos(t * 0.5 + p * 0.9) * (150 + p * 6);
        const pSize = 1 + Math.sin(t + p) * 1.5;
        const pHue = (t * 50 + p * 25) % 360;
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${pHue}, 80%, 60%, ${0.4 + Math.sin(t + p) * 0.3})`;
        ctx.fill();
      }

      // Central Om glow in transcend
      if (phase >= 3) {
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200 + Math.sin(t) * 50);
        gradient.addColorStop(0, `hsla(30, 100%, 60%, ${0.15 + Math.sin(t * 2) * 0.1})`);
        gradient.addColorStop(0.5, `hsla(280, 80%, 50%, ${0.05 + Math.sin(t) * 0.03})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [started, phase]);

  const phaseData = [
    { name: "The First Sip", desc: "A warmth spreads through your chest. The world softens at the edges.", color: '#c9a227' },
    { name: "The Onset", desc: "Colors begin to breathe. Sound becomes texture. Time stretches like the Ganga.", color: '#ff9933' },
    { name: "The Peak", desc: "The mandala unfolds. You are everywhere and nowhere. The cosmos dances.", color: '#8b5cf6' },
    { name: "Transcendence", desc: "The third eye opens. You see the thread connecting all things. ॐ", color: '#ff69b4' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: started ? 1 : 0,
          transition: 'opacity 3s ease-in',
        }}
      />

      {/* Background pulsing color overlay */}
      {started && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: phase >= 3
            ? `radial-gradient(circle at 50% 50%, hsla(${(elapsed * 5) % 360}, 60%, 10%, 0.3), transparent)`
            : phase >= 2
            ? `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08), transparent)`
            : 'transparent',
          transition: 'all 3s ease',
          animation: phase >= 2 ? 'omPulse 4s ease-in-out infinite' : 'none',
        }} />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: '100px' }}>
        {/* Intro */}
        {!started && (
          <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
          }}>
            {/* Rotating Ashoka behind */}
            <div style={{ position: 'absolute', opacity: 0.03 }}>
              <AshokaChakra size={600} />
            </div>

            <OmSymbol size={60} />
            <h1 className="cinzel glow-text" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'white',
              margin: '32px 0 20px',
              lineHeight: 1.1,
            }}>
              The <span style={{ color: '#8b5cf6' }}>Psychedelic</span> Journey
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '1.15rem',
              maxWidth: '550px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              An immersive visual experience that simulates the stages of a traditional bhang journey — from the first sip to transcendence.
            </p>

            <button
              onClick={() => setStarted(true)}
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ff9933)',
                color: 'white',
                border: 'none',
                padding: '18px 48px',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(255, 153, 51, 0.15)',
                transition: 'all 0.3s',
                fontFamily: "'Cinzel', serif",
              }}
            >
              🪔 Begin the Journey
            </button>

            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', marginTop: '24px', fontStyle: 'italic' }}>
              Best experienced with headphones and in a dark room
            </p>
          </div>
        )}

        {/* Active Experience */}
        {started && (
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
          }}>
            {/* Phase indicator */}
            <div style={{
              position: 'fixed',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              zIndex: 20,
            }}>
              {phaseData.map((p, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: phase >= i ? 1 : 0.2,
                  transition: 'all 1s ease',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: p.color,
                    boxShadow: phase === i ? `0 0 15px ${p.color}` : 'none',
                    transition: 'all 1s',
                  }} />
                  <span style={{
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: phase === i ? p.color : 'rgba(255,255,255,0.3)',
                    fontWeight: phase === i ? 700 : 400,
                    transition: 'all 1s',
                  }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Central experience text */}
            <div style={{
              transition: 'all 2s ease',
              transform: phase >= 3 ? 'scale(1.1)' : 'scale(1)',
            }}>
              {/* Spinning mandala behind text */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.06 + phase * 0.03,
                transition: 'all 3s',
              }}>
                <MandalaPattern size={phase >= 3 ? 600 : phase >= 2 ? 450 : 300} />
              </div>

              <div style={{
                fontSize: phase >= 3 ? '5rem' : phase >= 2 ? '4rem' : '3rem',
                transition: 'all 2s ease',
                marginBottom: '24px',
              }}>
                <OmSymbol size={phase >= 3 ? 80 : phase >= 2 ? 60 : 45} />
              </div>

              <h2 className="cinzel" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: phaseData[phase].color,
                marginBottom: '16px',
                transition: 'all 2s ease',
                textShadow: `0 0 30px ${phaseData[phase].color}40`,
              }}>
                {phaseData[phase].name}
              </h2>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '1.1rem',
                maxWidth: '500px',
                lineHeight: 1.8,
                transition: 'all 2s ease',
                fontStyle: 'italic',
              }}>
                {phaseData[phase].desc}
              </p>

              {/* Trippy quotes that appear during peak */}
              {phase >= 2 && (
                <div style={{
                  marginTop: '48px',
                  padding: '24px 40px',
                  border: `1px solid ${phaseData[phase].color}20`,
                  borderRadius: '16px',
                  background: `${phaseData[phase].color}08`,
                  animation: 'fadeInUp 2s ease-out forwards',
                }}>
                  <p style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                  }}>
                    {phase >= 3
                      ? '"The drop merges with the ocean. The self dissolves into the infinite. This is what Shiva knew on the mountain."'
                      : '"The mind is a river — let it flow. The body is a temple — let it glow. The spirit is the sky — let it go."'
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Timer */}
            <div style={{
              position: 'fixed',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              zIndex: 20,
            }}>
              <div style={{
                width: '200px',
                height: '2px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${Math.min((elapsed / 45) * 100, 100)}%`,
                  background: `linear-gradient(90deg, #c9a227, #ff9933, #8b5cf6, #ff69b4)`,
                  transition: 'width 1s linear',
                  borderRadius: '1px',
                }} />
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                {Math.floor(elapsed / 60)}:{(elapsed % 60).toString().padStart(2, '0')} into the journey
              </span>
              <button
                onClick={() => { setStarted(false); setPhase(0); setElapsed(0); }}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.3)',
                  padding: '6px 20px',
                  borderRadius: '999px',
                  fontSize: '0.6rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginTop: '4px',
                }}
              >
                Return to Reality
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
