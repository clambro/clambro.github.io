import { defineCollection, z } from 'astro:content';

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
    }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      image: image().optional(),
      image_alt: z.string().optional(),
    }),
});

export const collections = { projects, blog };
