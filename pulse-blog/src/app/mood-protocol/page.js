'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MoodQuiz from '@/components/MoodQuiz';
import MoodGame from '@/components/MoodGame';
import { fetchWithAuth } from '@/lib/apiClient';

export default function MoodProtocolPage() {
  const [gameState, setGameState] = useState(null);
  const [loadingGame, setLoadingGame] = useState(false);

  const handleQuizComplete = async (answers) => {
    setLoadingGame(true);
    try {
      const res = await fetchWithAuth('/api/mood/generate-game', {
        method: 'POST',
        body: JSON.stringify({ answers })
      });
      const data = await res.json();

      setGameState(data.game);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingGame(false);
    }
  };

  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.title}>Mood <span style={styles.accent}>Protocol</span></h1>
          <p style={styles.subtitle}>Calibrating a real-time physical intervention based on your current state.</p>
        </div>

        {loadingGame ? (
          <div style={styles.generating} className="fade-in">
            <div style={styles.spinner}></div>
            <p>Synthesizing your game protocol...</p>
          </div>
        ) : !gameState ? (
          <MoodQuiz onComplete={handleQuizComplete} />
        ) : (
          <MoodGame game={gameState} />
        )}
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: '150px',
    paddingBottom: '100px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '150px 20px 100px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '600px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: '800',
  },
  accent: {
    color: 'var(--accent-primary)',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  generating: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '20px',
    color: 'var(--accent-primary)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(255,255,255,0.1)',
    borderTop: '3px solid var(--accent-primary)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};
