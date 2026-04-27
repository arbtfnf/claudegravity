import Navbar from '@/components/Navbar';
import PulseLine from '@/components/PulseLine';
import Tag from '@/components/Tag';
import ActionModule from '@/components/ActionModule';
import PulseAICompanion from '@/components/PulseAICompanion';
import BeagleBot from '@/components/BeagleBot';
import ShareToX from '@/components/ShareToX';

export default function TechPost() {
  return (
    <>
      <Navbar />
      <PulseLine />
      <main style={styles.main}>
        <article style={styles.article}>
          <header style={styles.header}>
            <div style={styles.tags}>
              <Tag type="tech" label="Infrastructure" />
              <Tag type="progressive" label="Protocol" />
            </div>
            <h1 style={styles.title} className="text-glow">Scaling Referral Protocols for 600k Villages</h1>
            <div style={styles.meta}>
              <span>Tech Deep-Dive</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </header>

          <div style={styles.content}>
            <p className="reading-focus active">The fundamental challenge of Indian healthcare is not just a lack of doctors, but a lack of **information liquidity**. Patient data is trapped in paper silos or fragmented local databases.</p>
            
            <p className="reading-focus">To solve this, we are proposing a decentralized **Referral Protocol** built on a peer-to-peer verification layer. This isn't just about moving data; it's about moving **trust**.</p>

            <div style={styles.techStack} className="glass">
              <h4>Proposed Tech Stack</h4>
              <ul>
                <li><strong>Engine:</strong> Rust (for high-concurrency safety)</li>
                <li><strong>P2P Layer:</strong> Libp2p for rural offline-first sync</li>
                <li><strong>Verification:</strong> ZK-Proofs (Zero Knowledge) for privacy-preserving audits</li>
              </ul>
            </div>

            <p className="reading-focus">When a doctor in a remote village makes a referral, the protocol generates a cryptographic proof. This proof is instantly verifiable by the urban specialist and the insurer, without revealing sensitive patient data to third parties.</p>

            <ActionModule 
              type="contribute"
              title="Audit the Protocol"
              description="We've released the alpha specs for the P2P sync layer. We need security researchers to stress-test the ZK-proof generation."
              actionText="View GitHub Repo"
            />
          </div>
          <ShareToX text="Check out this deep-dive into Decentralized Referral Protocols on Pulse!" />
          <PulseAICompanion topic="Decentralized Referral Protocols" />
          <BeagleBot message="Woof! Good code saves lives. Audit the repo today!" />
        </article>
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: '180px',
    maxWidth: '800px',
    margin: '0 auto',
    paddingBottom: '100px',
  },
  article: {
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 64px)',
    lineHeight: '1.1',
    fontWeight: '900',
    marginBottom: '20px',
  },
  meta: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  content: {
    fontSize: '20px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.9)',
  },
  techStack: {
    padding: '40px',
    margin: '60px 0',
    borderRadius: '16px',
    border: '1px solid var(--accent-primary)',
    background: 'rgba(168, 85, 247, 0.05)',
  }
};
