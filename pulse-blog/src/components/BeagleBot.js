'use client';
import { useState, useEffect } from 'react';

export default function BeagleBot({ message = "Woof! We need your help to fix this. Join the initiative below!" }) {
  const [isBouncing, setIsBouncing] = useState(true);

  // Simple animation toggle to make it look alive
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.speechBubble} className="glass glow">
        {message}
        <div style={styles.bubbleTail}></div>
      </div>
      
      <div style={{...styles.dog, transform: isBouncing ? 'translateY(-10px)' : 'translateY(0)'}}>
        <div style={styles.head}>
          <div style={styles.ears}>
            <div style={{...styles.ear, ...styles.leftEar}}></div>
            <div style={{...styles.ear, ...styles.rightEar}}></div>
          </div>
          <div style={styles.face}>
            <div style={styles.eyes}>
              <div style={styles.eye}></div>
              <div style={styles.eye}></div>
            </div>
            <div style={styles.snout}>
              <div style={styles.nose}></div>
            </div>
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.tail}></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0 20px 0',
  },
  speechBubble: {
    padding: '15px 25px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid var(--accent-primary)',
    marginBottom: '20px',
    position: 'relative',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    maxWidth: '250px',
  },
  bubbleTail: {
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderTop: '10px solid var(--accent-primary)',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  },
  dog: {
    position: 'relative',
    width: '60px',
    height: '70px',
    transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  head: {
    width: '40px',
    height: '40px',
    backgroundColor: '#D2B48C', // Tan/Beagle color
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: '10px',
    zIndex: 2,
  },
  ears: {
    width: '100%',
    position: 'absolute',
    top: '5px',
  },
  ear: {
    width: '15px',
    height: '30px',
    backgroundColor: '#8B4513', // Brown
    borderRadius: '10px 10px 20px 20px',
    position: 'absolute',
  },
  leftEar: { left: '-5px', transform: 'rotate(20deg)' },
  rightEar: { right: '-5px', transform: 'rotate(-20deg)' },
  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  eyes: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 8px',
    marginTop: '12px',
  },
  eye: {
    width: '6px',
    height: '6px',
    backgroundColor: 'black',
    borderRadius: '50%',
  },
  snout: {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '20px',
    height: '15px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  nose: {
    width: '8px',
    height: '6px',
    backgroundColor: 'black',
    borderRadius: '50%',
    margin: '2px auto 0',
  },
  body: {
    width: '30px',
    height: '35px',
    backgroundColor: '#D2B48C',
    borderRadius: '15px',
    position: 'absolute',
    bottom: 0,
    left: '15px',
    zIndex: 1,
  },
  tail: {
    width: '8px',
    height: '25px',
    backgroundColor: 'white',
    borderTop: '5px solid #8B4513',
    borderRadius: '10px',
    position: 'absolute',
    right: '-5px',
    bottom: '10px',
    transform: 'rotate(45deg)',
    transformOrigin: 'bottom center',
    animation: 'wag 0.5s infinite alternate',
  }
};
