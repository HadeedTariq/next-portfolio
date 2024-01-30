import { connectToDb } from "@/dbConnection/connectToDb";
import { Blog } from "@/models/app.model";
import { BlogsData } from "./getBlogs";
import { BlogSchema } from "@/validators/blogValidator";

export type BlogssData = BlogSchema & { _id: string; createdAt: string };

export async function getBlogsDetails(id: string) {
  await connectToDb();
  try {
    const blog = await Blog.findById(id);
    return JSON.parse(JSON.stringify(blog)) as BlogsData;
  } catch (err) {
    throw new Error("No Project found with this id");
  }
}
