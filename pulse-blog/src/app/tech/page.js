import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "Pulse Tech | Engineering for Impact",
  description: "Deep-dives into the architecture and challenges of scaling social technology.",
};

async function getTechPosts() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.posts.filter(p => p.category === 'Tech');
}

export default async function TechPage() {
  const techPosts = await getTechPosts();

  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Tech <span style={styles.accent}>Challenges</span></h1>
          <p style={styles.subtitle}>Engineering solutions for information liquidity and decentralized trust in fragmented markets.</p>
        </header>
        
        <div style={styles.grid}>
          {techPosts.map((post) => (
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
    color: 'var(--accent-primary)',
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
