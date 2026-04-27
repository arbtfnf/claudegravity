'use client';
import { useState } from 'react';

export default function AIEditor() {
  const [draft, setDraft] = useState('');
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleTransform = () => {
    setIsProcessing(true);
    // Simulate AI Transformation
    setTimeout(() => {
      setResult({
        content: `
# ${draft.split('\n')[0] || 'Enhanced Pulse Post'}

*Contributed by: Anonymous Innovator*

## The Vision
${draft}

## AI Insights & Research
Based on your input about "${answers.q1}", our models suggest that implementing a decentralized verification layer could increase trust by 40%. 

## Suggested Action Modules
- **Challenge**: Audit your current workflow for gaps in ${answers.q2}.
- **Initiative**: Join the ${answers.q3} community hub.
        `,
        rating: {
          contentDepth: 7,
          factCheck: 6,
          researchIntegrity: 8,
          actionPotential: 9,
          readability: 8,
          trustScore: 7,
        }
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div style={styles.container} className="glass glow">
      {!result ? (
        <>
          <h2 style={styles.title}>AI Content Engine</h2>
          <p style={styles.subtitle}>Collaborate with Pulse AI to transform your raw thoughts into high-fidelity, researched blog posts.</p>
          
          <div style={styles.field}>
            <label style={styles.label}>Raw Draft</label>
            <textarea 
              style={styles.textarea} 
              placeholder="Paste your raw thoughts or essay here..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Prompt 1: What is the primary problem you're solving?</label>
            <input 
              style={styles.input} 
              placeholder="e.g. Healthcare inequality in rural India"
              value={answers.q1}
              onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Prompt 2: What is the single most important action for a reader?</label>
            <input 
              style={styles.input} 
              placeholder="e.g. Audit their insurance policy"
              value={answers.q2}
              onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
            />
          </div>

          <button 
            style={styles.button} 
            onClick={handleTransform}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing with AI...' : 'Transform Draft & Add Research'}
          </button>
        </>
      ) : (
        <div className="fade-in">
          <h2 style={styles.title}>Pulse Transformation Complete</h2>
          <div style={styles.preview} className="glass">
            <div style={styles.ratingBox}>
              <h4 style={styles.ratingTitle}>Projected Pulse Rating</h4>
              <p style={styles.ratingSub}>Adding 2 more academic references will push this to Platinum Tier.</p>
              {/* PulseRating component would go here in a real impl */}
              <div style={styles.mockRating}>Platinum Tier Projected (Score: 45/60)</div>
            </div>
            <pre style={styles.pre}>{result.content}</pre>
          </div>
          <div style={styles.actions}>
            <button style={styles.button} onClick={() => setResult(null)}>Edit Again</button>
            <button style={styles.secBtn}>Publish to Pulse</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
  },
  field: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    color: 'var(--accent-secondary)',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '15px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--glass-border)',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--glass-border)',
    color: 'white',
    outline: 'none',
  },
  button: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
  },
  preview: {
    padding: '30px',
    marginTop: '20px',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  pre: {
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  ratingBox: {
    padding: '20px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '12px',
    border: '1px solid var(--accent-primary)',
    marginBottom: '30px',
  },
  ratingTitle: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'var(--accent-primary)',
    marginBottom: '5px',
  },
  ratingSub: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '15px',
  },
  mockRating: {
    fontSize: '18px',
    fontWeight: '800',
    color: 'white',
    letterSpacing: '1px',
  },
  actions: {
    display: 'flex',
    gap: '20px',
    marginTop: '30px',
  },
  secBtn: {
    background: 'white',
    color: 'black',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    flexGrow: 1,
  }
};
