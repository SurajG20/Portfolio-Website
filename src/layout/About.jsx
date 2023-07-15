import React, { useContext } from 'react';
import { techStack } from '../data/data';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? 'bg-white' : 'bg-zinc-800 '}>
      <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 px-8 md:mt-0 pt-16 pb-12">
        <div>
          <motion.div>
            <h4 className="title">About Me</h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-black'
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
                  ? 'mt-4 text-xl text-justify text-black'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              Here are a few technologies I've been working with recently:
            </p>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 sm:gap-2  mt-8 ">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
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
                className="py-2 px-5 bg-gray-100 md:m-4 mx-2 mt-6 rounded-lg flex items-center justify-between text-black hover:scale-125 cursor-pointer md:w-60 w-60  "
              >
                <img alt={el.name} src={el.link} className="w-12" />
                <h4 className="text-xl font-semibold ">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
