export default function ActionModule({ type, title, description, actionText }) {
  const getIcon = () => {
    switch (type) {
      case 'challenge': return '🎯';
      case 'contribute': return '💻';
      case 'vote': return '🗳️';
      default: return '⚡';
    }
  };

  return (
    <div style={styles.container} className="glass glow">
      <div style={styles.header}>
        <span style={styles.icon}>{getIcon()}</span>
        <span style={styles.type}>{type}</span>
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <button style={styles.button}>{actionText}</button>
    </div>
  );
}

const styles = {
  container: {
    margin: '40px 0',
    padding: '30px',
    borderRadius: '20px',
    border: '1px solid var(--accent-primary)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  icon: {
    fontSize: '24px',
  },
  type: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'var(--accent-secondary)',
    fontWeight: '700',
  },
  title: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  button: {
    background: 'var(--accent-primary)',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '30px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
    width: 'fit-content',
  }
};
