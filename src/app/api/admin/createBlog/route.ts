import { connectToDb } from "@/dbConnection/connectToDb";
import { Blog } from "@/models/app.model";
import { BlogSchema, blogValidator } from "@/validators/blogValidator";
import { NextRequest, NextResponse } from "next/server";

type BlogSeverSchema = BlogSchema & { adminPassword?: string };

export async function POST(req: NextRequest) {
  await connectToDb();
  const blog: BlogSeverSchema = await req.json();
  if (
    !blog.adminPassword ||
    blog.adminPassword !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD!
  ) {
    return NextResponse.json(
      { message: "Incorrect AdminPassword" },
      { status: 404 }
    );
  }
  delete blog.adminPassword;
  try {
    const validator = blogValidator.parse(blog);
    const hasEmptyFields = Object.values(validator).some(
      (value) => value === undefined || value === ""
    );
    if (hasEmptyFields) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 404 }
      );
    }
    const createdBlog = await Blog.create(blog);
    return NextResponse.json(
      { message: "Blog Created", createdBlog },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 }
    );
  }
}
