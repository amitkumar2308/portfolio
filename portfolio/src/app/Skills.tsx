// pages/skills.tsx

import React from 'react';
import SkillCard from './SkillCard';
import { FaJs, FaReact, FaNodeJs, FaHtml5,FaDatabase, FaPray, FaCode } from 'react-icons/fa';
import { Grid, Typography, Box } from '@mui/material';

const SkillsPage: React.FC = () => {
  // Define your skills with respective proficiency levels and icons
  const skills = [
    { title: 'JavaScript', level: 85, icon: <FaJs size={40} /> },
    { title: 'React.js', level: 90, icon: <FaReact size={40} /> },
    { title: 'Node.js', level: 80, icon: <FaNodeJs size={40} /> },
    { title: 'HTML/CSS', level: 85, icon: <FaHtml5 size={40} /> },
    { title: 'C++', level: 65, icon: <FaCode size={40} /> },  // Updated with image URL
    { title: 'MongoDB', level: 75, icon: <FaDatabase size={40}/> }, // Updated with image URL
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-8">
        <Typography variant="h3" component="h1" className="text-center text-gray-900 mb-12 font-bold">
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillCard 
                title={skill.title} 
                level={skill.level} 
                icon={skill.icon}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SkillsPage;
