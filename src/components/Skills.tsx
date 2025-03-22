import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    //{ name: 'TypeScript', image: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg' },
    { name: 'Tailwind CSS', image: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    //{ name: 'Next.js', image: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
    { name: 'Node.js', image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Express', image: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
    //{ name: 'Python', image: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
   // { name: 'Django', image: 'https://cdn.worldvectorlogo.com/logos/django.svg' },
    //{ name: 'PostgreSQL', image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
    { name: 'MongoDB', image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    //{ name: 'Redis', image: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
    { name: 'MySQL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHANf_kx1BhpVPouuRcquqkrEgv_IdVs0coQ&s' },
    { name: 'JavaScript', image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    { name: 'Java', image: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
    //{ name: 'C++', image: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            Skills
          </h2>
          <p className="mt-4 text-lg text-primary-800 dark:text-gray-300">My technical expertise and capabilities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-gray-500"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm text-primary-700 dark:text-gray-300 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;