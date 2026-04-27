import Navbar from '@/components/Navbar';
import AIEditor from '@/components/AIEditor';

export const metadata = {
  title: "Pulse AI Editor | Collaborative Content",
  description: "Transform your raw thoughts into high-fidelity, action-oriented blog posts with AI.",
};

export default function AIEditorPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Collaborative <span style={styles.accent}>Content</span> Engine</h1>
          <p style={styles.subtitle}>Our mission is to solve high drop-off rates by transforming passive essays into active initiatives.</p>
        </header>
        <AIEditor />
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: '150px',
    paddingBottom: '100px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '0 20px',
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
