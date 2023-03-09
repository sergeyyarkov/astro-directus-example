import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
