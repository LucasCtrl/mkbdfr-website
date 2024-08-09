import { z, defineCollection } from 'astro:content';

const guideCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      img: image().refine((img) => img.width >= 562, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      publishedDate: z.string(),
      draft: z.boolean(),
    }),
});

export const collections = {
  guides: guideCollection,
};
