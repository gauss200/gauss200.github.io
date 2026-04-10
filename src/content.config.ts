import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    abstract: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const patents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/patents' }),
  schema: z.object({
    title: z.string(),
    patent_number: z.string(),
    year: z.number(),
    co_inventors: z.string().optional(),
    assignee: z.string().optional(),
    abstract: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['active', 'completed']),
    year_start: z.number(),
    year_end: z.number().optional(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const hobbies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hobbies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { publications, patents, projects, hobbies };
