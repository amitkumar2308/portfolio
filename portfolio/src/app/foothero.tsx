// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://linkedin.com/in/amitkumar-profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/amitkumar2308" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 mx-2">
            GitHub
          </a>
          <a href="https://leetcode.com/u/amitk2308" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600 mx-2">
            LeetCode
          </a>
          <a href="https://www.youtube.com/channel/UCJrXTa2LUmG1ht29b19UyUw" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-600 mx-2">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
