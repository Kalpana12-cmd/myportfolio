import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Todo List',
      description: 'Developed a To-Do List web application to help users manage daily tasks efficiently.',
      image: 'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=1440',
      technologies: ['Html', 'Css', 'Javascript'],
      github: 'https://github.com/Kalpana12-cmd/Todo-List.git',
      demo: 'http://todo-list-site-12.netlify.app',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'Developed an interactive Rock Paper Scissors game to simulate the classic hand game.',
      image: 'https://www.wikihow.com/images/thumb/e/ec/Play-Rock%2C-Paper%2C-Scissors-Step-4-Version-5.jpg/550px-nowatermark-Play-Rock%2C-Paper%2C-Scissors-Step-4-Version-5.jpg',
      technologies: ['Html',  'Tailwind CSS','Javascript'],
      github: 'https://github.com/Kalpana12-cmd/Rock-Paper-Scissors.git',
      demo: 'http://rock-paper-scissors-game-site-12.netlify.app',
    },
    {
      title: 'Amazon',
      description: 'Developed a amazon website to help users manage their shopping.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlHgTjBKOBGeYAo5Hp69mE6hUZgdiqhz23jXQjAAOYmlXuQSV7oOAxheTcAaJHAX4hmw&usqp=CAU',
      technologies: ['React', 'Html', 'Tailwind css'],
      github: 'https://github.com/Kalpana12-cmd/Rock-Paper-Scissors.git',
      demo: 'http://amazon-wedsite.netlify.app',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            Projects
          </h2>
          <p className="mt-4 text-lg text-primary-800 dark:text-gray-300">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} 
                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                          transition-all duration-300 transform hover:scale-105 animate-scale-in
                          border border-primary-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-gray-500">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 dark:text-gray-100 mb-2">{project.title}</h3>
                <p className="text-primary-700 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} 
                          className="px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-gray-300 rounded-full text-sm
                                   border border-primary-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} 
                     className="flex items-center text-primary-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href={project.demo} 
                     className="flex items-center text-primary-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors">
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;