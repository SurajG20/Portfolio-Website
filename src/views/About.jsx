import React, { useContext } from 'react';
import { techStack } from '../data/constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? 'bg-white' : 'bg-gray-900'}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-16 pb-12">
        <h2
          className={
            darkMode
              ? 'text-5xl font-bold px-4 md:px-0 text-center'
              : 'text-5xl font-bold px-4 md:px-0 text-center text-white'
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="title">About Me</h4>

            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-gray-500'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              Hello, I'm Suraj Goswami, a front-end developer based in India. I
              specialize in React and have a strong passion for creating
              visually appealing web interfaces. I passionately combine good
              design, technology, and innovation in all my projects, which I
              like to accompany from the first idea to release. Currently, I'm
              trying my hand on the backend development.
            </p>
          </motion.div>
          <motion.div>
            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-gray-500'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              Here are a few technologies I've been working with recently:
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap sm:grid sm:grid-cols-3 sm:gap-2 justify-between mt-4 ">
            {techStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center text-black hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
