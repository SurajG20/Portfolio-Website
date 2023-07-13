import React, { useContext } from 'react';
// import heroBg from '../assets/webdev.svg';
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
              A front-end developer, passionate about web development and eager
              to learn, focused on creating engaging and user-friendly
              interfaces, while striving for scalability.
            </p>
            <h4 className="my-2 text-xl  lg:text-3xl  font-bold text-[#CAAE5F]">
              Get in touch
            </h4>
            <div className="flex md:justify-start ">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                  target="blank"
                >
                  {item.image}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  Resume
                </Link>
              </div>
            </div>
          </div>
          {/* <motion.img
            initial="hidden"
            whileInView={'visible'}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
