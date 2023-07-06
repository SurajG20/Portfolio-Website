import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col items-start md:flex-row gap-4 md:gap-16 bg-[#1E2749]"
    >
      <div className="md:basis-1/4 md:text-right">
        <p className="text-3xl font-bold text-[#CAAE5F]">About Me</p>
      </div>
      <div className="md:basis-3/4">
        <div className="flex flex-col gap-4">
          <h4 className="my-0 lg:text-lg text-base font-light">
            Hello, I'm Suraj Goswami, a front-end developer based in Bhopal,
            INDIA. I specialize in React and have a strong passion for creating
            visually appealing web interfaces. I'm dedicated to continuous
            learning and contributing to impactful digital experiences.
          </h4>
          <h4 className="my-0 lg:text-lg text-base font-light">
            I am currently a student pursuing a Bachelor's degree for Electrical
            Engineering from SATI Vidisha. I started coding during the lockdown
            and quickly developed a passion for web development. I have a great
            work ethic, as well as excellent communication. I can adapt to and
            thrive in many different work environments, and am confident that
            I'll be a valuable asset to any team I'm in.
          </h4>

          <h4
            className="my-0 font-bold lg:text-lg text-base w-fit px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#CAAE5F] hover:shadow-[inset_0px_-30px_0px_0px_#CAAE5F] 
          hover:text-gray-800 hover:prose-invert cursor-pointer duration-300"
          >
            <a href="/" aria-label="Suraj's Resume">
              View My Resume (PDF)
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
