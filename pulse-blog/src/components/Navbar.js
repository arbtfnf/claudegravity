import Link from 'next/link';
import CivilRating from './CivilRating';

export default function Navbar() {
  return (
    <nav style={styles.nav} className="glass">
      <div style={styles.left}>
        <div style={styles.logo} className="heading-font">PULSE</div>
        <div style={styles.links}>
          <Link href="/" style={styles.link}>Feed</Link>
          <Link href="/initiatives" style={styles.link}>Initiatives</Link>
          <Link href="/tech" style={styles.link}>Tech</Link>
          <Link href="/ai-editor" style={styles.link}>Editor</Link>
        </div>
      </div>
      <div style={styles.right}>
        <a href="https://buymeacoffee.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <button style={styles.coffeeBtn}>☕ Support Pulse</button>
        </a>
        <CivilRating />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '95%',
    maxWidth: '1200px',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    borderRadius: '16px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  logo: {
    fontSize: '20px',
    letterSpacing: '4px',
    background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '900',
  },
  links: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '600',
    color: 'rgba(255,255,255,0.5)',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'var(--transition)',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  coffeeBtn: {
    background: 'rgba(255, 215, 0, 0.1)',
    color: '#FFD700',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    padding: '8px 15px',
    borderRadius: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'var(--transition)',
  }
};
