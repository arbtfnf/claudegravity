import Navbar from '@/components/Navbar';
import ActionModule from '@/components/ActionModule';
import InitiativeHub from '@/components/InitiativeHub';
import PulseLine from '@/components/PulseLine';

export default function PostPage() {
  return (
    <>
      <Navbar />
      <PulseLine />
      <main style={styles.main}>
        <article style={styles.article}>
          <header style={styles.header} className="fade-in">
            <span style={styles.category}>The Future of Intelligence</span>
            <h1 style={styles.title}>Beyond the Algorithmic Horizon</h1>
            <div style={styles.meta}>
              <span>By Anurag Bandhu</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <section style={styles.tldr} className="glass fade-in delay-1">
            <h4 style={styles.tldrTitle}>Quick Insight</h4>
            <p>We are transitioning from a world where AI is a tool, to a world where AI is an environment. To survive this transition, we must reclaim our cognitive agency through active participation.</p>
          </section>

          <div style={styles.content} className="fade-in delay-2">
            <p>For decades, we viewed software as something we "use." We open an app, perform a task, and close it. But as we move deeper into the 2020s, that boundary is dissolving...</p>
            
            <ActionModule 
              type="challenge"
              title="Audit Your Attention"
              description="Spend the next 24 hours tracking how many times you defer a decision to an algorithm (Spotify, TikTok, GPS). The results might surprise you."
              actionText="Download Tracker"
            />

            <p>The danger isn't that AI will become "smarter" than us in every way. The danger is that we will become increasingly passive, allowing our preferences and identities to be curated by recommendation engines.</p>
            
            <p>This is why we need to build open-source, sovereign alternatives to the centralized AI giants. We need tools that serve the user, not the advertiser.</p>

            <ActionModule 
              type="contribute"
              title="Build the Aether Protocol"
              description="We are building a decentralized protocol for neural data sovereignty. We need React and Rust developers to help us prototype the core engine."
              actionText="View Repo &rarr;"
            />

            <p>In conclusion, the future isn't something that happens to us—it's something we pulses into existence. Every choice to act, rather than just consume, is a vote for a more human-centric digital world.</p>
          </div>

          <InitiativeHub />
        </article>
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  article: {
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  category: {
    fontSize: '14px',
    color: 'var(--accent-primary)',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: '700',
    marginBottom: '20px',
    display: 'block',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 56px)',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  meta: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  tldr: {
    padding: '30px',
    marginBottom: '40px',
    borderLeft: '4px solid var(--accent-secondary)',
  },
  tldrTitle: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '10px',
    color: 'var(--accent-secondary)',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: 'var(--text-primary)',
  }
};
