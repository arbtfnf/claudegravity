import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "Pulse Initiatives | Action-Oriented Change",
  description: "Browse our active initiatives in medical, fitness, and social categories.",
};

import { getPosts } from '@/lib/data';

async function getInitiatives() {
  const posts = await getPosts();
  return posts.filter(p => p.category !== 'Tech');
}

export default async function InitiativesPage() {
  const initiatives = await getInitiatives();

  // Group initiatives by category
  const groupedInitiatives = initiatives.reduce((acc, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Active <span style={styles.accent}>Initiatives</span></h1>
          <p style={styles.subtitle}>Our community projects aimed at solving systemic challenges through technology and collective action.</p>
        </header>
        
        {Object.keys(groupedInitiatives).map(category => (
          <section key={category} style={styles.section} className="fade-in">
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>{category}</h2>
              <div style={styles.line}></div>
            </div>
            
            <div style={styles.grid}>
              {groupedInitiatives[category].map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </section>
        ))}
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
  section: {
    marginBottom: '80px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    whiteSpace: 'nowrap',
    fontWeight: '800',
    color: 'var(--accent-primary)',
  },
  line: {
    height: '1px',
    background: 'var(--glass-border)',
    flexGrow: 1,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
  }
};
