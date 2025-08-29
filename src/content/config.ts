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

export const collections = { projects };
