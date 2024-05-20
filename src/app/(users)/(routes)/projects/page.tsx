import { getProjects } from "@/actions/getProjects";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const ProjectPage = async () => {
  const projects = await getProjects();
  if (!projects) return;
  return (
    <div className="grid grid-cols-3 items-center gap-3  max-[600px]:mt-[23px] max-[830px]:grid-cols-2 mb-20 max-[530px]:grid-cols-1">
      {projects?.reverse().map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
