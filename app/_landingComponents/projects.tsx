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
                        <div>
                            <p className="font-bold text-subtitle">{project.title}</p>
                            <Link href={project.link} target="_blank">
                                <p className="text-md underline">visit</p>
                            </Link>
                        </div>
                        {/* <p>Image</p> */}
                    </div>
                    <div className="text-description mt-2">
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}
