import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image?: string;
  title: string;
  description: string;
  link?: string;
  skills: string[];
}

const ProjectCard: React.FC<CardProps> = ({ image, title, description, link, skills }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-shrink-0">
        {link ? (
          <Link href={link} target="_blank">
            <Image 
              src={image || "/default-image.jpg"} 
              alt={title} 
              width={150} 
              height={300} 
              className="w-40 h-40 object-cover rounded-lg cursor-pointer"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Link>
        ) : (
          <Image 
            src={image || "/default-image.jpg"} 
            alt={title} 
            width={150} 
            height={300} 
            className="w-40 h-40 object-cover rounded-lg"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        )}
      </div>
      <div className="flex-1">
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
        {link && (
          <Link href={link} target="_blank">
            <p className="text-blue-500 underline hover:text-blue-700 transition-colors">Visit Project</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
