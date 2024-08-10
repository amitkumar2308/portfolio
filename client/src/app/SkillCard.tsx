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
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 overflow-hidden">
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full"
          style={{ width: meterWidth, transition: 'width 0.3s' }}
        >
          <div className="bg-green-400 h-full rounded-full glow-effect" style={{ filter: 'saturate(150%)' }}></div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{`${level}%`}</p>
    </div>
  );
};

export default SkillCard;
