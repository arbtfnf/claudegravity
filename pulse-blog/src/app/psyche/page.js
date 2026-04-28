import Navbar from '@/components/Navbar';
import PsycheAssessment from '@/components/PsycheAssessment';

export const metadata = {
  title: "Pulse Psyche | Cognitive Assessment",
  description: "A projective psychological assessment tool for emotional evaluation.",
};

export default function PsychePage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Psyche <span style={styles.accent}>Eval</span></h1>
          <p style={styles.subtitle}>Analyze your cognitive state through projective visual stimuli and open-ended therapeutic journaling.</p>
        </header>
        
        <div className="reveal">
          <PsycheAssessment />
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
    marginBottom: '60px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 56px)',
    marginBottom: '20px',
  },
  accent: {
    color: 'var(--accent-primary)',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  }
};
