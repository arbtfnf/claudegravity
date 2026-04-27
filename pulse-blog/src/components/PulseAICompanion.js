'use client';
import { useState } from 'react';

export default function PulseAICompanion({ topic }) {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: `I am Pulse AI. You just finished reading about "${topic}". Do you need any concepts explained or want to contribute an idea?` }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { role: 'user', text: query };
    setChatHistory([...chatHistory, userMessage]);
    setQuery("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "That's a great point. Based on this article, we are focusing on systemic transparency first. Would you like to join the technical working group for this?";
      if (query.toLowerCase().includes("explain") || query.toLowerCase().includes("what")) {
        aiResponse = `Let me break that down. In the context of "${topic}", this means removing the middleman logic to ensure data remains strictly between the patient and the required provider.`;
      }
      
      setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={styles.container} className="glass glow">
      <div style={styles.header}>
        <div style={styles.titleWrapper}>
          <span style={styles.icon}>🤖</span>
          <h3 style={styles.title}>Pulse Interactive Companion</h3>
        </div>
        <a href={`https://www.youtube.com/results?search_query=Pulse+Initiatives+${encodeURIComponent(topic)}`} target="_blank" rel="noreferrer" style={styles.ytButton}>
          ▶️ Watch Explainer on YouTube
        </a>
      </div>

      <div style={styles.chatBox}>
        {chatHistory.map((msg, idx) => (
          <div key={idx} style={{...styles.message, alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', background: msg.role === 'user' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)'}}>
            <span style={styles.msgText}>{msg.text}</span>
          </div>
        ))}
        {isTyping && (
          <div style={{...styles.message, alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)'}}>
            <span style={styles.typing}>Pulse AI is thinking...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleAsk} style={styles.form}>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Ask a question about ${topic}...`}
          style={styles.input}
        />
        <button type="submit" style={styles.askBtn}>Ask Pulse</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '80px',
    padding: '30px',
    borderRadius: '24px',
    border: '1px solid var(--accent-secondary)',
    background: 'rgba(6, 182, 212, 0.05)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '24px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--accent-secondary)',
  },
  ytButton: {
    background: '#FF0000',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  chatBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
  },
  message: {
    padding: '15px 20px',
    borderRadius: '20px',
    maxWidth: '80%',
    lineHeight: '1.5',
  },
  msgText: {
    fontSize: '15px',
    color: 'white',
  },
  typing: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
  },
  form: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flexGrow: 1,
    padding: '15px 20px',
    borderRadius: '30px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
  },
  askBtn: {
    background: 'var(--accent-secondary)',
    color: 'black',
    border: 'none',
    padding: '0 25px',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'var(--transition)',
  }
};
