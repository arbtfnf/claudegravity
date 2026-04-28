'use client';
import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} className="fade-in">
      <div style={styles.modal} className="glass">
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        
        <div style={styles.header}>
          <h2 style={styles.title}>{isLogin ? "Welcome Back" : "Join Pulse"}</h2>
          <p style={styles.subtitle}>
            {isLogin 
              ? "Log in to sync your progress across the Matrix and Psyche Eval." 
              : "Create a free, non-mandatory account to track your impact."}
          </p>
        </div>

        <form style={styles.form} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <input type="text" style={styles.input} placeholder="Jane Doe" required />
            </div>
          )}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} placeholder="jane@example.com" required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" style={styles.input} placeholder="••••••••" required />
          </div>

          <button type="submit" style={styles.submitBtn}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div style={styles.footer}>
          <span style={styles.footerText}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button style={styles.switchBtn} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
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
    borderRadius: '24px',
    maxWidth: '450px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    border: '1px solid var(--accent-secondary)',
    background: 'rgba(5, 5, 5, 0.95)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: 'var(--accent-primary)',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  input: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '12px 15px',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  submitBtn: {
    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
    color: 'white',
    border: 'none',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '14px',
    marginTop: '10px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  footerText: {
    color: 'var(--text-secondary)',
  },
  switchBtn: {
    background: 'transparent',
    border: 'none',
    color: 'var(--accent-secondary)',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};
