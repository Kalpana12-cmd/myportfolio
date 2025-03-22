import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'MERN Stack Technology Internship',
      company: 'Biztron Softech',
      period: 'June 2024 – June 2024',
      description: ' Gained hands-on experience implementing projects using MERN stack.',
    },
    {
      title: 'Blue Prism Internship',
      company: 'AICTE',
      period: 'June 2024 – September 2024',
      description: ' Gained hands-on experience in designing, developing, and deploying automation workflows using Blue Prism',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Lakki Reddy Bali Reddy College of Engineering',
      period: '2022-2026',
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior College',
      period: '2022',
    },
  ];

  // Direct download link for your resume
  const resumeFileUrl = 'https://drive.google.com/uc?export=download&id=12dimW_zoqkwVGwuh0dg3AmkAXOc_9ip7';

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            Resume
          </h2>
          <p className="mt-4 text-lg text-primary-800 dark:text-gray-300">My professional journey</p>
          <a href={resumeFileUrl}
             download="Resume.pdf" // This ensures the file is downloaded with the name "Resume.pdf"
             className="inline-flex items-center px-6 py-3 mt-8 rounded-lg text-white
                      bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 
                      hover:to-accent-600 transform hover:scale-105 transition-all duration-300">
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary-600 dark:text-gray-300 mr-2" />
              <h3 className="text-2xl font-bold text-primary-900 dark:text-gray-100">Internships</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.title} 
                     className="border-l-2 border-primary-200 dark:border-gray-700 pl-4 hover:border-accent-400 
                              transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-primary-900 dark:text-gray-100">{exp.title}</h4>
                  <p className="text-accent-600 dark:text-accent-400">{exp.company}</p>
                  <p className="text-primary-600 dark:text-gray-400 text-sm">{exp.period}</p>
                  <p className="mt-2 text-primary-700 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary-600 dark:text-gray-300 mr-2" />
              <h3 className="text-2xl font-bold text-primary-900 dark:text-gray-100">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} 
                     className="border-l-2 border-primary-200 dark:border-gray-700 pl-4 hover:border-accent-400 
                              transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-primary-900 dark:text-gray-100">{edu.degree}</h4>
                  <p className="text-accent-600 dark:text-accent-400">{edu.institution}</p>
                  <p className="text-primary-600 dark:text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;