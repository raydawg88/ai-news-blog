export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  slug?: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
  readingTime: string;
}

export interface PostListItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  tags?: string[];
  featured?: boolean;
}
