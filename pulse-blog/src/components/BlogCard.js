import Link from 'next/link';
import Tag from './Tag';

export default function BlogCard({ title, date, excerpt, category, tags = [], slug }) {
  return (
    <Link href={slug || "/"} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={styles.card} className="glass reveal">
        <div style={styles.tags}>
          <Tag type={category.toLowerCase()} label={category} />
          {tags.map(t => <Tag key={t} type={t.toLowerCase()} label={t} />)}
        </div>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.excerpt}>{excerpt}</p>
        <div style={styles.footer}>
          <span style={styles.date}>{date}</span>
          <span style={styles.readMore}>Read More &rarr;</span>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'var(--transition)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    lineHeight: '1.3',
    fontWeight: '700',
  },
  excerpt: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    marginBottom: '30px',
    lineHeight: '1.6',
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '20px',
  },
  date: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
  },
  readMore: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
  }
};
