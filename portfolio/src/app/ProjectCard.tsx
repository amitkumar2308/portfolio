// components/ProjectCard.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GitHub, Language } from '@mui/icons-material';
import Button from '@mui/material/Button'; // Import Material-UI Button

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
          style={{ filter: 'brightness(60%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-r from-white to-gray-50">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Button
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            size="large"
            className="flex items-center justify-center"
          >
            <GitHub fontSize="small" className="mr-2" /> GitHub
          </Button>
          <Button
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            size="large"
            className="flex items-center justify-center"
          >
            <Language fontSize="small" className="mr-2" /> Live Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
