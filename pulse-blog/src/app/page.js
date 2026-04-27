import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';

const DUMMY_POSTS = [
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
    id: 2,
    title: "Scaling Referral Protocols for Rural India",
    slug: "/tech/scaling-referral-systems",
    date: "April 27, 2026",
    category: "Tech",
    tags: ["Progressive", "Infrastructure"],
    excerpt: "A deep dive into the decentralized architecture needed to connect 600,000 villages."
  },
  {
    id: 3,
    title: "Digital Privacy in the Age of Health Insurance",
    slug: "/posts/healthcare-revolution", // Placeholder for now
    date: "April 26, 2026",
    category: "Progressive",
    tags: ["Responsible", "Data"],
    excerpt: "How we can build trust-less verification systems to prevent insurance fraud."
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <section id="feed" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>The Pulse Feed</h2>
            <div style={styles.line}></div>
          </div>
          
          <div style={styles.grid}>
            {DUMMY_POSTS.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2026 PULSE. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Newsletter</span>
          </div>
        </footer>
      </main>
    </>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '24px',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    whiteSpace: 'nowrap',
    fontWeight: '800',
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
  },
  footer: {
    padding: '60px 0',
    borderTop: '1px solid var(--glass-border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerLinks: {
    display: 'flex',
    gap: '30px',
  }
};
