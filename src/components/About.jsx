import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#131516] text-[#A6ADBB] px-12"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline text-gray-300">About Me</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4">
          <div className="sm:text-right text-4xl font-semibold ">
            <p className="text-start ">
              Hello! I'm Suraj Goswami, a passionate Front end developer based
              in Bhopal, India.
            </p>
          </div>
          <div>
            <p className="text-2xl text-zinc-400  text-justify">
              I'm driven by creativity, innovation, and problem-solving. I've
              developed a strong foundation in Front end development, fueled by
              my fascination with technology since a young age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
