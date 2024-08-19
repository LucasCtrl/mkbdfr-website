import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const objectiveCollection = defineCollection({
  loader: file('src/data/objectives.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

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
  objectives: objectiveCollection,
};
