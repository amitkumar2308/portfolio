// pages/about.tsx

import React from 'react';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import YouTubeIcon from '@mui/icons-material/YouTube';
import blob from '../images/Component 1.png'; // Replace with the actual path to your image

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Left Side - Photo and Social Media */}
        <div className="md:w-1/3 flex flex-col items-center justify-center bg-gray-100 p-8 md:p-12">
          <div className="relative h-40 w-40 md:h-56 md:w-56 rounded-full overflow-hidden mb-12 border-4 border-blue-200">
            <Image 
              src={blob} 
              alt="Amit Kumar" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full" 
            />
          </div>
          <div className="flex space-x-6 mt-6">
            <a href="https://linkedin.com/in/amitkumar-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://github.com/amitkumar2308" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors duration-300">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://leetcode.com/u/amitk2308" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
              <CodeIcon fontSize="large" />
            </a>
            <a href="https://www.youtube.com/channel/UCJrXTa2LUmG1ht29b19UyUw" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition-colors duration-300">
              <YouTubeIcon fontSize="large" />
            </a>
          </div>
        </div>

        {/* Right Side - Bio and Details */}
        <div className="md:w-2/3 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>

          {/* Bio */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bio</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Aspiring Software Developer with a strong background in frontend and backend technologies. Proficient in developing robust web applications and solutions. Skilled in collaborative team environments with a passion for learning and problem-solving.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend Technologies</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Next.js</li>
                  <li>Bootstrap, Tailwind CSS, Material-UI</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend Technologies</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js (Express.js), Python (Flask), C/C++</li>
                  <li>MongoDB, MySQL, Cloud Databases</li>
                  <li>AWS Cloud, Apache</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">CT University</h3>
              <p className="text-gray-600">B.Tech Computer Science Engineering (Artificial Intelligence)</p>
              <p className="text-gray-600">Punjab, India | 2021-2025</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact</h2>
            <div>
              <p className="text-gray-600">Email: amitkgupta2308@gmail.com</p>
              <p className="text-gray-600">Punjab, India</p>
            </div>
          </div>

          {/* Resume Link */}
          <div>
            <a href='/resume.pdf' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-semibold">View Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
