import { getAllPosts } from '@/lib/posts';
import { SearchableArticles } from '@/components/SearchableArticles';
import { PageHeader } from '@/components/PageHeader';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      {/* Header with animated title */}
      <PageHeader
        label="artificial_intelligence.news"
        title="weekly analysis of ai developments, research, and industry shifts"
      />

      {/* Searchable Article List */}
      <SearchableArticles posts={posts} />
    </div>
  );
}
