'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MoodCheckinPopup() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show the popup if they are already on the protocol page
    if (pathname === '/mood-protocol') {
      // If they visit the protocol, update the timestamp so we know they checked in!
      localStorage.setItem('lastMoodCheckin', new Date().getTime().toString());
      return;
    }
    
    const lastCheckin = localStorage.getItem('lastMoodCheckin');
    const now = new Date().getTime();
    
    // We only prompt if it's been more than 12 hours since last checkin/dismissal
    const twelveHours = 12 * 60 * 60 * 1000;
    
    if (!lastCheckin || (now - parseInt(lastCheckin)) > twelveHours) {
      // Delay the popup so it feels natural and not intrusive immediately on load
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const dismiss = () => {
    localStorage.setItem('lastMoodCheckin', new Date().getTime().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.overlay} className="fade-in">
      <div style={styles.popup} className="glass">
        <button style={styles.closeBtn} onClick={dismiss}>×</button>
        <h3 style={styles.title}>Mood Calibration Due</h3>
        <p style={styles.text}>Based on your recent activity patterns, it's time for a quick mood check-in. Ready for a real-time uplifting protocol?</p>
        <div style={styles.actions}>
          <button style={styles.secondaryBtn} onClick={dismiss}>Skip for now</button>
          <Link href="/mood-protocol" style={{ textDecoration: 'none' }} onClick={dismiss}>
            <button style={styles.primaryBtn}>Start Simulator</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 9999,
  },
  popup: {
    padding: '25px',
    borderRadius: '16px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    border: '1px solid var(--accent-primary)',
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '18px',
    color: 'var(--accent-primary)',
    fontWeight: '700',
    marginRight: '20px',
  },
  text: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '10px',
  },
  primaryBtn: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  secondaryBtn: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--glass-border)',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
  }
};
