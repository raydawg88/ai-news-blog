import { Metadata } from 'next';
import { User, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} - Independent AI analysis for people who build things.`,
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
        <p className="text-large" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          ai_ink is an independent publication for people who want to understand artificial
          intelligence without the noise. we translate technical complexity into clear analysis
          for builders, investors, and curious minds.
        </p>

        <h2>the_problem</h2>

        <p>
          the ai conversation is broken. on one side: breathless hype, engagement-bait, and
          announcements dressed as analysis. on the other: impenetrable research papers and
          academic jargon. somewhere in between, the people actually building with ai are left
          to figure things out themselves.
        </p>

        <p>
          ai_ink exists because we believe the greatest challenge of this era is making an
          increasingly fast-moving technical world legible to a large number of people.
        </p>

        <h2>what_we_do</h2>

        <p>
          we provide rock-solid analysis of what matters in ai. not everything that happens&mdash;what
          matters. we read the papers so you don&apos;t have to. we trace the implications that
          press releases don&apos;t mention. we tell you what works, what doesn&apos;t, and why
          you should care.
        </p>

        <p>
          every claim is sourced. every hype cycle is questioned. when we don&apos;t know
          something, we say so. when we&apos;re wrong, we update.
        </p>

        <h2>our_lens</h2>

        <p>
          we cover ai through four lenses:
        </p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>capability.</strong> what can these systems actually do? what are the real benchmarks, not the cherry-picked demos?</li>
          <li><strong>infrastructure.</strong> who controls the compute, the chips, the data centers? where are the bottlenecks?</li>
          <li><strong>strategy.</strong> what are the companies and countries actually betting on? follow the money, the talent, the patents.</li>
          <li><strong>implications.</strong> what does this mean for how we work, create, and live? not sci-fi speculation&mdash;grounded analysis.</li>
        </ul>

        <h2>the_aesthetic</h2>

        <p>
          this site is designed to feel like an instrument panel. e-ink warmth. halftone imagery.
          monospace precision. no flashy animations. no visual clutter. no dark patterns.
        </p>

        <p>
          the irony is intentional: the most advanced technology deserves the most focused
          reading experience. we respect your attention. the calm interface isn&apos;t a
          limitation&mdash;it&apos;s the point.
        </p>

        <h2>who_we_are</h2>

        <p>
          ai_ink is written by practitioners&mdash;people who build products, ship code, and
          have opinions formed by doing the work. we&apos;re not observers. we&apos;re participants
          in the thing we cover.
        </p>

        <p>
          that gives us perspective. it also gives us bias. we try to be transparent about both.
        </p>

        <h2>support_independent_analysis</h2>

        <p>
          we have no advertising. no sponsored content. no investors telling us what to write.
          the business model is simple: we write analysis good enough that people want to
          subscribe.
        </p>

        <p>
          if you find value here, consider subscribing via rss or sharing articles that resonate.
          independent technical journalism only works if readers support it.
        </p>

        <h2>contact</h2>

        <p>
          tips welcome. corrections appreciated. pitches considered.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <a
            href={`mailto:${siteConfig.author.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              color: 'var(--color-ink-muted)'
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
              color: 'var(--color-ink-muted)'
            }}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            {siteConfig.social.twitter}
          </a>
        </div>
      </div>
    </div>
  );
}
