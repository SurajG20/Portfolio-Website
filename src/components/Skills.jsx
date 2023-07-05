import React from 'react';

import { data } from './skills/data';

const Skills = () => {
  const SkillData = data; // data is an array of objects
  return (
    <div
      name="skills"
      className=" bg-[#131516] text-gray-300 flex flex-col items-start md:flex-row gap-4 md:gap-16"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div>
          <p className="font-poppins title-font text-3xl font-bold">
            My Top Skills
          </p>
        </div>
        {/* Skills */}
        <div className="my-10 grid grid-cols-3 gap-4">
          {SkillData.map((skill, index) => {
            const { name, Icon } = skill;
            return (
              <div
                key={index}
                className=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 sm:justify-start md:origin-top ] hover:scale-105 duration-300"
              >
                <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                  <Icon className="stroke-current fill-current h-10 w-10 " />
                </div>
                <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
