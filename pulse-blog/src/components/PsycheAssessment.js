'use client';
import { useState, useEffect } from 'react';

export default function PsycheAssessment() {
  const [prompts, setPrompts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    fetch('/api/psyche')
      .then(res => res.json())
      .then(data => {
        setPrompts(data.prompts);
        setLoading(false);
      });
  }, []);

  const handleNext = async () => {
    if (!currentText.trim()) return;

    const currentPrompt = prompts[currentIndex];
    const newResponses = [...responses, { promptId: currentPrompt.id, text: currentText }];
    setResponses(newResponses);
    setCurrentText('');

    if (currentIndex < prompts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Finished all prompts, send for analysis
      setAnalyzing(true);
      try {
        const res = await fetch('/api/psyche', {
          method: 'POST',
          body: JSON.stringify({ responses: newResponses })
        });
        const data = await res.json();
        setAnalysisResult(data.analysis);
      } catch (err) {
        console.error(err);
      } finally {
        setAnalyzing(false);
      }
    }
  };

  if (loading) return <div style={styles.loader}>Preparing visual stimuli...</div>;

  if (analyzing) {
    return (
      <div style={styles.analyzingCard} className="glass-panel fade-in">
        <div style={styles.spinner}></div>
        <h2>Analyzing Psychological Markers...</h2>
        <p>Our AI is reviewing your cognitive patterns and sentiment.</p>
      </div>
    );
  }

  if (analysisResult) {
    return (
      <div style={styles.resultCard} className="glass-panel fade-in">
        <h2 style={styles.resultTitle}>Psychological Evaluation</h2>
        
        <div style={styles.resultSection}>
          <h3 style={styles.resultLabel}>Dominant State</h3>
          <p style={styles.resultValue}>{analysisResult.dominantEmotion}</p>
        </div>

        <div style={styles.resultSection}>
          <h3 style={styles.resultLabel}>Detected Cognitive Patterns</h3>
          <ul style={styles.list}>
            {analysisResult.cognitivePatterns.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div style={styles.resultSection}>
          <h3 style={styles.resultLabel}>AI Recommendation</h3>
          <p style={styles.recommendation}>{analysisResult.recommendation}</p>
        </div>

        <button style={styles.button} onClick={() => window.location.reload()}>Complete Session</button>
      </div>
    );
  }

  const currentPrompt = prompts[currentIndex];

  return (
    <div style={styles.card} className="glass-panel fade-in">
      <div style={styles.progress}>
        Stimulus {currentIndex + 1} of {prompts.length}
      </div>

      <div style={styles.imageContainer}>
        <img src={currentPrompt.imageUrl} alt="Visual Stimulus" style={styles.image} />
      </div>
      
      <h3 style={styles.question}>{currentPrompt.question}</h3>
      
      <textarea 
        style={styles.textarea}
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
        placeholder="Pour your thoughts here..."
        rows={6}
      />
      
      <button 
        style={{...styles.button, opacity: currentText.trim() ? 1 : 0.5}} 
        onClick={handleNext}
        disabled={!currentText.trim()}
      >
        {currentIndex === prompts.length - 1 ? "Submit for Analysis" : "Next Stimulus"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%',
  },
  progress: {
    color: 'var(--accent-primary)',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--glass-border)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 5s ease',
  },
  question: {
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '1.4',
  },
  textarea: {
    background: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '18px',
    padding: '20px',
    outline: 'none',
    borderRadius: '12px',
    resize: 'vertical',
    fontFamily: 'inherit',
    lineHeight: '1.6',
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
  },
  analyzingCard: {
    padding: '60px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid rgba(255,255,255,0.1)',
    borderTop: '4px solid var(--accent-primary)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  resultCard: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  resultTitle: {
    fontSize: '32px',
    color: 'var(--accent-primary)',
    borderBottom: '1px solid var(--glass-border)',
    paddingBottom: '20px',
  },
  resultSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  resultLabel: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    letterSpacing: '2px',
  },
  resultValue: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.8',
    fontSize: '18px',
  },
  recommendation: {
    fontSize: '18px',
    lineHeight: '1.6',
    padding: '20px',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(168, 85, 247, 0.3)',
  }
};
