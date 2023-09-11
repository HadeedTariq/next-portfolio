import { ProjectData } from "@/constants";
import "@/Css/Projects.css";
import Image from "next/image";

function ProjectDetails({ params: { projectName } }) {
  const pro = ProjectData.find(
    (proj) => proj.projectName === projectName.split("%20").join(" ")
  );
  return (
    <>
      <head>
        <title>{pro?.projectName}</title>
      </head>
      {pro && (
        <div className="single-project">
          <Image
            src={pro.projectImage}
            className="single-project-img"
            alt="project"
          />
          <h5>{pro.projectName}</h5>
          <div
            className="details"
            dangerouslySetInnerHTML={{ __html: pro.details }}
          />
        </div>
      )}
    </>
  );
}

export default ProjectDetails;
