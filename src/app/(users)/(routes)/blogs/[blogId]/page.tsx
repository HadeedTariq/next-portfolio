import Image from "next/image";
import { getBlogsDetails } from "@/actions/getBlogDetails";
import { Lato } from "next/font/google";
import BlogContent from "@/components/BlogContent";

interface BlogDetailsProps {
  params: { blogId: string };
}
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});
const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { blogId } = params;
  const blog = await getBlogsDetails(blogId as string);
  return (
    <div className="flex flex-col max-[600px]:items-start gap-3 min-h-[600px]:p-2 w-full items-center">
      <Image src={blog.blogImage} alt="image" width={700} height={700} />
      <h1 className={`${lato.className} text-[35px]`}>{blog.blogTitle}</h1>
      <BlogContent content={blog.blogContent} />
    </div>
  );
};

export default BlogDetails;
