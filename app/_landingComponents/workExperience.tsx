import Image from "next/image";
import { workExperienceData } from "../_utils/helperText";

export default function WorkExperience() {

    function formatDate(date: Date) {
        const options = { year: 'numeric', month: "long" } as const;
        return date.toLocaleDateString(undefined, options);
    }

    const jobsArray = workExperienceData.jobs;
    const startDateString = jobsArray[0].startDate ? formatDate(jobsArray[0].startDate) : 'Present';
    const endDateString = jobsArray[0].endDate ? formatDate(jobsArray[0].endDate) : 'Present';

    return (
        <div className="">
            <div></div>
            <p className="text-2xl">Work Experience</p>
            <div className="p-4">
                {jobsArray.map((job, index) => {
                    let startDateString = job.startDate ? formatDate(job.startDate) : 'Present';
                    const endDateString = job.endDate ? formatDate(job.endDate) : 'Present';
                    return (
                        <div key={index} className="mb-6">
                            <div>
                                <p className="font-bold">{job.company}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p>{job.title}</p>
                                </div>
                                <div>
                                    <p>{startDateString} - {endDateString}</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                {job.jobPoints.map((point, pointIndex) => (
                                    <p key={pointIndex}>{point}</p>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
