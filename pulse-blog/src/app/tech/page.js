import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "Pulse Tech | Engineering for Impact",
  description: "Deep-dives into the architecture and challenges of scaling social technology.",
};

const TECH_POSTS = [
  {
    id: 2,
    title: "Scaling Referral Protocols for Rural India",
    slug: "/tech/scaling-referral-systems",
    date: "April 27, 2026",
    category: "Tech",
    tags: ["Progressive", "Infrastructure"],
    excerpt: "A deep dive into the decentralized architecture needed to connect 600,000 villages."
  }
];

export default function TechPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header} className="fade-in">
          <h1 style={styles.title}>Tech <span style={styles.accent}>Challenges</span></h1>
          <p style={styles.subtitle}>Engineering solutions for information liquidity and decentralized trust in fragmented markets.</p>
        </header>
        
        <div style={styles.grid}>
          {TECH_POSTS.map((post) => (
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
