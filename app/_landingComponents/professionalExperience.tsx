import Image from "next/image";
import { professionalExperienceData } from "../_utils/siteData";

export default function ProfessionalExperience() {

    function formatDate(date: Date) {
        const options = { year: 'numeric', month: "long" } as const;
        return date.toLocaleDateString(undefined, options);
    }

    const jobsArray = professionalExperienceData.jobs;

    return (
        <div className="space-y-6">
            {jobsArray.map((job, index) => {
                let startDateString = job.startDate ? formatDate(job.startDate) : 'Present';
                const endDateString = job.endDate ? formatDate(job.endDate) : 'Present';
                return (
                    <div key={index}>
                        <div>
                            <p className="font-bold text-subtitle">{job.company}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p>{job.title}</p>
                            </div>
                            <div>
                                <p>{startDateString} - {endDateString}</p>
                            </div>
                        </div>
                        <div className="mt-2 text-description">
                            {job.jobPoints.map((point, pointIndex) => (
                                <p key={pointIndex}>{point}</p>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );

}
