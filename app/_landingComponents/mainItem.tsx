import Image from "next/image";
import WorkExperience from "./workExperience";
import Projects from "./projects";
import Certifications from "./certifications";

export default function MainItem() {
    return (
        <div className="border-2 border-neutral-900 lg:w-[988px] w-full rounded-lg p-8 bg-neutral-100" style={{ minHeight: '90vh' }}>
            <div>
                <WorkExperience></WorkExperience>
            </div>
            <div className="mt-10">
                <Projects></Projects>
            </div>
            <div className="mt-10">
                <Certifications></Certifications>
            </div>
        </div>
    );
}
