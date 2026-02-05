import * as z from "zod/mini";

import { Project, ProjectSchema } from "../types";
import projectJSON from "../../public/content/updates/projects.json";

const ProjectComponent = ({ projectData }: { projectData: Project }) => {
  const { title, desc, outLinks, imagePath } = projectData;

  return (
    <div>
      <div>
        <img src={imagePath} alt={`${title}`} style={{ width: "300px", height: "300px", objectFit: "scale-down" }} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ display: "flex", flex: "row" }}>
        {outLinks.map((link) => (
          <a href={link.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects: Project[] = z.array(ProjectSchema).parse(projectJSON);

  return (
    <div>
      {projects.map((project) => (
        <ProjectComponent key={project.title} projectData={project} />
      ))}
    </div>
  );
};
