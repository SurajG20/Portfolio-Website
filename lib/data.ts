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
    description: 'MERN stack website featuring an admin dashboard and utilizing Redux for efficient state management.',
    link: 'https://github.com/SurajG20/Urban-Garage'
  },
  {
    title: 'Bazaar',
    description: 'Full-stack e-commerce platform with JWT authentication, Stripe payments, and Firebase storage.',
    link: 'https://github.com/SurajG20/Ecommerce-Website'
  },
  {
    title: 'Expense Tracker',
    description: 'Tool for tracking incomes and expenses with a user-friendly interface.',
    link: 'https://github.com/SurajG20/Expense-Tracker'
  },
  {
    title: 'Cinemato',
    description: 'Movie app using React and TMDB API for searching movies and TV series.',
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
    company: 'Wise Logics Digital Solutions',
    logo: '/wiselogics.jpg',
    position: 'Full Stack Developer',
    description:
      'I built the Wiselogics LLC logistics platform with Python for data scraping and developed MERN stack web projects to enhance user experience. My work involves product planning, design, and development.',
    years: 'March, 2024 - Present'
  },
  {
    company: 'Livinart Technologies',
    logo: '/Livinart.png',
    position: 'Full Stack Developer',
    description:
      'I worked on projects like Vinayak Finmart, LiumGo, and Jodo Cabs, using HTML, CSS, JavaScript, Node.js, and Socket.IO to build dynamic, user-friendly web applications. I enhanced system efficiency and security by integrating APIs and adding real-time features.',
    years: 'Oct, 2023 - Feb, 2024'
  },
  {
    company: 'Samrat Ashok Technological Institute',
    logo: '/SATI_Vidisha.jpg',
    position: 'Student',
    description:
      'Graduated with a B.Tech in Electrical Engineering from Samrat Ashok Technological Institute, Vidisha, with an impressive aggregate of 8.26.',
    years: '2020 - 2024'
  }
];

export const aboutYou = {
  name: 'Suraj Goswami',
  description:
    "Hi, I'm Suraj Goswami, a Full Stack Developer that is passionate about creating digital experiences that solve real-world challenges. I'm constantly looking to develop and learn new technologies to broaden my skill set.",
  yearsOfExperience: '1 Year',
  location: 'India',
  email: 'Surajgoswami3000@gmail.com'
};

export const logoText = '@SurajG20';

export const marketingHeadlines = {
  mainHeadline: 'Crafting Scalable Web Solutions with Cutting-Edge Technologies.',
  subHeadline: 'Innovative. Efficient. User-Centric.'
};

export const websiteMetadata = {
  title: 'Suraj Goswami | Full Stack Developer',
  description: 'Hey, Random Person here. Welcome to my portflio/blog.'
};
