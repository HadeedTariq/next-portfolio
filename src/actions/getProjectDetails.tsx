import { connectToDb } from "@/dbConnection/connectToDb";
import { Project } from "@/models/app.model";
import { ProjectSchema } from "@/validators/project.validator";

export type ProjectsData = ProjectSchema & { _id: string; createdAt: string };

export async function getProjectsDetails(id: string) {
  await connectToDb();
  try {
    const project = await Project.findById(id);
    return JSON.parse(JSON.stringify(project)) as ProjectsData;
  } catch (err) {
    throw new Error("No Project found with this id");
  }
}
