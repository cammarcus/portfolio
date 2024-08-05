import ProjectCard from "./ProjectCard";
import { projectsData } from "../_utils/siteData";

export default function Projects() {
    const projects = projectsData.projects;

    return (
        <div className="space-y-6">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    skills={project.skills}
                />
            ))}
        </div>
    );
}
