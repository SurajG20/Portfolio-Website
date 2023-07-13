import React, { useContext } from 'react';
import Card from '../components/Card';
import { ThemeContext } from '../themeProvider';

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-16 pb-12">
        <h2 className="title">Projects</h2>

        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
