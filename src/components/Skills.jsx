import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Linux from '../assets/linux.png';
// import Redux from '../assets/Redux.png';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiLinux, SiRedux } from 'react-icons/si';

const Skills = () => {
  return (
    <div
      name="skills"
      className=" bg-[#131516] text-gray-300 flex flex-col items-start md:flex-row gap-4 md:gap-16"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-poppins title-font text-3xl font-bold">
            My Top Skills
          </p>
        </div>
        <div className="my-10 grid grid-cols-3 gap-4">
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <FaHtml5 className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              HTML
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <FaCss3Alt className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              CSS
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <FaJsSquare className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              JavaScript
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <FaReact className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              React
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <FaGithub className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              Github
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <SiTailwindcss className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              TailWindCss
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <SiRedux className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              Redux
            </p>
          </div>
          <div class=" group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top">
            <div class="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <SiLinux className="stroke-current fill-current h-10 w-10 " />
            </div>
            <p class="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              Linux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />

            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Linux} alt="HTML icon" />
            <p className="my-4">LINUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="HTML icon" />
            <p className="my-4">REDUX</p>
          </div>
        </div> */
}
