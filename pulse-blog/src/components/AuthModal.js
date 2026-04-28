'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [prank, setPrank] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
      });
      if (error) alert(`Login Error: ${error.message}`);
    } catch (err) {
      alert(`Unexpected Error: ${err.message}`);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: window.location.origin }
      });
      if (error) alert(`Login Error: ${error.message}`);
    } catch (err) {
      alert(`Unexpected Error: ${err.message}`);
    }
  };



  const handleGuestLogin = () => {
    alert("Welcome! You are now browsing as a Guest. Note: Your progress will not be synced.");
    onClose();
  };

  const handleEmailAuth = async (e) => {

    e.preventDefault();
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        alert("Logged in successfully!");
      } else {
        const { error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: { data: { full_name: name } }
        });
        if (error) throw error;
        alert("Sign up successful! Check your email for verification.");
      }
      onClose();
    } catch (err) {
      alert(`Auth Error: ${err.message}`);
    }
  };



  if (!isOpen) {
    if (prank) setPrank(false); // Reset prank if modal closed
    return null;
  }

  if (prank) {
    return (
      <div style={{...styles.overlay, zIndex: 10000}}>
        <div style={styles.prankModal} className="prank-anim">
          <h1 style={{ fontSize: '48px', color: '#ff0050', marginBottom: '20px', textShadow: '0 0 10px rgba(255,0,80,0.8)' }}>
            🚨 CAUGHT YOU! 🚨
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.5', color: 'white' }}>
            Pulse is about <strong>action</strong> and <strong>focus</strong>. <br /><br />
            We do not support algorithmic doom-scrolling!<br />
            Return to the real world!
          </p>
          <button 
            style={{ ...styles.submitBtn, background: 'black', color: '#00f2fe', border: '2px solid #00f2fe', marginTop: '40px' }} 
            onClick={() => setPrank(false)}
          >
            I'm sorry. Take me back.
          </button>
        </div>
      </div>
    );
  }

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

        <div style={styles.socialAuth}>
          <button style={styles.guestBtn} onClick={handleGuestLogin}>
            <span style={{marginRight: '10px'}}>👤</span> Continue as Guest (No Setup Required)
          </button>
          <div style={styles.divider}>
            <div style={styles.line}></div>
            <span style={styles.dividerText}>or use social</span>
            <div style={styles.line}></div>
          </div>
          <button style={styles.googleBtn} onClick={handleGoogleLogin}>
            <span style={{marginRight: '10px'}}>🌐</span> Continue with Google
          </button>
          <button style={styles.githubBtn} onClick={handleGitHubLogin}>
            <span style={{marginRight: '10px'}}>🐙</span> Continue with GitHub
          </button>
          <button style={styles.tiktokBtn} onClick={() => setPrank(true)}>
            <span style={{marginRight: '10px'}}>🎵</span> Continue with TikTok
          </button>
        </div>




        <div style={styles.divider}>
          <div style={styles.line}></div>
          <span style={styles.dividerText}>or</span>
          <div style={styles.line}></div>
        </div>

        <form style={styles.form} onSubmit={handleEmailAuth}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <input 
                type="text" 
                style={styles.input} 
                placeholder="Jane Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              style={styles.input} 
              placeholder="jane@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              style={styles.input} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
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
    gap: '20px',
    border: '1px solid var(--accent-secondary)',
    background: 'rgba(5, 5, 5, 0.95)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  prankModal: {
    padding: '60px',
    borderRadius: '24px',
    maxWidth: '600px',
    textAlign: 'center',
    border: '4px solid #ff0050',
    background: '#111',
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
  socialAuth: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '5px',
  },
  googleBtn: {
    background: 'white',
    color: 'black',
    border: 'none',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestBtn: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '15px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
    transition: 'transform 0.2s',
  },


  tiktokBtn: {
    background: 'linear-gradient(90deg, #ff0050 0%, #00f2fe 100%)',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  githubBtn: {
    background: '#24292e',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    margin: '5px 0',
  },
  line: {
    flex: 1,
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
  },
  dividerText: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
    textTransform: 'uppercase',
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
    marginTop: '5px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '14px',
    paddingTop: '15px',
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
