"use client";

export function AshokaChakra({ size = 120, className = "", fast = false }: { size?: number; className?: string; fast?: boolean }) {
  const spokes = 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${fast ? 'ashoka-chakra-fast' : 'ashoka-chakra'} ${className}`}
      style={{ opacity: 0.08 }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="#ff9933" strokeWidth="3" />
      <circle cx="100" cy="100" r="20" fill="#ff9933" />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const x2 = 100 + 88 * Math.cos((angle * Math.PI) / 180);
        const y2 = 100 + 88 * Math.sin((angle * Math.PI) / 180);
        return (
          <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="#ff9933" strokeWidth="1.5" />
        );
      })}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const cx = 100 + 55 * Math.cos((angle * Math.PI) / 180);
        const cy = 100 + 55 * Math.sin((angle * Math.PI) / 180);
        return <circle key={`dot-${i}`} cx={cx} cy={cy} r="3" fill="#ff9933" />;
      })}
    </svg>
  );
}

export function OmSymbol({ size = 60, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`om-pulse ${className}`}
      style={{
        fontSize: size,
        fontFamily: 'serif',
        color: '#ff9933',
        userSelect: 'none',
        lineHeight: 1,
        display: 'inline-block',
      }}
    >
      ॐ
    </span>
  );
}

export function Trishul({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 100 150"
      className={`trishul-glow ${className}`}
      fill="none"
    >
      <path d="M50 150 L50 50" stroke="#ff9933" strokeWidth="3" />
      <path d="M50 50 C50 30, 50 15, 50 5" stroke="#ff9933" strokeWidth="3" />
      <path d="M30 55 C30 25, 50 5, 50 5 C50 5, 70 25, 70 55" stroke="#ff9933" strokeWidth="2.5" fill="none" />
      <path d="M15 60 C15 30, 30 20, 35 45" stroke="#ff9933" strokeWidth="2" fill="none" />
      <path d="M85 60 C85 30, 70 20, 65 45" stroke="#ff9933" strokeWidth="2" fill="none" />
      <circle cx="50" cy="55" r="4" fill="#ff9933" />
    </svg>
  );
}

export function DivaLamp({ className = "" }: { className?: string }) {
  return (
    <div className={`diya-float ${className}`} style={{ display: 'inline-block' }}>
      <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
        {/* Flame */}
        <ellipse cx="20" cy="12" rx="5" ry="10" fill="#ffb347" className="flame-flicker" />
        <ellipse cx="20" cy="14" rx="3" ry="6" fill="#fff3cd" className="flame-flicker" style={{ animationDelay: '0.3s' }} />
        {/* Diya body */}
        <path d="M8 30 Q8 25, 20 22 Q32 25, 32 30 L35 38 Q35 42, 20 42 Q5 42, 5 38 Z" fill="#c9a227" />
        <ellipse cx="20" cy="38" rx="15" ry="4" fill="#a88520" />
      </svg>
    </div>
  );
}

export function GangaWaves({ className = "" }: { className?: string }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '60px', position: 'relative' }} className={className}>
      <svg
        className="ganga-wave"
        style={{ width: '200%', height: '60px' }}
        viewBox="0 0 2400 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q150 10, 300 30 Q450 50, 600 30 Q750 10, 900 30 Q1050 50, 1200 30 Q1350 10, 1500 30 Q1650 50, 1800 30 Q1950 10, 2100 30 Q2250 50, 2400 30"
          fill="none"
          stroke="rgba(255, 153, 51, 0.15)"
          strokeWidth="2"
        />
        <path
          d="M0 40 Q150 20, 300 40 Q450 60, 600 40 Q750 20, 900 40 Q1050 60, 1200 40 Q1350 20, 1500 40 Q1650 60, 1800 40 Q1950 20, 2100 40 Q2250 60, 2400 40"
          fill="none"
          stroke="rgba(26, 58, 92, 0.25)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function FloatingPetals() {
  const petals = Array.from({ length: 12 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${10 + Math.random() * 10}s`,
    size: 6 + Math.random() * 10,
    color: ['#ff9933', '#ff69b4', '#c9a227', '#ffb347', '#8b5cf6'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {petals.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-20px',
            width: p.size,
            height: p.size,
            borderRadius: '50% 0 50% 0',
            background: p.color,
            opacity: 0.4,
            animation: `floatPetal ${p.duration} ${p.delay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function MandalaPattern({ size = 300, className = "" }: { size?: number; className?: string }) {
  const rings = [4, 8, 12, 16];
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" className={`ashoka-chakra ${className}`} style={{ opacity: 0.04 }}>
      {rings.map((count, ringIdx) => {
        const radius = 30 + ringIdx * 35;
        return Array.from({ length: count }).map((_, i) => {
          const angle = (i * 360) / count;
          const cx = 150 + radius * Math.cos((angle * Math.PI) / 180);
          const cy = 150 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <circle key={`${ringIdx}-${i}`} cx={cx} cy={cy} r={4 - ringIdx * 0.5} fill="#ff9933" />
          );
        });
      })}
      <circle cx="150" cy="150" r="8" fill="#ff9933" />
      {[40, 75, 110, 145].map((r, i) => (
        <circle key={`ring-${i}`} cx="150" cy="150" r={r} fill="none" stroke="#ff9933" strokeWidth="0.5" />
      ))}
    </svg>
  );
}
