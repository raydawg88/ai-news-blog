import { getAllPosts } from '@/lib/posts';
import { SearchableArticles } from '@/components/SearchableArticles';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      {/* Header */}
      <header className="eink-header">
        <p className="eink-header-label">artificial_intelligence.news</p>
        <p className="eink-header-title">
          weekly analysis of ai developments, research, and industry shifts
        </p>
      </header>

      {/* Searchable Article List */}
      <SearchableArticles posts={posts} />
    </div>
  );
}
