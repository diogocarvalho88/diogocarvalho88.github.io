import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(), authors: z.array(z.string()), venue: z.string(), year: z.number(),
    status: z.enum(['journal', 'conference', 'workshop', 'preprint', 'reprint']),
    topics: z.array(z.string()), featured: z.boolean().default(false),
    doi: z.url().optional(), pdf: z.url().optional(),
    code: z.url().optional(), project: z.url().optional(),
    award: z.string().optional(), abstract: z.string().optional(), bibtex: z.string()
  })
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({ title: z.string(), venue: z.string(), date: z.string(), type: z.enum(['talk','presentation','teaching']), url: z.url().optional(), description: z.string() })
});

export const collections = { publications, events };
