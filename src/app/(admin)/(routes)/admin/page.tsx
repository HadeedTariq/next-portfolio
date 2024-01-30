"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

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
import { ProjectSchema, projectSchema } from "@/validators/project.validator";
import { useStore } from "@/store/stroe";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const router = useRouter();
  const { adminPassword } = useStore();
  const form = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectDescription: "",
      projectGithub: "",
      projectImage: "",
      projectLive: "",
      projectTitle: "",
    },
  });
  const { isValid, isSubmitting } = form.formState;
  const onSubmit = async (values: ProjectSchema) => {
    try {
      await axios.post("/api/admin/createProject", {
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
  const image = form.watch("projectImage");
  // ...

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-4 flex flex-col items-center  w-full">
          <FormField
            control={form.control}
            name="projectTitle"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project Title</FormLabel>
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
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-[100%] border-2 border-slate-700"
                    placeholder="projectDescription"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectLive"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project Demo</FormLabel>
                <FormControl>
                  <Input
                    className="w-[100%] border-2 border-slate-700"
                    placeholder="live url"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectGithub"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project GitHub</FormLabel>
                <FormControl>
                  <Input
                    className="w-[100%] border-2 border-slate-700"
                    placeholder="github url"
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
              name="projectImage"
              render={() => (
                <FormItem className="w-full">
                  <FormControl>
                    {!image && (
                      <UploadDropzone
                        endpoint="projectImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("projectImage", res[0].url);
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
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
