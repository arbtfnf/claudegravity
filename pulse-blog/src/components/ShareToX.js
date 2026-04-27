'use client';
import { useEffect, useState } from 'react';

export default function ShareToX({ text, url }) {
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    if (!url) {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <div style={styles.container}>
      <a href={shareUrl} target="_blank" rel="noreferrer" style={styles.button} className="glass glow">
        <span style={styles.icon}>𝕏</span> Share Initiative on X
      </a>
    </div>
  );
}

const styles = {
  container: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 25px',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'var(--transition)',
  },
  icon: {
    fontSize: '18px',
  }
};
