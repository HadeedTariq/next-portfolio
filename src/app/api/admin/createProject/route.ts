import { connectToDb } from "@/dbConnection/connectToDb";
import { Project } from "@/models/app.model";
import { ProjectSchema, projectSchema } from "@/validators/project.validator";
import { NextRequest, NextResponse } from "next/server";

type ProjectSeverSchema = ProjectSchema & { adminPassword?: string };

export async function POST(req: NextRequest) {
  await connectToDb();
  const project: ProjectSeverSchema = await req.json();
  if (
    !project.adminPassword ||
    project.adminPassword !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD!
  ) {
    return NextResponse.json(
      { message: "Incorrect AdminPassword" },
      { status: 404 }
    );
  }
  delete project.adminPassword;
  try {
    const validator = projectSchema.parse(project);
    const hasEmptyFields = Object.values(validator).some(
      (value) => value === undefined || value === ""
    );
    if (hasEmptyFields) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 404 }
      );
    }
    const createdProject = await Project.create(project);
    return NextResponse.json(
      { message: "Project Created", createdProject },
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
