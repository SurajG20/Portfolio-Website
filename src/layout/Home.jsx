import React, { useContext } from 'react';
import Typical from 'react-typical';
import { socialLinks } from '../data/data';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import light from '../assets/light.png';
import dark from '../assets/dark.jpg';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${light}')`, backgroundSize: 'cover' }
            : { backgroundImage: `url('${dark}'`, backgroundSize: 'cover' }
        }
      >
        <main
          className="mx-auto max-w-7xl px-8 sm:px-12 md:mt-0 lg:px-16 flex flex-col items-start justify-center h-screen"
          id="/"
        >
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={
                  darkMode ? 'block text-[#050505]' : ' block text-white'
                }
              >
                Hi, I am Suraj Goswami
              </motion.span>
              <span className="block text-[#5b75c2] z-0 lg:inline">
                <Typical
                  steps={[
                    'Front End Developer',
                    3000,
                    'Full Stack Developer',
                    3000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? 'mt-3 text-base text-[#050505]  sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0'
                  : 'mt-3 text-base text-[#fafafa] sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0'
              }
            >
              A Wev Developer based in India with a passion for creating visual
              appealing websites and user friendly interfaces.
            </p>
            <div className="flex mt-3 md:mt-6 ">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="mr-5 cursor-pointer hover:scale-125"
                  target="blank"
                >
                  {item.image}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 cursor-pointer w-1/3 ">
              <a
                href="https://drive.google.com/file/d/1XzE5vO5j3jnGc9At8Wy_-_JQ3O-EFsK5/view?usp=sharing"
                target="blank"
                className="px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#5b75c2] hover:bg-blue-200 md:py-2 md:text-xl md:px-8"
              >
                Resume
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
