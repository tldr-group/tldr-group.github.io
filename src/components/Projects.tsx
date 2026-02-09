import { Project, ProjectSchema, gracefulParse } from "../types";
import projectJSON from "../content/text/projects.json";

const ProjectComponent = ({ projectData }: { projectData: Project }) => {
  const { title, desc, outLinks, imagePath } = projectData;

  return (
    <div className="outlined-content project-card">
      <div>
        <img src={imagePath} alt={`${title}`} style={{ width: "300px", height: "200px", objectFit: "scale-down" }} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      {/* marginTop: auto to push this to bottom of flex layout */}
      <div style={{ flex: "row", marginTop: "auto" }}>
        {outLinks.map((link) => (
          <a key={link.link} className="link-tag" href={link.link} target="_blank" rel="noopener noreferrer">
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects: Project[] = gracefulParse(ProjectSchema, projectJSON);

  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectComponent key={i} projectData={project} />
      ))}
    </div>
  );
};
