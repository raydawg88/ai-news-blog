import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--color-border)] mt-24">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Newsletter signup */}
          <div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Subscribe
            </h3>
            <p
              className="text-[var(--color-text-secondary)] mb-4 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Weekly AI analysis. No spam. Unsubscribe anytime.
            </p>
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/aiink"
              method="post"
              target="popupwindow"
              className="flex gap-2"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2 border-2 border-[var(--color-ink)] bg-white text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[var(--color-ink)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links and info */}
          <div className="md:text-right">
            <div
              className="flex gap-6 md:justify-end mb-4 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Link href="/" className="hover:opacity-70">
                Home
              </Link>
              <Link href="/about" className="hover:opacity-70">
                About
              </Link>
              <Link href="/rss.xml" className="hover:opacity-70">
                RSS
              </Link>
            </div>
            <p
              className="text-[var(--color-text-muted)] text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              &copy; {currentYear} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
