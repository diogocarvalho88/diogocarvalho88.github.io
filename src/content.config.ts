import { defineCollection, reference } from 'astro:content';
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
    materials: z.array(reference('materials')).default([]),
    award: z.string().optional(), abstract: z.string().optional(), bibtex: z.string()
  })
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    title: z.string(), venue: z.string(), date: z.string().optional(), dateLabel: z.string().optional(),
    type: z.enum(['talk','presentation','teaching','milestone']), officialUrl: z.url().optional(), projectUrl: z.url().optional(),
    materials: z.array(reference('materials')).default([]), featured: z.boolean().default(false),
    description: z.string()
  })
});

const materials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(), type: z.enum(['slides','poster','document','research-note']),
    date: z.string().optional(), year: z.number().optional(), context: z.string(), description: z.string(),
    pdf: z.string().startsWith('/materials/'), pages: z.number().int().positive(), size: z.string(),
    relatedPublication: reference('publications').optional(),
    presentationVenues: z.array(z.object({ name: z.string(), url: z.url().optional() })).default([])
  })
});

export const collections = { publications, events, materials };
