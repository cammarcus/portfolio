import Image from "next/image";
import Projects from "./projects";
import Certifications from "./certifications";
import ProfessionalExperience from "./professionalExperience";
import CategoryContent from "./categoryContent";

export default function MainItem() {
    return (
        <div className="border-2 border-neutral-900 lg:w-[988px] w-full rounded-lg p-8 bg-neutral-100" style={{ minHeight: '90vh' }}>
            <div>
                <CategoryContent title={'Professional Experience'} content={<ProfessionalExperience></ProfessionalExperience>}></CategoryContent>
            </div>
            <div className="mt-10">
                <CategoryContent title={'Projects'} content={<Projects></Projects>}></CategoryContent>
            </div>
            <div className="mt-10">
                <CategoryContent title={'Certifications'} content={<Certifications></Certifications>}></CategoryContent>
            </div>
        </div>
    );
}
