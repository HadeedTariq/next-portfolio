"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/libs/uploadthing";
import toast from "react-hot-toast";
import Image from "next/image";
import { useStore } from "@/store/stroe";
import { useRouter } from "next/navigation";
import { BlogSchema, blogValidator } from "@/validators/blogValidator";

export default function BlogForm() {
  const router = useRouter();
  const { adminPassword } = useStore();
  const form = useForm<BlogSchema>({
    resolver: zodResolver(blogValidator),
    defaultValues: {
      blogTitle: "",
      blogContent: "",
      blogImage: "",
    },
  });
  const { isValid, isSubmitting } = form.formState;
  const onSubmit = async (values: BlogSchema) => {
    try {
      await axios.post("/api/admin/createBlog", {
        ...values,
        adminPassword,
      });
      toast.success("Project Created");
      form.reset();
      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const image = form.watch("blogImage");
  const content = form.watch("blogContent");

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-4 flex flex-col items-center  w-full">
          <FormField
            control={form.control}
            name="blogTitle"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Blog Title</FormLabel>
                <FormControl>
                  <Input
                    className="w-[100%] border-2 border-slate-700"
                    placeholder="projectTitle"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="border-2">
            <FormField
              control={form.control}
              name="blogImage"
              render={() => (
                <FormItem className="w-full">
                  <FormControl>
                    {!image && (
                      <UploadDropzone
                        endpoint="blogImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("blogImage", res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error
                          console.log(error);
                          toast.error(`ERROR! ${error.message}`);
                        }}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {image && <Image src={image} alt="img" width={300} height={300} />}
          </div>
          <div>
            <MDEditor
              style={{ fontSize: "20px" }}
              value={content}
              onChange={(e) => form.setValue("blogContent", e as string)}
            />
          </div>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
