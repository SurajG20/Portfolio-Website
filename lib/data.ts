import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export const skills = [
  {
    icon: SiTypescript,
    text: 'TypeScript'
  },
  {
    icon: SiJavascript,
    text: 'JavaScript'
  },
  {
    icon: SiReact,
    text: 'React'
  },
  {
    icon: SiNextdotjs,
    text: 'Next'
  },
  {
    icon: SiTailwindcss,
    text: 'Tailwind'
  },
  {
    icon: SiRedux,
    text: 'Redux'
  },
  // {
  //   icon: SiFlutter,
  //   text: "Flutter",
  // },
  {
    icon: SiHtml5,
    text: 'HTML5'
  },
  {
    icon: SiCss3,
    text: 'CSS3'
  },
  {
    icon: SiNodedotjs,
    text: 'Node'
  },
  {
    icon: SiExpress,
    text: 'Express'
  },
  {
    icon: SiPython,
    text: 'Python'
  },
  {
    icon: BiLogoPostgresql,
    text: 'PostgreSQL'
  },
  {
    icon: SiMongodb,
    text: 'MongoDB'
  },
  {
    icon: SiAmazonaws,
    text: 'AWS'
  },
  // {
  //   icon: SiHeroku,
  //   text: "Heroku",
  // },
  // {
  //   icon: SiSupabase,
  //   text: "Supabase",
  // },
  {
    icon: SiFirebase,
    text: 'Firebase'
  },
  {
    icon: SiGit,
    text: 'Git'
  },
  // {
  //   icon: SiDocker,
  //   text: "Docker",
  // },
  {
    icon: SiPrisma,
    text: 'Prisma'
  },
  {
    icon: SiBootstrap,
    text: 'Bootstrap'
  },
  {
    icon: SiMui,
    text: 'MUI'
  }
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Urban Garage',
    description: 'Full-stack automotive marketplace built with the MERN stack featuring an intuitive admin dashboard, Redux state management, and real-time inventory updates. Includes user authentication, vehicle listings, and booking management.',
    link: 'https://github.com/SurajG20/Urban-Garage'
  },
  {
    title: 'Bazaar',
    description: 'Modern e-commerce platform built with React, Node.js and MongoDB. Features include secure JWT authentication, Stripe payment integration, shopping cart functionality, order management, and cloud-based image storage with Firebase.',
    link: 'https://github.com/SurajG20/Ecommerce-Website'
  },
  {
    title: 'Expense Tracker',
    description: 'React-based personal finance application with MongoDB backend for tracking income and expenses. Features include interactive charts, budget categories, transaction history, and data visualization to help users manage their finances effectively.',
    link: 'https://github.com/SurajG20/Expense-Tracker'
  },
  {
    title: 'Cinemato',
    description: 'Modern movie discovery platform built with React that integrates with the TMDB API. Features include advanced search functionality, movie/TV show details, ratings, reviews, and responsive design for optimal viewing across devices.',
    link: 'https://cinemato-two.vercel.app/'
  }
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: 'Wisewaytec',
    logo: '/wisewaytec.jpg', 
    position: 'Full Stack Developer',
    description:
      'Led development of blockchain-based trading platforms and a high-traffic Telegram mini app serving 10k+ users. Built responsive web interfaces with React following best practices and optimized performance. Implemented backend services using Node.js with SQL databases for efficient data management and scalability.',
    years: 'September, 2024 - Present'
  },
  {
    company: 'Wise Logics Digital Solutions',
    logo: '/wiselogics.jpg',
    position: 'Full Stack Developer',
    description: 
      'Developed and maintained multiple client projects using the MERN stack. Implemented secure user authentication, real-time notifications, and payment integrations. Collaborated with UI/UX team to create intuitive user interfaces and improve overall user experience.',
    years: 'March, 2024  - August, 2024'
  },
  {
    company: 'Livinart Technologies',
    logo: '/Livinart.png',
    position: 'Full Stack Developer Intern',
    description:
      'Built and deployed full-stack applications for clients in transportation and fintech sectors. Implemented real-time tracking features using Socket.IO, integrated payment gateways, and developed responsive UI components. Reduced API response times by 30% through optimization.',
    years: 'October, 2023 - February, 2024'
  },
  {
    company: 'Samrat Ashok Technological Institute',
    logo: '/SATI_Vidisha.jpg',
    position: 'B.Tech Student',
    description:
      'Completed B.Tech in Electrical Engineering with 8.26 CGPA. Led technical team in college hackathons, developed IoT-based projects, and participated in coding competitions. Published research paper on smart energy management systems.',
    years: '2020 - 2024'
  }
];

export const aboutYou = {
  name: 'Suraj Goswami',
  description:
    "Hi, I'm Suraj Goswami, a passionate Full Stack Developer with expertise in building scalable web applications. I specialize in creating innovative digital solutions that address real-world challenges using modern technologies like React, Node.js, and cloud platforms. With a strong foundation in both frontend and backend development, I'm dedicated to crafting efficient, user-centric applications while continuously expanding my technical skills.",
  yearsOfExperience: '1+ Year',
  location: 'India',
  email: 'surajgoswami3000@gmail.com',
  github: 'https://github.com/SurajG20',
  linkedin: 'https://linkedin.com/in/suraj-goswami'
};

export const logoText = '@SurajG20';

export const marketingHeadlines = {
  mainHeadline: 'Building Modern Web Solutions with Passion and Precision',
  subHeadline: 'Full Stack Developer Specializing in Scalable & User-Focused Applications'
};

export const websiteMetadata = {
  title: 'Suraj Goswami | Full Stack Developer | Portfolio',
  description: 'Welcome to my portfolio. I build scalable web applications using modern technologies like React, Node.js, and more.'
};
