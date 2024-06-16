// pages/skills.tsx

import React from 'react';
import SkillCard from './SkillCard';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { Grid } from '@mui/material'; // Using MUI Grid for layout

const SkillsPage: React.FC = () => {
  // Define your skills with respective proficiency levels and icons
  const skills = [
    { title: 'JavaScript', level: 85, icon: <FaJs size={24} /> },
    { title: 'React.js', level: 90, icon: <FaReact size={24} /> },
    { title: 'Node.js', level: 80, icon: <FaNodeJs size={24} /> },
    { title: 'Node.js', level: 80, icon: <FaNodeJs size={24} /> },
    { title: 'Node.js', level: 80, icon: <FaNodeJs size={24} /> },
    { title: 'HTML/CSS', level: 85, icon: <FaHtml5 size={24} />},
    // Add more skills as needed
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills</h1>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <SkillCard title={skill.title} level={skill.level} icon={skill.icon} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SkillsPage;
