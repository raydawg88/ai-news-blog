import { PostListItem } from '@/types/post';
import { ArticleCard } from './ArticleCard';

interface ArticleListProps {
  posts: PostListItem[];
}

export function ArticleList({ posts }: ArticleListProps) {
  if (posts.length === 0) {
    return (
      <p
        className="text-[var(--color-text-secondary)] text-center py-12"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        No articles yet. Check back soon.
      </p>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
