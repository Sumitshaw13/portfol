import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
      
      {/* Footer Name */}
      <h1 className="text-2xl font-bold text-center md:text-left mb-4 md:mb-0">Sumit Shaw</h1>
      
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
