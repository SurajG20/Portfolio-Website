const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '', // website url
  title: 'SG.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Suraj Goswami',
  role: 'Full Stack Developer',
  description:
    "I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!",
  resume:
    'https://drive.google.com/file/d/1Qylt4H0Gb6mC8p8TtR0CvYd86mHUcKXu/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/suraj-goswami01',
    github: 'https://github.com/SurajG20',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bazaar',
    description:
      'A Full Stack ecommerce website with complete authentication and Persistance.',
    stack: ['React', 'TailwindCSS', 'Node.js', 'ExpressJS', 'MongoDB', 'Jwt'],
    sourceCode: 'https://github.com/SurajG20/Ecommerce-Website',
    livePreview: 'https://ecommerce-website-surajg20.vercel.app/',
  },
  {
    name: 'Expense Tracker',
    description:
      'An Expense Tracker which allows user to keep track of their incomes and expenses.',
    stack: [
      'React',
      'Styled Components',
      'TypeScript',
      'Node.js',
      'ExpressJS',
      'MongoDB',
    ],
    sourceCode: 'https://github.com/SurajG20/Expense-Tracker',
    livePreview: 'https://github.com',
  },
  {
    name: 'Cinemato',
    description:
      'React Movie App built using that allows searching movies and tv-series based on tmdb api.',
    stack: ['React', 'Sass', 'TMDB API'],
    sourceCode: 'https://github.com/SurajG20/Cinemato',
    livePreview: 'https://cinemato-two.vercel.app/',
  },
  {
    name: 'Weather App',
    description:
      'Weather app to know about weather in your city. It uses GeoApi for city recommadation and OpenWeather Api.',
    stack: ['React', 'CSS', 'OpenWeatherMap API'],
    sourceCode: 'https://github.com/SurajG20/Weather-App',
    livePreview: 'https://surajg20.github.io/Weather-App/',
  },
  {
    name: 'Todo App',
    description:
      'A basic crud app which i built to learn about React and its ecosystem.',
    stack: ['React', 'CSS'],
    sourceCode: 'https://github.com/SurajG20/To-Do-App',
    livePreview: 'https://surajg20.github.io/To-Do-App/',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux-Toolkit',
  'TailwindCSS',
  'Styled Components',
  'Git',
  'Node.js',
  'ExpressJS',
  'MongoDB',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'surajgoswami@gmail.com',
};

export { header, about, projects, skills, contact };
