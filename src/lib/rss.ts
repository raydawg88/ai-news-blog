import { Feed } from 'feed';
import { getAllPosts } from './posts';
import { siteConfig } from './constants';

export async function generateRssFeed(): Promise<string> {
  const posts = await getAllPosts();

  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en',
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.author.name}`,
    updated: posts.length > 0 ? new Date(posts[0].date) : new Date(),
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteConfig.url}/rss.xml`,
    },
    author: {
      name: siteConfig.author.name,
      email: siteConfig.author.email,
      link: siteConfig.url,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}/posts/${post.slug}`,
      link: `${siteConfig.url}/posts/${post.slug}`,
      description: post.description,
      author: [
        {
          name: siteConfig.author.name,
          email: siteConfig.author.email,
          link: siteConfig.url,
        },
      ],
      date: new Date(post.date),
    });
  });

  return feed.rss2();
}
