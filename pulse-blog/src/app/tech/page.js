import Navbar from '@/components/Navbar';
import TechMatrix from '@/components/TechMatrix';

export const metadata = {
  title: "Pulse Tech | Daily Matrix Challenge",
  description: "A gamified hub for HLD, LLD, OOPS, and DSA software engineering challenges.",
};

export default function TechPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Tech <span style={styles.accent}>Matrix</span></h1>
          <p style={styles.subtitle}>Unlock engineering concepts sequentially. Build your streak, expand your matrix.</p>
        </header>
        
        <div className="reveal">
          <TechMatrix />
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: '150px',
    paddingBottom: '100px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '150px 20px 100px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 56px)',
    marginBottom: '20px',
  },
  accent: {
    color: 'var(--accent-secondary)',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  }
};
