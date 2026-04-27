export default function Tag({ type, label }) {
  const getColor = () => {
    switch (type) {
      case 'social': return 'var(--accent-social)';
      case 'progressive': return 'var(--accent-progressive)';
      case 'responsible': return 'var(--accent-secondary)';
      case 'tech': return 'var(--accent-primary)';
      default: return 'var(--text-secondary)';
    }
  };

  const color = getColor();

  return (
    <span style={{ ...styles.tag, color: color, borderColor: color, boxShadow: `0 0 10px ${color}22` }}>
      {label || type}
    </span>
  );
}

const styles = {
  tag: {
    fontSize: '10px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '4px 10px',
    borderRadius: '4px',
    border: '1px solid',
    background: 'rgba(255,255,255,0.02)',
    display: 'inline-block',
  }
};
