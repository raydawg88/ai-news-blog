'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, Calendar } from 'lucide-react';

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
        <Search size={18} strokeWidth={1.5} className="eink-search-icon" />
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
        <p className="eink-search-results">
          {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{query}"
        </p>
      )}

      {/* Article list */}
      {filteredPosts.length === 0 ? (
        <p className="text-muted" style={{ padding: '2rem 0' }}>
          no_articles_found
        </p>
      ) : (
        <div>
          {filteredPosts.map((post) => (
            <article key={post.slug} className="eink-article">
              <Link href={`/posts/${post.slug}`} className="eink-article-title">
                {post.title.toLowerCase()}
              </Link>

              <div className="eink-article-meta">
                <span className="eink-meta-item">
                  <Calendar size={12} strokeWidth={1.5} />
                  {formatTerminalDate(post.date)}.date
                </span>
                <span className="eink-meta-item">
                  <Clock size={12} strokeWidth={1.5} />
                  {formatTerminalReadingTime(post.readingTime)}.read
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
