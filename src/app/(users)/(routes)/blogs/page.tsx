import { getBlogs } from "@/actions/getBlogs";
import BlogCard from "@/components/BlogCard";
import React from "react";

const BlogPage = async () => {
  const blogs = await getBlogs();
  if (!blogs) return;
  return (
    <div className="grid grid-cols-3 max-[600px]:mt-[23px]  gap-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 overflow-x-hidden w-full px-[3px] py-2">
      {blogs?.map((blog) => (
        <>
          <BlogCard key={blog._id} blog={blog} />
        </>
      ))}
    </div>
  );
};

export default BlogPage;
