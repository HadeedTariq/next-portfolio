import { connectToDb } from "@/dbConnection/connectToDb";
import { Blog } from "@/models/app.model";
import { BlogSchema } from "@/validators/blogValidator";

export type BlogsData = BlogSchema & { _id: string; createdAt: string };

export async function getBlogs() {
  await connectToDb();
  try {
    const blogs = await Blog.find({});
    return JSON.parse(JSON.stringify(blogs)) as BlogsData[];
  } catch (err) {
    throw new Error("No Project found");
  }
}
