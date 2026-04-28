'use client';
import Link from 'next/link';
import { useState } from 'react';
import CivilRating from './CivilRating';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav} className="glass">
        <div style={styles.left}>
          <div style={styles.logo} className="heading-font">PULSE</div>
          <div style={styles.links}>
            <Link href="/initiatives" style={styles.link}>Initiatives</Link>
            <Link href="/mood-protocol" style={styles.link}>Mood Simulator</Link>
            <Link href="/psyche" style={styles.link}>Psyche Eval</Link>
            <Link href="/tech" style={styles.link}>Tech Challenge</Link>
          </div>
        </div>
        <div style={styles.right}>
          <button style={styles.authBtn} onClick={() => setIsAuthOpen(true)}>Login / Sign Up</button>
          <Link href="/ai-editor" style={{ textDecoration: 'none' }}>
            <button style={styles.editorBtn}>✨ AI Editor</button>
          </Link>
          <a href="https://buymeacoffee.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={styles.coffeeBtn}>☕ Support</button>
          </a>
          <CivilRating />
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
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
    gap: '15px',
  },
  authBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '8px 15px',
    borderRadius: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'var(--transition)',
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
  },
  editorBtn: {
    background: 'rgba(168, 85, 247, 0.1)',
    color: 'var(--accent-primary)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    padding: '8px 15px',
    borderRadius: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'var(--transition)',
  }
};
