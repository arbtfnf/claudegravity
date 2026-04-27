'use client';
import { useEffect, useState } from 'react';

export default function PulseLine({ color = 'var(--accent-primary)' }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.line, boxShadow: `0 0 15px ${color}` }}>
        <div 
          style={{
            ...styles.progress, 
            transform: `scaleY(${scrollProgress})`,
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`
          }} 
        />
        <div style={{ ...styles.dot, top: `${scrollProgress * 100}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    right: '40px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '60vh',
    width: '2px',
    zIndex: 100,
  },
  line: {
    height: '100%',
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    position: 'relative',
  },
  progress: {
    width: '100%',
    height: '100%',
    transformOrigin: 'top',
    transition: 'transform 0.1s ease-out',
  },
  dot: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(255,255,255,0.5)',
    transition: 'top 0.1s ease-out',
  }
};
