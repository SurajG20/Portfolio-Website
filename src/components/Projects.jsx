import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div
      name="projects"
      className=" bg-[#1E2749] text-gray-300 flex flex-col items-start md:flex-row gap-4 md:gap-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="mb-8">
          <p className="text-3xl font-bold text-[#CAAE5F] ">Projects</p>
        </div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
