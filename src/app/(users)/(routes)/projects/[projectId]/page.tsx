import { getProjectsDetails } from "@/actions/getProjectDetails";
import Image from "next/image";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

interface ProjectDetailsProps {
  params: { projectId: string };
}
const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { projectId } = params;
  const project = await getProjectsDetails(projectId as string);
  return (
    <div className="flex flex-col max-[600px]:items-start gap-3 min-h-[600px]:p-2 w-full items-center">
      <Image src={project.projectImage} alt="image" width={700} height={700} />
      <div
        className="details"
        dangerouslySetInnerHTML={{
          __html: DOMPurify(new JSDOM("<!DOCTYPE html>").window).sanitize(
            project.projectDescription
          ),
        }}
      />
    </div>
  );
};

export default ProjectDetails;
