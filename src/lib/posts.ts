import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post, PostFrontmatter, PostListItem } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all published posts, sorted by date (newest first)
 */
export async function getAllPosts(): Promise<PostListItem[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Extract slug from filename (remove date prefix and .mdx extension)
      const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '');

      // Read file contents
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parse frontmatter
      const { data, content } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;

      // Skip drafts in production
      if (frontmatter.draft && process.env.NODE_ENV === 'production') {
        return null;
      }

      // Calculate reading time
      const { text: readingTimeText } = readingTime(content);

      return {
        slug: frontmatter.slug || slug,
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        readingTime: readingTimeText,
        tags: frontmatter.tags,
        featured: frontmatter.featured,
        score: frontmatter.score,
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find((name) => {
    const fileSlug = name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '');
    return fileSlug === slug;
  });

  if (!fileName) {
    return null;
  }

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse frontmatter
  const { data, content } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;

  // Calculate reading time
  const { text: readingTimeText } = readingTime(content);

  return {
    frontmatter,
    content,
    slug: frontmatter.slug || slug,
    readingTime: readingTimeText,
  };
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}
