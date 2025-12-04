import type { Metadata } from 'next';
import { EB_Garamond, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { siteConfig } from '@/lib/constants';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HomeIcon, ArticleIcon, UserIcon, RssIcon } from '@/components/Icons';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

// Thick, wide sans-serif for UI elements
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Bold monospace for code/technical elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'LLM', 'Technology', 'Analysis'],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/led-dot-matrix"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          skip_to_content
        </a>

        <div className="eink-container">
          {/* Navigation */}
          <nav className="eink-nav">
            <Link href="/" className="eink-nav-logo">
              <HomeIcon size={32} />
              <span>ai_ink</span>
            </Link>
            <div className="eink-nav-links">
              <Link href="/" className="eink-nav-link">
                <ArticleIcon size={18} />
                <span className="eink-menu-label">articles</span>
              </Link>
              <Link href="/about" className="eink-nav-link">
                <UserIcon size={18} />
                <span className="eink-menu-label">about</span>
              </Link>
              <Link href="/rss.xml" className="eink-nav-link">
                <RssIcon size={18} />
                <span className="eink-menu-label">rss</span>
              </Link>
              <ThemeToggle />
            </div>
          </nav>

          {/* Main Content */}
          <main id="main-content">
            {children}
          </main>

          {/* Footer - Status Bar Style */}
          <footer className="eink-footer">
            <div className="block-separator" />

            <div className="eink-status">
              <span className="eink-status-item">ai_ink.publication</span>
              <span className="eink-status-item">weekly_dispatch.frequency</span>
              <span className="eink-status-item">{new Date().getFullYear()}.year</span>
            </div>

            <hr className="eink-divider" />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8125rem',
              color: 'var(--color-ink-muted)'
            }}>
              <span className="terminal-prompt">subscribe_via_rss</span>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/" style={{ color: 'var(--color-ink-muted)' }}>home</Link>
                <Link href="/about" style={{ color: 'var(--color-ink-muted)' }}>about</Link>
                <Link href="/rss.xml" style={{ color: 'var(--color-ink-muted)' }}>rss</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
