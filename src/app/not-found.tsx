import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 0' }}>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '4rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        color: 'var(--color-eink-ink)'
      }}>
        404
      </h1>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1rem',
        color: 'var(--color-eink-gray)',
        marginBottom: '1.5rem'
      }}>
        Page not found.
      </p>
      <Link href="/" className="eink-button">
        Return home
      </Link>
    </div>
  );
}
