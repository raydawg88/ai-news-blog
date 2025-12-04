import { formatDateFull } from '@/lib/dates';

interface ArticleHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  author?: string;
}

export function ArticleHeader({ title, date, readingTime, author }: ArticleHeaderProps) {
  return (
    <header className="mb-12">
      <h1
        className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h1>

      <div
        className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <time dateTime={date}>{formatDateFull(date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{readingTime}</span>
        {author && (
          <>
            <span aria-hidden="true">&middot;</span>
            <span>{author}</span>
          </>
        )}
      </div>
    </header>
  );
}
