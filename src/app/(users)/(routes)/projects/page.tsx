import { getProjects } from "@/actions/getProjects";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const ProjectPage = async () => {
  const projects = await getProjects();
  if (!projects) return;
  return (
    <div className="flex flex-wrap justify-center items-center max-[600px]:pb-[100px]">
      {projects?.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
