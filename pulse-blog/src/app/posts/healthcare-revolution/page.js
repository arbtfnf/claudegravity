import Navbar from '@/components/Navbar';
import ActionModule from '@/components/ActionModule';
import InitiativeHub from '@/components/InitiativeHub';
import PulseLine from '@/components/PulseLine';
import JourneyFlow from '@/components/JourneyFlow';
import PulseRating from '@/components/PulseRating';
import PulseAICompanion from '@/components/PulseAICompanion';
import BeagleBot from '@/components/BeagleBot';
import ShareToX from '@/components/ShareToX';
import { defaultHealthcareScores } from '@/lib/ratingSkill';

export default function HealthcarePost() {
  return (
    <>
      <Navbar />
      <PulseLine color="#ff3333" />
      <main style={styles.main}>
        <article style={styles.article}>
          <div style={styles.heroWrapper} className="glass glow fade-in">
            <img src="/healthcare-hero.png" alt="Healthcare Equity" style={styles.heroImg} />
          </div>
          <header style={styles.header} className="fade-in delay-1">
            <span style={styles.category}>Global Health Equity</span>
            <h1 style={styles.title}>The Heartbeat of Equity: Fixing the Healthcare Divide</h1>
            <div style={styles.meta}>
              <span>By Anurag Bandhu</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <PulseRating scores={defaultHealthcareScores} />
          </header>

          <section style={styles.tldr} className="glass fade-in delay-1">
            <h4 style={styles.tldrTitle}>The Core Issue</h4>
            <p>In India, quality healthcare is a geographic lottery. While the US system boasts seamless connectivity and transparency, the Indian insurance landscape is plagued by opacity, data privacy breaches, and "denial-by-excuse" tactics.</p>
          </section>

          <div style={styles.content} className="fade-in delay-2">
            <h2>The Geographic Lottery</h2>
            <p>If you live in a Tier-1 city in India, you have access to world-class facilities. But travel just 100km out, and the system collapses. Families are forced to migrate to big cities for even basic specialized care, losing their livelihoods and lives in the process.</p>
            
            <div style={styles.comparisonWrapper} className="glass">
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Feature</th>
                    <th style={styles.th}>US System</th>
                    <th style={styles.th}>India System</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>Referral Sync</td>
                    <td style={styles.td}>Instant & Digital</td>
                    <td style={styles.td}>Manual & Fragmented</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Cost Transparency</td>
                    <td style={styles.td}>Upfront Breakdown</td>
                    <td style={styles.td}>Post-Discharge Bill</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Data Privacy</td>
                    <td style={styles.td}>HIPAA Protected</td>
                    <td style={styles.td}>Minimal Oversight</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Rural Access</td>
                    <td style={styles.td}>Integrated Network</td>
                    <td style={styles.td}>The "Lottery" Gap</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <JourneyFlow />

            <ActionModule 
              type="challenge"
              title="Audit Your Policy"
              description="Most Indian health insurance policies contain 'hidden excuse' clauses that allow companies to stop coverage if a new illness is detected. Use our checklist to find yours."
              actionText="Start Audit"
            />

            <h2>Connectivity vs. Chaos</h2>
            <p>Compare this to the US: From the moment a primary doctor gives a referral, the insurer, the specialist, and the pharmacy are all synchronized. You know what you bear and what they pay. There is transparency.</p>
            
            <h3>The Second Opinion Trap</h3>
            <p>In India, we often rush into the OT (Operation Theater) based on a single consultation. Platforms like **Practo** have made it easier to find doctors, but are we using them for the right reasons? A genuine rating system and a connected referral chain are essential before committing to major surgery.</p>
            
            <div style={styles.highlightCard} className="glass glow">
              <h4>Before you go for an OT:</h4>
              <ul style={styles.list}>
                <li>Vet the doctor's historical success rates.</li>
                <li>Get a digital second opinion from a non-affiliated specialist.</li>
                <li>Verify your insurance's "pre-approval" in writing.</li>
              </ul>
            </div>

            <ActionModule 
              type="vote"
              title="Report Insurance Fraud"
              description="Have you been denied a claim due to a 'new illness' excuse? Report it anonymously to help us build the Transparency Map."
              actionText="Report Anonymously"
            />

            <h2>The Initiative: Pulse Healthcare Network</h2>
            <p>We are planning to launch a decentralized, transparent referral and insurance tracking system. A platform where privacy is guaranteed by design, and insurance companies are held accountable by the community.</p>

            <ActionModule 
              type="contribute"
              title="Join the Open Health Protocol"
              description="We need engineers, lawyers, and healthcare professionals to help draft the 'Digital Patients Bill of Rights' for India."
              actionText="Join the Initiative"
            />
          </div>

          <InitiativeHub />
          <ShareToX text="Join the initiative to fix Indian Healthcare transparency on Pulse!" />
          <PulseAICompanion topic="Healthcare Divide & Insurance" />
          <BeagleBot message="Woof! The system is broken, but we can fix it. Join the initiative above!" />
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
    paddingBottom: '100px',
  },
  article: {
    padding: '0 20px',
  },
  heroWrapper: {
    width: '100%',
    height: '400px',
    borderRadius: '24px',
    overflow: 'hidden',
    marginBottom: '60px',
    border: '1px solid var(--glass-border)',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
    marginBottom: '20px',
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
  },
  comparisonWrapper: {
    margin: '40px 0',
    padding: '20px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '15px',
    borderBottom: '2px solid var(--accent-primary)',
    color: 'var(--accent-secondary)',
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '1px',
  },
  td: {
    padding: '15px',
    borderBottom: '1px solid var(--glass-border)',
    fontSize: '16px',
  },
  list: {
    marginTop: '15px',
    paddingLeft: '20px',
    color: 'var(--text-secondary)',
  },
  highlightCard: {
    padding: '40px',
    margin: '40px 0',
    borderRadius: '20px',
    background: 'rgba(255, 0, 0, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }
};
