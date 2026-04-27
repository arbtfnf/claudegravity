export default function InitiativeHub() {
  return (
    <section style={styles.container} className="glass">
      <div style={styles.content}>
        <h2 style={styles.title}>Join the Pulse Initiative</h2>
        <p style={styles.subtitle}>
          Don't just read about the future—build it with us. Join our community of innovators and action-takers.
        </p>
        <div style={styles.form}>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <button style={styles.button}>Join Now</button>
        </div>
        <p style={styles.count}>Join 2,450+ active members</p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    margin: '80px 0',
    padding: '60px 40px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
    border: '1px solid var(--glass-border)',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    padding: '15px 25px',
    borderRadius: '30px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255,255,255,0.05)',
    color: 'white',
    flexGrow: 1,
    minWidth: '250px',
    outline: 'none',
  },
  button: {
    padding: '15px 40px',
    borderRadius: '30px',
    border: 'none',
    background: 'white',
    color: 'black',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  count: {
    fontSize: '14px',
    color: 'var(--accent-secondary)',
    fontWeight: '600',
  }
};
