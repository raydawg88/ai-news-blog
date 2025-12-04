import { Metadata } from 'next';
import { User, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} - Our mission and approach to AI journalism.`,
};

export default function AboutPage() {
  return (
    <div>
      <header className="eink-header">
        <h1 className="eink-page-title">
          <User size={18} strokeWidth={1.5} style={{ marginRight: '0.5rem' }} />
          about
        </h1>
      </header>

      <div className="eink-prose">
        <p>
          ai_ink is an independent publication dedicated to thoughtful analysis of artificial
          intelligence. we cut through the hype to deliver signal.
        </p>

        <h2>approach</h2>

        <p>
          we believe ai news deserves more than breathless headlines and engagement-bait. our
          approach is simple: research deeply, explain clearly, and respect our readers&apos;
          intelligence and time.
        </p>

        <p>
          every article is fact-checked. every claim is sourced. we update our coverage when
          significant developments occur, and we&apos;re transparent about what we know and what
          we don&apos;t.
        </p>

        <h2>design_philosophy</h2>

        <p>
          this site is designed to feel like reading on an e-ink device. dark screen. soft pixel
          grid. monospace typography. no flashy colors. no distracting animations. no visual clutter.
        </p>

        <p>
          we believe the irony is intentional: the most futuristic technology deserves the
          most focused reading experience. the calm aesthetic isn&apos;t a limitation&mdash;it&apos;s
          a feature.
        </p>

        <h2>contact</h2>

        <p>
          have a tip? found an error? want to contribute?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <a
            href={`mailto:${siteConfig.author.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              color: 'var(--color-text-secondary)'
            }}
          >
            <Mail size={16} strokeWidth={1.5} />
            {siteConfig.author.email}
          </a>

          <a
            href={`https://twitter.com/${siteConfig.social.twitter?.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              color: 'var(--color-text-secondary)'
            }}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            twitter
          </a>
        </div>
      </div>
    </div>
  );
}
