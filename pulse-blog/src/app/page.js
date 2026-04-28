import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';

import { getPosts } from '@/lib/data';

export default async function Home() {
  const posts = await getPosts();

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
            {posts.map((post) => (
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
