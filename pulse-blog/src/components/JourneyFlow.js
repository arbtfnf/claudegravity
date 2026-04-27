export default function JourneyFlow() {
  const steps = [
    { label: "Symptom", icon: "🤒" },
    { label: "Primary Care", icon: "🩺" },
    { label: "Referral Sync", icon: "🔗", highlight: true },
    { label: "Specialist", icon: "👨‍⚕️" },
    { label: "Vetted Care", icon: "✅" },
    { label: "Recovery", icon: "🎉" }
  ];

  return (
    <div style={styles.container} className="glass glow fade-in">
      <h4 style={styles.title}>The Ideal Connected Journey</h4>
      <div style={styles.flow}>
        {steps.map((step, i) => (
          <div key={i} style={styles.stepWrapper}>
            <div style={{ ...styles.step, border: step.highlight ? '2px solid var(--accent-secondary)' : '1px solid var(--glass-border)' }}>
              <span style={styles.icon}>{step.icon}</span>
              <span style={styles.label}>{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={styles.arrow}>
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path d="M0 10 L35 10 M25 0 L35 10 L25 20" stroke="var(--accent-secondary)" fill="none" strokeWidth="2" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    margin: '60px 0',
    textAlign: 'center',
    overflowX: 'auto',
  },
  title: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    marginBottom: '30px',
    color: 'var(--accent-primary)',
  },
  flow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '800px',
    gap: '10px',
  },
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  step: {
    padding: '15px 20px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '120px',
    transition: 'var(--transition)',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'white',
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
  }
};
