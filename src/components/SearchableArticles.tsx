'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SearchIcon, CalendarIcon, ClockIcon } from './PixelIcons';
import { SegmentedDate, SegmentedTime } from './SegmentedDisplay';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

interface SearchableArticlesProps {
  posts: Post[];
}

// Extract minutes from reading time string
function extractMinutes(readingTime: string): number {
  const match = readingTime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 5;
}

export function SearchableArticles({ posts }: SearchableArticlesProps) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return posts;

    const searchTerm = query.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
      return titleMatch || descriptionMatch || tagsMatch;
    });
  }, [posts, query]);

  return (
    <div>
      {/* Search Bar */}
      <div className="eink-search">
        <SearchIcon size={18} className="eink-search-icon" />
        <input
          type="text"
          placeholder="search_articles..."
          className="eink-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="eink-search-clear"
            aria-label="Clear search"
          >
            clear
          </button>
        )}
      </div>

      {/* Results count when searching */}
      {query && (
        <p className="eink-search-results terminal-comment">
          {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{query}"
        </p>
      )}

      {/* Article list */}
      {filteredPosts.length === 0 ? (
        <p className="text-muted terminal-prompt" style={{ padding: '2rem 0' }}>
          no_articles_found
        </p>
      ) : (
        <div>
          {filteredPosts.map((post, index) => (
            <article key={post.slug} className="eink-article corner-decorator">
              <Link href={`/posts/${post.slug}`} className="eink-article-title">
                {post.title.toLowerCase()}
              </Link>

              <div className="eink-article-meta">
                <span className="eink-meta-item">
                  <CalendarIcon size={14} />
                  <SegmentedDate date={post.date} />
                </span>
                <span className="eink-meta-item">
                  <ClockIcon size={14} />
                  <SegmentedTime minutes={extractMinutes(post.readingTime)} />
                </span>
              </div>

              <p className="eink-article-excerpt">
                {post.description}
              </p>

              {post.tags && post.tags.length > 0 && (
                <div className="eink-article-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="eink-tag">
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              )}

              {/* Status blocks indicator */}
              <div className="status-blocks" style={{ marginTop: '0.75rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`status-block ${i <= (4 - index) ? 'active' : ''}`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
