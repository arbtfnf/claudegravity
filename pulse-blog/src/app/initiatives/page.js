import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "Pulse Initiatives | Action-Oriented Change",
  description: "Browse our active initiatives in social, progressive, and responsible categories.",
};

const INITIATIVES = [
  {
    id: 1,
    title: "The Heartbeat of Equity: Fixing the Healthcare Divide",
    slug: "/posts/healthcare-revolution",
    date: "April 28, 2026",
    category: "Responsible",
    tags: ["Social", "Healthcare"],
    excerpt: "Exploring the gap between India and US systems and our initiative to fix the geographic lottery."
  },
  {
    id: 3,
    title: "Digital Privacy in the Age of Health Insurance",
    slug: "/posts/healthcare-revolution",
    date: "April 26, 2026",
    category: "Progressive",
    tags: ["Responsible", "Data"],
    excerpt: "How we can build trust-less verification systems to prevent insurance fraud."
  }
];

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Active <span style={styles.accent}>Initiatives</span></h1>
          <p style={styles.subtitle}>Our community projects aimed at solving systemic challenges through technology and collective action.</p>
        </header>
        
        <div style={styles.grid}>
          {INITIATIVES.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
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
    color: 'var(--accent-social)',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
  }
};
