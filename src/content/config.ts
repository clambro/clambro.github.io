import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str: string) => new Date(str)),
    github: z.string().url(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    is_featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
