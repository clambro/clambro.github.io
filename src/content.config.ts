import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { validateBlogTag } from './types/blog_tag';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      github: z.url(),
      image: image(),
      image_alt: z.string(),
      is_featured: z.boolean().default(false),
      blog_tag: z.string().transform(validateBlogTag),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      image_alt: z.string().optional(),
      tags: z.array(z.string()).transform((tags) => tags.map(validateBlogTag)),
    }),
});

export const collections = { projects, blog };
