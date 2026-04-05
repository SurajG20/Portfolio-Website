import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/experience",
  }),
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    url: z.string().url(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    current: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    techs: z.array(z.string()).optional(),
  }),
});

const site = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/site",
  }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    introduction: z.string(),
    sections: z.object({
      blog: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
      projects: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
      experience: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
      skills: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }).optional(),
      education: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }).optional(),
    }),
    skills: z.record(z.string(), z.array(z.string())).optional(),
    education: z.object({
      degree: z.string(),
      institution: z.string(),
      duration: z.string(),
      cgpa: z.string(),
    }).optional(),
    socialLinks: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/notes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const bookmarks = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/bookmarks",
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["article", "book", "video"]),
    author: z.string(),
    url: z.string().url(),
    publishedAt: z.coerce.date(),
    createdAt: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog,
  experience,
  projects,
  site,
  notes,
  bookmarks,
};
