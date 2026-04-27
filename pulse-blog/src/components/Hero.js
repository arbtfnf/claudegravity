import Link from 'next/link';

export default function Hero() {
  return (
    <section style={styles.hero} className="glow">
      <div className="fade-in">
        <h1 style={styles.title}>The Heartbeat of <br/> <span style={styles.accent}>Future</span> Thoughts</h1>
        <p style={styles.subtitle} className="delay-1 fade-in">Exploring the rhythmic intersection of technology, design, and consciousness.</p>
        <div style={styles.cta} className="delay-2 fade-in">
          <Link href="/posts/healthcare-revolution" style={{ textDecoration: 'none' }}>
            <button style={styles.mainBtn}>Read Healthcare Blog</button>
          </Link>
          <Link href="#feed" style={{ textDecoration: 'none' }}>
            <button style={styles.secBtn}>All Initiatives</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/hero.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: 'clamp(40px, 8vw, 90px)',
    lineHeight: '1.1',
    marginBottom: '20px',
  },
  accent: {
    color: 'var(--accent-primary)',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: '20px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
  },
  cta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  mainBtn: {
    background: 'white',
    color: 'black',
    border: 'none',
    padding: '15px 35px',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  secBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid var(--glass-border)',
    padding: '15px 35px',
    borderRadius: '30px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
  }
};
