import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../../images/kalpana.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-radial from-primary-100 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <img
            src={profileImage}
            alt="Gade Kalpana's Profile"
            className="w-64 h-64 rounded-lg mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in"
          />
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 mb-4 animate-slide-in">
            Gade Kalpana
          </h1>
          <p className="text-xl sm:text-2xl text-primary-800 dark:text-gray-300 mb-8 animate-fade-in">
            MERN Stack Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in">
            Passionate about creating beautiful and functional web applications
            with modern technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Kalpana12-cmd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gade Kalpana's GitHub profile"
              className="text-primary-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gade-kalpana-90a6b42a8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gade Kalpana's LinkedIn profile"
              className="text-primary-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kalpanag124@gmail.com"
              aria-label="Email Gade Kalpana"
              className="text-primary-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;