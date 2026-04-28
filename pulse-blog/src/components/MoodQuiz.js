'use client';
import { useState, useEffect } from 'react';

export default function MoodQuiz({ onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // currentInput is an array to support multi-select easily
  const [currentInput, setCurrentInput] = useState([]);

  useEffect(() => {
    fetch('/api/mood/generate-quiz')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setLoading(false);
      });
  }, []);

  const currentQ = questions[currentIndex];

  const toggleOption = (opt) => {
    if (currentQ.type === 'multi') {
      setCurrentInput(prev => 
        prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
      );
    } else {
      // Single select instantly replaces the array
      setCurrentInput([opt]);
    }
  };

  const handleNext = () => {
    if (currentInput.length === 0) return;
    
    const newAnswers = [...answers, { q: currentQ.q, a: currentInput }];
    setAnswers(newAnswers);
    setCurrentInput([]); // Reset for next question
    
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
      
      <div style={styles.questionHeader}>
        <h2 style={styles.question}>{currentQ.q}</h2>
        {currentQ.type === 'multi' && (
          <span style={styles.hint}>Select all that apply</span>
        )}
      </div>
      
      <div style={styles.optionsGrid}>
        {currentQ.options.map(opt => {
          const isSelected = currentInput.includes(opt);
          return (
            <button 
              key={opt}
              style={{
                ...styles.optionBtn, 
                borderColor: isSelected ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                background: isSelected ? 'rgba(168, 85, 247, 0.1)' : 'rgba(0,0,0,0.5)'
              }}
              onClick={() => toggleOption(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      
      <button 
        style={{...styles.nextBtn, opacity: currentInput.length > 0 ? 1 : 0.5}} 
        onClick={handleNext}
        disabled={currentInput.length === 0}
      >
        {currentIndex === questions.length - 1 ? "Generate Protocol" : "Next →"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: '40px',
    maxWidth: '650px',
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
    fontWeight: 'bold',
  },
  questionHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  question: {
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  hint: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  optionBtn: {
    color: 'white',
    padding: '16px 20px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '2px solid',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500',
  },
  nextBtn: {
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
    marginTop: '10px',
  },
  loader: {
    textAlign: 'center',
    fontSize: '20px',
    color: 'var(--text-secondary)',
    padding: '50px',
  }
};
