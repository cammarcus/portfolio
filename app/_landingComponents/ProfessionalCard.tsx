import React from 'react';

interface ProfessionalCardProps {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  jobPoints: string[];
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ company, title, startDate, endDate, jobPoints }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <p className="font-bold text-xl mb-2">{company}</p>
        <div className="flex flex-row justify-between mb-4">
          <div>
            <p className="text-gray-700">{title}</p>
          </div>
          <div>
            <p className="text-gray-500">{startDate} - {endDate}</p>
          </div>
        </div>
        <ul className="text-gray-700 list-disc pl-5">
          {jobPoints.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalCard;
