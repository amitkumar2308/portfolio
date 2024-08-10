// components/ProjectCard.tsx

import React from 'react';
import Image from 'next/image';
import { GitHub, Language } from '@mui/icons-material'; // Importing Material-UI icons

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 overflow-hidden group">
      <div className="relative h-40 mb-4 overflow-hidden group-hover:shadow-green">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-lg transition duration-300 transform group-hover:scale-105" style={{ filter: 'saturate(130%)' }} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4" style={{ textAlign: 'justify' }}>{description}</p>
      <div className="flex items-center space-x-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center"
        >
          <GitHub fontSize="small" className="mr-1" /> GitHub
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center"
        >
          <Language fontSize="small" className="mr-1" /> Live Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
