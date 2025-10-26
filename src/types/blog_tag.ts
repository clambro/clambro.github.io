/**
 * Centralized enum for all blog tags used across the site.
 *
 * Usage:
 * - In blog posts: tags: [BlogTag.AI, BlogTag.WEBSITE]
 * - In projects: Use the string value of the tag, and it will be validated at build time.
 */
export enum BlogTag {
  // General tags
  GENERAL = 'general',

  // Project-specific tags
  GENETIC_2048 = 'genetic-2048',
  POKEMON_AI = 'pokemon-ai',
  WEBSITE = 'website',
  BLACK_HOLE_THESIS = 'black-hole-thesis',
}

export function validateBlogTag(tag: string): BlogTag {
  if (!Object.values(BlogTag).includes(tag as BlogTag)) {
    throw new Error(`Invalid blog tag: ${tag}.`);
  }
  return tag as BlogTag;
}
