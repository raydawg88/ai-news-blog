export const siteConfig = {
  name: 'AI Ink',
  description: 'Thoughtful analysis of artificial intelligence. No hype, just signal.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: {
    name: 'AI Ink Editorial',
    email: 'hello@aiink.news',
  },
  social: {
    twitter: '@aiink',
  },
} as const;

export const POSTS_PER_PAGE = 10;
