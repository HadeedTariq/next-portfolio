import { ProjectsData } from "@/actions/getProjects";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Github, RadioTower } from "lucide-react";
import Link from "next/link";

interface ProjectCradProps {
  project: ProjectsData;
}

const ProjectCard = ({ project }: ProjectCradProps) => {
  return (
    <div className="rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 cursor-pointer flex flex-col items-center gap-2 bg-indigo-800 pb-2 m-2">
      <Image
        src={project.projectImage}
        alt="project"
        width={300}
        height={300}
      />

      <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
        {project.projectTitle}
      </h3>
      <div className="flex items-center gap-8">
        <Link href={project.projectGithub} target="_blank">
          <Button className="flex items-center gap-2">
            <Github />
            <span>Github</span>
          </Button>
        </Link>
        <Link href={project.projectLive} target="_blank">
          <Button className="flex items-center gap-2" variant={"purp"}>
            <RadioTower />
            <span>Live</span>
          </Button>
        </Link>
      </div>
      <Link href={`/projects/${project._id}`} className="w-[90%]">
        <Button variant={"pink"} className="w-full">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
