// components/SkillCard.tsx

import React from 'react';

interface SkillCardProps {
  title: string;
  level: number; // Assuming level is between 0 to 100
  icon?: React.ReactNode; // Optional icon prop
}

const SkillCard: React.FC<SkillCardProps> = ({ title, level, icon }) => {
  const meterWidth = `${level}%`;

  return (
    <div 
      className="bg-white shadow-lg rounded-lg p-6 mb-6 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
      style={{ border: '1px solid #e0e0e0' }}
    >
      {icon && (
        <div 
          className="mb-4 flex justify-center items-center" 
          style={{ 
            backgroundColor: '#e8f5e9', 
            borderRadius: '50%', 
            width: '60px', 
            height: '60px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative mb-4">
        <div
          className="h-full rounded-full"
          style={{ width: meterWidth, transition: 'width 0.6s ease-in-out' }}
        >
          <div 
            className="h-full rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"
            style={{ filter: 'saturate(150%)' }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xs text-white font-semibold">{`${level}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
