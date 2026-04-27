import { calculatePulseTier } from '@/lib/ratingSkill';

export default function PulseRating({ scores }) {
  const tier = calculatePulseTier(scores);
  const parameters = [
    { label: 'Depth', key: 'contentDepth' },
    { label: 'Facts', key: 'factCheck' },
    { label: 'Research', key: 'researchIntegrity' },
    { label: 'Actions', key: 'actionPotential' },
    { label: 'Flow', key: 'readability' },
    { label: 'Trust', key: 'trustScore' },
  ];

  return (
    <div style={styles.container} className="glass glow fade-in">
      <div style={styles.header}>
        <div style={styles.badgeWrapper}>
          <span style={{ ...styles.badge, color: tier.color, borderColor: tier.color }}>
            {tier.label} Tier
          </span>
          <span style={styles.pulseLabel}>Pulse Rating</span>
        </div>
      </div>
      
      <div style={styles.grid}>
        {parameters.map((param) => (
          <div key={param.key} style={styles.param}>
            <div style={styles.paramHeader}>
              <span style={styles.paramLabel}>{param.label}</span>
              <span style={styles.paramValue}>{scores[param.key]}/10</span>
            </div>
            <div style={styles.track}>
              <div style={{ ...styles.progress, width: `${scores[param.key] * 10}%`, background: tier.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '25px',
    margin: '40px 0',
    borderRadius: '20px',
    border: '1px solid var(--glass-border)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    borderBottom: '1px solid var(--glass-border)',
    paddingBottom: '15px',
  },
  badgeWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  badge: {
    fontSize: '14px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '5px 15px',
    borderRadius: '20px',
    border: '2px solid',
    background: 'rgba(255,255,255,0.05)',
  },
  pulseLabel: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
  },
  param: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  paramHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  paramLabel: {
    color: 'var(--text-secondary)',
  },
  paramValue: {
    color: 'white',
  },
  track: {
    height: '4px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 1s ease-out',
  }
};
