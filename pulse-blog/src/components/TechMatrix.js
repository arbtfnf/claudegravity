'use client';
import { useState, useEffect } from 'react';
import { fetchWithAuth } from '@/lib/apiClient';

export default function TechMatrix() {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0); 
  const [day, setDay] = useState(1);
  const [streak, setStreak] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from local storage
    const savedProgress = localStorage.getItem('techProgress');
    const savedDay = localStorage.getItem('techDay');
    const savedStreak = localStorage.getItem('techStreak');

    if (savedProgress) setProgress(parseInt(savedProgress));
    if (savedDay) setDay(parseInt(savedDay));
    if (savedStreak) setStreak(parseInt(savedStreak));

    fetch('/api/tech-challenge')
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, []);

  const saveProgress = (p, d, s) => {
    localStorage.setItem('techProgress', p);
    localStorage.setItem('techDay', d);
    localStorage.setItem('techStreak', s);
  };

  const handleSolve = () => {
    const newProgress = progress + 1;
    let newDay = day;
    let newStreak = streak;

    // Check if day is complete (every 10 questions unlocks a new day layer)
    if (newProgress % 10 === 0) {
      newDay += 1;
      newStreak += 1; 
    }

    setProgress(newProgress);
    setDay(newDay);
    setStreak(newStreak);
    saveProgress(newProgress, newDay, newStreak);
    setActiveQuestion(null);
  };

  const matrixSize = day * 10;
  
  return (
    <div style={styles.container}>
      <div style={styles.statsPanel} className="glass">
        <div style={styles.statBox}>
          <h3>🔥 Streak</h3>
          <p style={styles.statValue}>{streak} Days</p>
        </div>
        <div style={styles.statBox}>
          <h3>📅 Layout</h3>
          <p style={styles.statValue}>Day {day} Matrix</p>
        </div>
        <div style={styles.statBox}>
          <h3>✅ Solved</h3>
          <p style={styles.statValue}>{progress} / {matrixSize}</p>
        </div>
      </div>

      <div style={styles.matrix}>
        {Array.from({ length: matrixSize }).map((_, index) => {
          const isSolved = index < progress;
          const isUnlocked = index === progress;
          
          let boxClass = "matrix-box ";
          if (isSolved) boxClass += "solved";
          else if (isUnlocked) boxClass += "unlocked pulse-anim";
          else boxClass += "locked";

          const q = questions[index % 10]; // loop through questions for demo

          return (
            <div 
              key={index} 
              className={boxClass}
              onClick={() => isUnlocked && setActiveQuestion(q)}
            >
              {isSolved ? "✓" : isUnlocked ? (q?.type || "?") : "🔒"}
            </div>
          );
        })}
      </div>

      {activeQuestion && (
        <div style={styles.modalOverlay} className="fade-in">
          <div style={styles.modal} className="glass">
            <span style={styles.badge}>{activeQuestion.type}</span>
            <h2 style={styles.modalTitle}>{activeQuestion.title}</h2>
            <p style={styles.modalDesc}>{activeQuestion.desc}</p>
            <div style={styles.actions}>
              <button style={styles.solveBtn} onClick={handleSolve}>Mark as Solved</button>
              <button style={styles.cancelBtn} onClick={() => setActiveQuestion(null)}>Later</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
  },
  statsPanel: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    borderRadius: '16px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '800',
    color: 'var(--accent-primary)',
  },
  matrix: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: '15px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modal: {
    padding: '40px',
    borderRadius: '20px',
    maxWidth: '500px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    border: '1px solid var(--accent-secondary)',
  },
  badge: {
    alignSelf: 'flex-start',
    background: 'var(--accent-secondary)',
    color: 'black',
    padding: '5px 12px',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  modalTitle: {
    fontSize: '24px',
  },
  modalDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  actions: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  },
  solveBtn: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    flex: 1,
  },
  cancelBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid var(--glass-border)',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};
