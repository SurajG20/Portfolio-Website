import React from 'react';
import { data as ProjectData } from '../data/data';

const ProjectCard = () => {
  return (
    <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      {ProjectData.map((list, index) => (
        <div
          className="grid gap-8 mb-16 grid-cols-1 border-b-2 pb-8 lg:grid-cols-2 lg:border-b-0 lg:pb-0  "
          key={index}
        >
          <div className="bg-gray-700 rounded-lg p-2 justify-self-center ">
            <img
              className="rounded-md h-[250px] w-[250px] object-cover md:h-auto md:w-full"
              src={list.image}
              alt={list.name}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:max-w-md md:text-left gap-3">
            <h4 className="text-2xl font-bold">{list.name}</h4>
            <p className="font-normal max-w-xs text-center md:text-left ">
              {list.description}
            </p>
            <div className="flex items-center justify-center gap-4 ">
              <span className="font-medium text-lg ">TechStack:</span>
              <span className="text-sm font-normal">{list.tech_stack}</span>
            </div>
            <div className=" h-[70px] gap-4 flex items-center ">
              <a href={list.github} target="_blank">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Github
                </button>
              </a>
              <a href={list.live} target="_blank">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
