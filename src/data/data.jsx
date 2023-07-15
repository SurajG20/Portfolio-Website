import Html from '../assets/icons/HTML.svg';
import Css from '../assets/icons/CSS.svg';
import Javascript from '../assets/icons/JavaScript.svg';
import React from '../assets/icons/React-Light.svg';
import Redux from '../assets/icons/Redux.svg';
import Tailwind from '../assets/icons/TailwindCSS-Light.svg';
import Github from '../assets/icons/Github-Light.svg';
import Sass from '../assets/icons/Sass.svg';

export const techStack = [
  {
    name: 'HTML',
    link: Html,
  },
  {
    name: 'CSS',
    link: Css,
  },

  {
    name: 'Redux',
    link: Redux,
  },
  {
    name: 'Sass',
    link: Sass,
  },

  {
    name: 'Javascript',
    link: Javascript,
  },
  {
    name: 'Tailwind CSS',
    link: Tailwind,
  },
  {
    name: 'React',
    link: React,
  },
  {
    name: 'Git',
    link: Github,
  },
];

export const socialLinks = [
  {
    name: 'Github',
    image: (
      <svg
        className="h-8 w-8 text-[#5b75c2] hover:text-yellow-600 transition-colors fill-current"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="GitHubIcon"
      >
        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
      </svg>
    ),
    link: 'https://github.com/SurajG20',
  },
  {
    name: 'LinkedIn',
    image: (
      <svg
        className="h-8 w-8 text-[#5b75c2] hover:text-yellow-600 transition-colors fill-current"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LinkedInIcon"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
      </svg>
    ),
    link: 'https://www.linkedin.com/in/suraj-goswami01',
  },
  {
    name: 'Mail',
    image: (
      <svg
        className="h-8 w-8 text-[#5b75c2] hover:text-yellow-600 transition-colors fill-current"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="MailIcon"
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
      </svg>
    ),
    link: 'mailto:surajgoswami3000@gmail.com',
  },
];
