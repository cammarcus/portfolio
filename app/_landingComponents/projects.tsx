import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../_utils/siteData";

export default function Projects() {

    const projects = projectsData.projects;
    return (
        <div className="space-y-6">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <Link href={project.link} target="_blank">
                            <p className="font-bold text-subtitle underline">{project.title}</p>
                        </Link>
                        {/* <p>Image</p> */}
                    </div>
                    <div className="text-description">
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}
