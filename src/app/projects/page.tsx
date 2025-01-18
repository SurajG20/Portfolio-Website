import Project from '@/components/Project/Project'
import React from 'react'

const projects = [
  {
    title: 'Urban Garage',
    url: 'https://urbangarage.com',
    subtitle: 'Full-stack automotive marketplace',
    description:
      'Built with the MERN stack featuring an admin dashboard, Redux state management, and real-time inventory updates.',
    achievements: [
      'Launched within 6 months with over 10,000 active users',
      'Reduced inventory update time by 50% with real-time updates',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
  },
  {
    title: 'Bazaar',
    url: 'https://bazaar.com',
    subtitle: 'Modern e-commerce platform',
    description:
      'Built with React, Node.js and MongoDB. Features secure JWT authentication, Stripe payment integration, and shopping cart functionality.',
    achievements: [
      'Processed over $1M in transactions within the first year',
      'Achieved 99.9% uptime with robust backend architecture',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
  },
  {
    title: 'Expense Tracker',
    url: 'https://expensetracker.com',
    subtitle: 'React-based personal finance application',
    description:
      'With MongoDB backend for tracking income and expenses. Features interactive charts, budget categories, and transaction history.',
    achievements: [
      'Helped users track over $500K in expenses',
      'Implemented advanced data visualization with interactive charts',
    ],
    technologies: ['React', 'MongoDB', 'Chart.js'],
  },
  {
    title: 'Cinemato',
    url: 'https://cinemato.com',
    subtitle: 'Modern movie discovery platform',
    description:
      'Built with React that integrates with the TMDB API. Features advanced search functionality, movie/TV show details, ratings, and reviews.',
    achievements: [
      'Integrated with TMDB API for real-time data',
      'Reached 50,000 monthly active users within 3 months of launch',
    ],
    technologies: ['React', 'TMDB API', 'CSS'],
  },
]
const Projects = () => {
  return (
    <main className="container grid grid-cols-1 space-y-8 mt-12">
      <div className="flex flex-col space-y-4">
        <h2 className="text-white font-bold text-4xl mb-6">
          <span className="mr-0.5 text-accent">~</span>
          projects
        </h2>
        <p className="tracking-white">
          here are some of the projects i've worked on. i love building tools
          that make developers' lives easier and exploring new technologies
          along the way.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </main>
  )
}

export default Projects
