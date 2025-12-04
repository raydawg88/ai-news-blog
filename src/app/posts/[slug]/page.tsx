import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { MDXContent } from '@/components/mdx/MDXContent';
import { siteConfig } from '@/lib/constants';
import { ReadingProgress } from '@/components/ReadingProgress';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Format date as terminal style: dec_04_2024
function formatTerminalDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toLowerCase();
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}_${day}_${year}`;
}

// Format reading time as terminal style: 5_min
function formatTerminalReadingTime(readingTime: string): string {
  const match = readingTime.match(/(\d+)/);
  return match ? `${match[1]}_min` : readingTime;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const ogImage = post.frontmatter.image || '/og-default.png';

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [{ name: post.frontmatter.author || siteConfig.author.name }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || siteConfig.author.name],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.frontmatter.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteConfig.url}/posts/${slug}`;

  return (
    <>
      <ReadingProgress />
      <article>
        {/* Back Link */}
        <Link
          href="/"
          className="eink-back-link"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          back_to_articles
        </Link>

      {/* Article Header */}
      <header className="eink-header">
        <h1 className="eink-page-title">
          {post.frontmatter.title}
        </h1>

        <div className="eink-article-meta">
          <span className="eink-meta-item">
            <Calendar size={14} strokeWidth={1.5} />
            {formatTerminalDate(post.frontmatter.date)}.date
          </span>
          <span className="eink-meta-item">
            <Clock size={14} strokeWidth={1.5} />
            {formatTerminalReadingTime(post.readingTime)}.read
          </span>
          {post.frontmatter.author && (
            <span className="eink-meta-item">
              <User size={14} strokeWidth={1.5} />
              {post.frontmatter.author.toLowerCase().replace(/\s+/g, '_')}.author
            </span>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="eink-prose">
        <MDXContent source={post.content} />
      </div>

      {/* Share */}
      <div className="eink-share">
        <Share2 size={14} strokeWidth={1.5} />
        <span className="eink-share-label">share:</span>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.frontmatter.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="eink-share-link"
        >
          twitter
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="eink-share-link"
        >
          linkedin
        </a>
      </div>
      </article>
    </>
  );
}
