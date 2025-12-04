import Link from 'next/link';
import { PostListItem } from '@/types/post';
import { formatDate } from '@/lib/dates';

interface ArticleCardProps {
  post: PostListItem;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="border-b border-[var(--color-border)] pb-8 mb-8 last:border-0">
      <Link href={`/posts/${post.slug}`} className="block no-underline group">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 group-hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {post.title}
        </h2>
      </Link>

      <div
        className="flex gap-4 text-sm text-[var(--color-text-secondary)] mb-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime}</span>
      </div>

      <p
        className="text-lg text-[var(--color-text)] leading-relaxed"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {post.description}
      </p>

      {post.tags && post.tags.length > 0 && (
        <div
          className="flex gap-2 mt-4 flex-wrap"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
