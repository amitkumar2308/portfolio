// pages/projects.tsx

import React from 'react';
import ProjectCard from '../app/ProjectCard'; // Adjusted the import path
import announcepro from '../images/announcepro.png';
import connx from '../images/connx.png';
import portfolio from '../images/portfolio.png';
import mystery from '../images/mystery.png';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Annouce Pro',
      description: 'Daily Announcement Management System Software with UI + Backend Tech Stack (Python, Tkinter, Sqllite)',
      imageUrl: announcepro,
      githubLink: 'https://github.com/amitkumar2308/announcepro',
      liveLink: 'https://thejuniorengineer.github.io/announcepro/',
    },
    {
      title: 'ConnX',
      description: 'Connx is a web platform where users can post coding problems and receive solutions from the community Tech Stack (NextJS, ReactJS, TailwindCSS, MongoDB, NodeJS, ExpressJS)',
      imageUrl: connx,
      githubLink: 'https://github.com/amitkumar2308/connxmain',
      liveLink: 'https://connx.vercel.app',
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio showcasing Amit Kumar skills, projects, and experience in a user-friendly and visually appealing format. Built using modern web technologies including React.js, for responsive design and smooth user experience',
      imageUrl: portfolio,
      githubLink: 'https://github.com/amitkumar2308/portfolio-amit',
      liveLink: 'https://amitkumar2308.github.io/portfolio-amit/',
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-10">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
