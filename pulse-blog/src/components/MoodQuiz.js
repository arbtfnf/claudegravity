'use client';
import { useState, useEffect } from 'react';

export default function MoodQuiz({ onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentInput, setCurrentInput] = useState('');

  useEffect(() => {
    fetch('/api/mood/generate-quiz')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    if (!currentInput.trim()) return;
    
    const newAnswers = [...answers, { q: questions[currentIndex], a: currentInput }];
    setAnswers(newAnswers);
    setCurrentInput('');
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  if (loading) return <div style={styles.loader}>Loading dynamic assessment...</div>;

  return (
    <div style={styles.card} className="glass-panel fade-in">
      <div style={styles.progress}>
        Question {currentIndex + 1} of {questions.length}
      </div>
      <h2 style={styles.question}>{questions[currentIndex]}</h2>
      
      <input 
        type="text" 
        style={styles.input}
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        placeholder="Type your answer..."
        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
        autoFocus
      />
      
      <button 
        style={{...styles.button, opacity: currentInput.trim() ? 1 : 0.5}} 
        onClick={handleNext}
        disabled={!currentInput.trim()}
      >
        {currentIndex === questions.length - 1 ? "Generate Protocol" : "Next →"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '100%',
  },
  progress: {
    color: 'var(--accent-primary)',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  question: {
    fontSize: '28px',
    fontWeight: '300',
    lineHeight: '1.4',
  },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '20px',
    padding: '10px 0',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    background: 'white',
    color: 'black',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    borderRadius: '30px',
    transition: 'opacity 0.3s',
  },
  loader: {
    textAlign: 'center',
    fontSize: '20px',
    color: 'var(--text-secondary)',
    padding: '50px',
  }
};
