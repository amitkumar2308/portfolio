"use client"; // This directive must be at the top of the file

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail } from '@mui/icons-material'; // Import Gmail icon from Material-UI Icons
import SkillsPage from './Skills';
import ProjectsPage from './projects';
import herophoto from '../images/Amitphoto.png';

const titles = ["Software Developer...", "UI/UX Designer...", "ML Engineer..."];

const LandingPage: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleContactMe = () => {
    window.open('mailto:your_email@gmail.com'); // Replace with your Gmail address
  };

  return (
    <div className="relative">
      {/* Header for logo */}
      <header className="absolute top-5 left-5 w-full p-5 bg-transparent z-20">
        <div className="max-w-6xl mx-auto flex justify-start">
          <h1 className="text-sm font-bold text-green-500 hidden sm:block">PORTFOLIO</h1>
        </div>
      </header>

      {/* Green blob background */}
      <div className="min-h-screen bg-blue-50 flex items-center justify-center relative" style={{ filter: 'saturate(120%)' }}>
        {/* Absolute positioning for the green blob */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-1200 h-400 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>
        
        {/* Content container */}
        <div className="flex flex-col md:flex-row items-center p-5 max-w-6xl mx-auto z-10">
          <div className="flex-1 mb-5 md:mb-0 md:mr-10 text-center md:text-left">
            <h1 className="text-6xl font-bold text-green-500 mb-4 animate-fade-in" style={{ filter: 'saturate(140%)' }}>
              Hey, I am Amit Kumar
            </h1>
            <p className="text-3xl font-bold text-gray-600 mb-4 animate-fade-in">
              {titles[currentTitle]}
            </p>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Passionate about building innovative solutions and exploring new technologies. Let&apos;s dive into the world of software development together.
            </p>
            <a
              href="mailto:your_email@gmail.com"
              className="text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3 transition duration-300 items-center"
              style={{ filter: 'saturate(190%)', textDecoration: 'none' }}
            >
              <Mail fontSize="small" className="mr-2" /> Contact Me!
            </a>
          </div>
          
          {/* Relative positioning for the image */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <Image 
                src={herophoto}
                alt="Landing Image" 
                width={3000} // Adjust width as needed
                height={3000} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Projects Sections */}
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
};

export default LandingPage;
