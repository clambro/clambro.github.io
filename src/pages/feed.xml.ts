import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const blogPosts = await getCollection('blog');
  const projects = await getCollection('projects');

  // Combine and sort by date (newest first)
  const allItems = [
    ...blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: ['blog', ...post.data.tags],
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.date,
      link: `/projects/${project.slug}/`,
      categories: ['project', project.data.blog_tag],
    })),
  ].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return rss({
    title: 'Costa Lambrinoudis',
    description: 'Latest blog posts and projects by Costa Lambrinoudis',
    site: context.site,
    items: allItems,
    customData: `<language>en-us</language>`,
  });
};
