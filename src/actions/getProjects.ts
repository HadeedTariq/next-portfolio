import { connectToDb } from "@/dbConnection/connectToDb";
import { Project } from "@/models/app.model";
import { ProjectSchema } from "@/validators/project.validator";

export type ProjectsData = ProjectSchema & { _id: string; createdAt: string };

export async function getProjects() {
  await connectToDb();
  try {
    const projects = await Project.find({});
    return JSON.parse(JSON.stringify(projects)) as ProjectsData[];
  } catch (err) {
    throw new Error("No Project found");
  }
}
