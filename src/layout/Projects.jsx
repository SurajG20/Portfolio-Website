import React, { useContext } from 'react';
import Card from '../components/Card';
import { ThemeContext } from '../themeProvider';
import { data } from '../data/projects';
const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={
        darkMode
          ? 'bg-white text-black  border-[#ffffff]'
          : 'bg-[#191919] text-white border-[#303030]'
      }
    >
      <div className="max-w-5xl mx-auto sm:px-12 lg:px-16 px-8 pt-16 pb-12">
        <h2 className="title">Projects</h2>

        <div className="flex flex-col gap-12 sm:gap-16">
          {data.map((work) => (
            <Card work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
