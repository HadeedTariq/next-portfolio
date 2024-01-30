import { z } from "zod";

const projectSchema = z.object({
  projectTitle: z.string().min(8, { message: "Min 8 characters long" }),
  projectDescription: z.string().min(40, { message: "Min 40 characters long" }),
  projectImage: z.string().url(),
  projectLive: z.string().url(),
  projectGithub: z.string().url(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

export { projectSchema };
