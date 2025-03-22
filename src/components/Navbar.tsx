import React from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const menuItems = ["Home", "Skills", "Projects", "Resume", "Contact"];

  // Toggle dark mode globally
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Container - Aligned to Top-Left Edge */}
          <div className="flex-shrink-0 pl-0 ml-0">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
              <img
                src="/image/poster.jpg"
                alt="Logo"
                className="w-20 h-16 rounded-lg object-cover border-2 border-white dark:border-gray-800 shadow-md"
              />
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-primary-700 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}

            {/* Dark/Light Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="text-primary-700 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 p-2 rounded-md focus:outline-none transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Dark/Light Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="text-primary-700 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 p-2 rounded-md focus:outline-none transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-700 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden backdrop-blur-sm ${
            isDarkMode ? "bg-white/95" : "bg-gray-900/95" // Opposite background based on dark mode
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isDarkMode ? "text-gray-900" : "text-gray-100" // Opposite text color based on dark mode
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;