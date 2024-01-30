import { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
  {
    projectTitle: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    projectLive: {
      type: String,
      required: true,
    },
    projectGithub: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Project = models.Projects || model("Projects", projectSchema);

const blogSchema = new Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    },
    blogImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = models.Blogs || model("Blogs", blogSchema);
