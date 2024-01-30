import { z } from "zod";

export const blogValidator = z.object({
  blogTitle: z.string(),
  blogImage: z.string().url(),
  blogContent: z.string(),
});

export type BlogSchema = z.infer<typeof blogValidator>;
