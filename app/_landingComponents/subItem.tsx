import Image from "next/image";
import Projects from "./projects";
import Certifications from "./certifications";
import ProfessionalExperience from "./professionalExperience";
import CategoryContent from "./categoryContent";
import Misc from "./misc";

export default function SubItem() {
    return (
        <div className="lg:w-[988px] w-full rounded-lg rounded-xl">
            <div className="mt-10 w-full">
                <CategoryContent title={'Projects'} content={<Projects></Projects>}></CategoryContent>
            </div>
            <div className="mt-10 w-full">
                <CategoryContent title={'Professional Experience'} content={<ProfessionalExperience></ProfessionalExperience>}></CategoryContent>
            </div>
            <div className="mt-10 w-full">
                <CategoryContent title={'Articles'} content={<Misc></Misc>}></CategoryContent>
            </div>
            <div className="mt-10 w-full">
                <CategoryContent title={'Certifications'} content={<Certifications></Certifications>}></CategoryContent>
            </div>
        </div>
    );
}
