import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BlogsData } from "@/actions/getBlogs";

interface ProjectCradProps {
  blog: BlogsData;
}

const BlogCard = ({ blog }: ProjectCradProps) => {
  return (
    <div className="w-full h-fit rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 cursor-pointer flex flex-col items-center gap-2 bg-zinc-800 pb-2 my-2">
      <Image src={blog.blogImage} alt="project" width={400} height={330} />

      <h3 className="mt-0.5 mx-2 text-lg text-gray-900 dark:text-white">
        {blog.blogTitle}
      </h3>
      <Link href={`/blogs/${blog._id}`} className="w-[90%]">
        <Button variant={"purp"} className="w-full">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default BlogCard;
