import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string().optional(),
    image: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudy = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-study" }),
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    slug: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Placeholder for future products collection
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    price: z.number().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Placeholder for future pricing collection
const pricing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pricing" }),
  schema: z.object({
    plan: z.string(),
    price: z.number(),
    features: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  'case-study': caseStudy,
  products,
  pricing,
};
