import { defineCollection, z } from 'astro:content';
import { validateBlogTag } from '../types/blog_tag';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      github: z.string().url(),
      image: image(),
      image_alt: z.string(),
      is_featured: z.boolean().default(false),
      blog_tag: z.string().transform(validateBlogTag),
    }),
});

const blog = defineCollection({
  type: 'content',
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
