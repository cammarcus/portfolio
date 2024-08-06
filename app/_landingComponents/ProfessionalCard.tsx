import React from 'react';
import Image from 'next/image';

interface ProfessionalCardProps {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    jobPoints: string[];
    image: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ company, title, startDate, endDate, jobPoints, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0 flex items-center justify-center h-40">
                <Image
                    src={image || "/default-image.jpg"}
                    alt={title}
                    width={150}
                    height={300}
                    className="object-contain"
                    style={{ objectFit: 'contain', objectPosition: 'top' }}
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="font-bold text-xl mb-2">{company}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">{startDate} - {endDate}</p>
                    </div>
                </div>
                <div className="flex flex-row mb-4">
                    <div>
                        <p className="text-gray-700">{title}</p>
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
