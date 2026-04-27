'use client';
import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([
    { id: 1, author: "Priya M.", text: "This hit hard. I had a similar issue with my father's surgery where the referral took 3 weeks. Digital sync is exactly what we need.", rating: "Social", time: "2 hours ago" },
    { id: 2, author: "Dr. Sharma", text: "As a practitioner, the lack of information liquidity is our biggest hurdle. The ZK-proof idea for privacy is brilliant.", rating: "Responsible", time: "5 hours ago" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: "Guest Innovator",
      text: newComment,
      rating: "Unverified",
      time: "Just now"
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div style={styles.container} className="glass glow">
      <h3 style={styles.title}>Community Pulse ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea 
          style={styles.input} 
          placeholder="Add to the conversation..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" style={styles.button}>Post Comment</button>
      </form>

      <div style={styles.list}>
        {comments.map(c => (
          <div key={c.id} style={styles.comment}>
            <div style={styles.header}>
              <span style={styles.author}>{c.author}</span>
              <div style={styles.meta}>
                <span style={{...styles.badge, borderColor: c.rating === 'Unverified' ? 'var(--glass-border)' : 'var(--accent-primary)'}}>
                  {c.rating}
                </span>
                <span style={styles.time}>{c.time}</span>
              </div>
            </div>
            <p style={styles.text}>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '60px',
    padding: '40px',
    borderRadius: '20px',
    border: '1px solid var(--glass-border)',
  },
  title: {
    fontSize: '20px',
    marginBottom: '25px',
    fontFamily: 'Outfit',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '40px',
  },
  input: {
    width: '100%',
    height: '100px',
    padding: '15px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--glass-border)',
    color: 'white',
    fontSize: '15px',
    resize: 'none',
    outline: 'none',
    marginBottom: '10px',
  },
  button: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  comment: {
    padding: '20px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.01)',
    borderLeft: '2px solid var(--glass-border)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  author: {
    fontWeight: '700',
    fontSize: '14px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  badge: {
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '2px 8px',
    borderRadius: '10px',
    border: '1px solid',
    color: 'var(--text-secondary)',
  },
  time: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
  },
  text: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.5',
  }
};
