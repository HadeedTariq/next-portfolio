import { getBlogs } from "@/actions/getBlogs";
import BlogCard from "@/components/BlogCard";
import React from "react";

const BlogPage = async () => {
  const blogs = await getBlogs();
  if (!blogs) return;
  return (
    <div className="flex flex-wrap justify-center items-center max-[600px]:pb-[100px]">
      {blogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
