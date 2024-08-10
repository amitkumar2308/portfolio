// pages/projects.tsx

import React from 'react';
import ProjectCard from '../app/ProjectCard';
import announcepro from '../images/announcepro.png';
import connx from '../images/connx.png';
import portfolio from '../images/portfolio.png';
import mystery from '../images/mystery.png';

const ProjectsPage: React.FC = () => {
  // Define your projects with respective details
  const projects = [
    {
      title: 'Annouce Pro',
      description: 'Daily Announcement Management System Software with UI + Backend Tech Stack (Python, Tkinter, Sqllite)',
      imageUrl: announcepro, // Replace with actual image path
      githubLink: 'https://github.com/amitkumar2308/announcepro',
      liveLink: 'https://thejuniorengineer.github.io/announcepro/',
    },
    {
      title: 'ConnX',
      description: 'Connx is a web platform where users can post coding problems and receive solutions from the community Tech Stack (NextJS, ReactJS, TailwindCSS, MongoDB, NodeJS, ExpressJS)',
      imageUrl: connx, // Replace with actual image path
      githubLink: 'https://github.com/amitkumar2308/connxmain',
      liveLink: 'https://connx.vercel.app',
    },
    // Add more projects as needed
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio showcasing Amit Kumar skills, projects, and experience in a user-friendly and visually appealing format. Built using modern web technologies including React.js, for responsive design and smooth user experience',
      imageUrl: portfolio, // Replace with actual image path
      githubLink: 'https://github.com/amitkumar2308/connxmain',
      liveLink: 'https://amitkumar2308.github.io/portfolio-amit/',
    },
    {
      title: 'Project',
      description: 'Under Development',
      imageUrl: mystery,
      githubLink: 'https://github.com/amitkumar2308/connxmain',
      liveLink: 'https://amitkumar2308.github.io/portfolio-amit/',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
