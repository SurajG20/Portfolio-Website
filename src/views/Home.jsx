import React, { useContext } from 'react';
import Typical from 'react-typical';
import { socialLinks } from '../data/constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import cloud from '../assets/cloudBg.png';
import cloudDark from '../assets/cloudDark.png';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: 'cover' }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: 'cover' }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center md:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? 'block text-black' : ' text-white'}
              >
                Hi, I am Suraj Goswami
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
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
                  ? 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                  : 'mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
              }
            >
              A Wev Developer based in India with a passion for creating Visual
              Appealing websites and User Friendly Interfaces.
            </p>
            <h4 className="mt-2 text-xl lg:text-3xl  font-bold text-[#CAAE5F] md:mt-4">
              Get in touch
            </h4>
            <div className="flex md:justify-start mt-3 md:mt-6">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  className="mr-5 cursor-pointer  hover:scale-125"
                  target="blank"
                >
                  {item.image}
                </a>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 cursor-pointer w-1/3">
              <Link className="px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-2 md:text-xl md:px-8">
                Resume
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
