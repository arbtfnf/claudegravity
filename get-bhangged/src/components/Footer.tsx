import { GangaWaves, OmSymbol, DivaLamp } from './SanataniElements';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', marginTop: '80px', borderTop: '1px solid rgba(255, 153, 51, 0.08)', background: 'linear-gradient(180deg, #050505 0%, #0a0500 100%)' }}>
      {/* Ganga wave divider */}
      <GangaWaves />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <DivaLamp />
              <h3 className="cinzel" style={{ fontSize: '1.3rem', color: '#ff9933' }}>getBhangged</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.8 }}>
              Exploring the mystical roots and spiritual essence of India&apos;s most sacred plant. Preserving stories and rituals that transcend time.
            </p>
            {/* Decorative diyas row */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#ff9933',
                  boxShadow: '0 0 8px rgba(255, 153, 51, 0.5)',
                  animationDelay: `${i * 0.5}s`,
                }} className="flame-flicker" />
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="cinzel" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>
              ✦ Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/origins', label: 'Sacred Origins' },
                { href: '/rituals', label: 'Festivals & Rituals' },
                { href: '/stories', label: 'Shared Stories' },
                { href: '/map', label: 'Sacred Map' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', transition: 'all 0.3s' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="cinzel" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>
              ✦ Connect
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Subscribe to the Thandai Chronicles.
            </p>
            <div style={{ display: 'flex', gap: '0' }}>
              <input
                type="email"
                placeholder="spirit@email.com"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255, 153, 51, 0.15)',
                  borderRight: 'none',
                  padding: '10px 16px',
                  fontSize: '0.8rem',
                  color: 'white',
                  outline: 'none',
                  borderRadius: '8px 0 0 8px',
                  flex: 1,
                }}
              />
              <button style={{
                background: '#ff9933',
                color: '#000',
                padding: '10px 20px',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none',
                borderRadius: '0 8px 8px 0',
                cursor: 'pointer',
              }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with Om */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 153, 51, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>
            © 2026 getBhangged • Cultivating consciousness responsibly
          </p>
          <OmSymbol size={20} />
        </div>
      </div>
    </footer>
  );
}
