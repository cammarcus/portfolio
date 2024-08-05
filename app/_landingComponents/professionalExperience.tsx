import { professionalExperienceData } from "../_utils/siteData";
import ProfessionalCard from "./ProfessionalCard";

export default function ProfessionalExperience() {
  function formatDate(date: Date) {
    const options = { year: 'numeric', month: "long" } as const;
    return date.toLocaleDateString(undefined, options);
  }

  const jobsArray = professionalExperienceData.jobs;

  return (
    <div className="space-y-6 w-full">
      {jobsArray.map((job, index) => {
        const startDateString = job.startDate ? formatDate(new Date(job.startDate)) : 'Present';
        const endDateString = job.endDate ? formatDate(new Date(job.endDate)) : 'Present';
        return (
          <ProfessionalCard
            key={index}
            company={job.company}
            title={job.title}
            startDate={startDateString}
            endDate={endDateString}
            jobPoints={job.jobPoints}
          />
        );
      })}
    </div>
  );
}
