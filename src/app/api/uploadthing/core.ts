import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  projectImage: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() => {}),
  blogImage: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
