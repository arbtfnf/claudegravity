'use client';
import { useState } from 'react';

export default function MoodGame({ game }) {
  const [tasks, setTasks] = useState(game.tasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (
    <div style={styles.container} className="fade-in">
      <header style={styles.header}>
        <h1 style={styles.title}>{game.title}</h1>
        <p style={styles.theme}>Theme: {game.theme}</p>
      </header>

      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
      </div>

      <div style={styles.taskList}>
        {tasks.map(task => (
          <div 
            key={task.id} 
            style={{...styles.taskCard, opacity: task.completed ? 0.5 : 1}}
            className="glass-panel"
            onClick={() => toggleTask(task.id)}
          >
            <div style={{...styles.checkbox, background: task.completed ? 'var(--accent-primary)' : 'transparent'}}>
              {task.completed && <span style={{color: 'black'}}>✓</span>}
            </div>
            <span style={{textDecoration: task.completed ? 'line-through' : 'none', flex: 1}}>
              {task.description}
            </span>
            <span style={styles.typeBadge}>{task.type}</span>
          </div>
        ))}
      </div>
      
      {progress === 100 && (
        <div style={styles.success} className="fade-in">
          <h2>Protocol Complete! 🎉</h2>
          <p>Your dopamine levels should be elevated. Return to this protocol whenever you need a boost.</p>
          <button style={styles.resetBtn} onClick={() => window.location.reload()}>Start New Protocol</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '36px',
    color: 'var(--accent-primary)',
    marginBottom: '10px',
    fontWeight: '800',
  },
  theme: {
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '14px',
  },
  progressBar: {
    height: '10px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '5px',
    marginBottom: '40px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'var(--accent-primary)',
    transition: 'width 0.5s ease',
  },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  taskCard: {
    padding: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'all 0.3s',
  },
  checkbox: {
    width: '30px',
    height: '30px',
    border: '2px solid var(--accent-primary)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background 0.3s',
  },
  typeBadge: {
    fontSize: '12px',
    textTransform: 'uppercase',
    padding: '4px 10px',
    border: '1px solid var(--glass-border)',
    borderRadius: '12px',
    color: 'var(--text-secondary)',
  },
  success: {
    marginTop: '60px',
    textAlign: 'center',
    padding: '40px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    border: '1px solid var(--accent-primary)',
  },
  resetBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};
