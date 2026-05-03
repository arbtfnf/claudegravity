"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AshokaChakra, OmSymbol } from './SanataniElements';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/origins', label: 'Origins' },
    { href: '/rituals', label: 'Rituals' },
    { href: '/stories', label: 'Stories' },
    { href: '/map', label: 'Sacred Map' },
    { href: '/experience', label: '✦ Trip' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      padding: scrolled ? '12px 24px' : '20px 24px',
      background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 153, 51, 0.1)' : 'none',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AshokaChakra size={36} fast className="" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff9933' }} />
            </div>
          </div>
          <span className="cinzel" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>
            get<span style={{ color: '#ff9933' }}>Bhangged</span>
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 500,
                transition: 'all 0.3s',
                position: 'relative',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9933'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/stories"
            className="glass"
            style={{
              padding: '8px 24px',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#ff9933',
              borderRadius: '999px',
              border: '1px solid rgba(255, 153, 51, 0.3)',
              fontWeight: 600,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#ff9933'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ff9933'; }}
          >
            ॐ Share Story
          </Link>
        </div>
      </div>
    </nav>
  );
}
