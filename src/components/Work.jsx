import React from 'react';
import { data } from '../data/data';

const Work = () => {
  const project = data;

  return (
    <div
      name="work"
      className="px-12 w-full md:h-screen bg-[#131516] text-[#A6ADBB] pt-[100px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300">Work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-gray-900 group container rounded-[15px]
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-300 ">
                <span className="text-xl font bold text-gray-300 tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-3 py-2 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-3 py-2 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
