import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">CEE TEE WORLD</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#world" className="hover:text-yellow-400">World</a>
          <a href="#politics" className="hover:text-yellow-400">Politics</a>
          <a href="#business" className="hover:text-yellow-400">Business</a>
          <a href="#tech" className="hover:text-yellow-400">Tech</a>
          <a href="#sports" className="hover:text-yellow-400">Sports</a>
          <a href="#entertainment" className="hover:text-yellow-400">Entertainment</a>
        </div>

        {/* Search Icon */}
        <div className="hidden md:flex items-center space-x-3">
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer hover:text-yellow-400" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-700">Home</a>
          <a href="#world" className="block px-4 py-2 hover:bg-blue-700">World</a>
          <a href="#politics" className="block px-4 py-2 hover:bg-blue-700">Politics</a>
          <a href="#business" className="block px-4 py-2 hover:bg-blue-700">Business</a>
          <a href="#tech" className="block px-4 py-2 hover:bg-blue-700">Tech</a>
          <a href="#sports" className="block px-4 py-2 hover:bg-blue-700">Sports</a>
          <a href="#entertainment" className="block px-4 py-2 hover:bg-blue-700">Entertainment</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
