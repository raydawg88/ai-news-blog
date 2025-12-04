import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b-2 border-[var(--color-border)]">
      <div className="container py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold no-underline hover:opacity-100"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            AI Ink
          </Link>
          <div className="flex gap-6 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            <Link href="/" className="hover:opacity-70">
              Articles
            </Link>
            <Link href="/about" className="hover:opacity-70">
              About
            </Link>
            <Link href="/rss.xml" className="hover:opacity-70">
              RSS
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
