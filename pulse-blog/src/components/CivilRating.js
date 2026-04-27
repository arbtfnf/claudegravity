export default function CivilRating() {
  const metrics = [
    { label: 'Social', value: 85, color: 'var(--accent-social)' },
    { label: 'Progressive', value: 64, color: 'var(--accent-progressive)' },
    { label: 'Responsible', value: 92, color: 'var(--accent-secondary)' }
  ];

  return (
    <div style={styles.container} className="glass">
      <div style={styles.header}>
        <span style={styles.title}>Civil Rating</span>
        <span style={styles.tier}>Elite Citizen</span>
      </div>
      <div style={styles.metrics}>
        {metrics.map((m) => (
          <div key={m.label} style={styles.metric}>
            <div style={styles.bar}>
              <div style={{ ...styles.progress, width: `${m.value}%`, background: m.color, boxShadow: `0 0 10px ${m.color}` }}></div>
            </div>
            <span style={styles.label}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '15px 20px',
    borderRadius: '12px',
    minWidth: '220px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  title: {
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '700',
  },
  tier: {
    fontSize: '11px',
    fontWeight: '800',
    color: 'white',
  },
  metrics: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  metric: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  bar: {
    flexGrow: 1,
    height: '2px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '1px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    transition: 'width 1s ease-out',
  },
  label: {
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(255,255,255,0.6)',
    width: '60px',
  }
};
