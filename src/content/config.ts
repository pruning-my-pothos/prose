import { defineCollection, z } from 'astro:content';

const commonFields = {
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published']),
  featured: z.boolean().default(false),
};

const work = defineCollection({
  type: 'content',
  schema: z.object({
    ...commonFields,
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    tools: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    ...commonFields,
    hypothesis: z.string(),
    build_notes: z.string(),
    next_iteration: z.string(),
  }),
});

const writingSchema = z.object({
  ...commonFields,
  lane: z.enum(['philosophy', 'creative', 'comms']),
});

const philosophy = defineCollection({ type: 'content', schema: writingSchema });
const creative = defineCollection({ type: 'content', schema: writingSchema });
const comms = defineCollection({ type: 'content', schema: writingSchema });

export const collections = { work, lab, philosophy, creative, comms };
