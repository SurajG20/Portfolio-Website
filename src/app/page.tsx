import Header from '@/components/Header/Header'
import Links from '@/components/Links/Links'
import Section from '@/components/Section/Section'

const experience = [
  {
    title: 'Wiseway Tec',
    url: 'https://wisewaytec.com',
    subtitle: 'Full Stack Developer (September 2024 - Present)',
    description: `Spearheaded blockchain-based trading platforms and a high-traffic Telegram mini app. Enhanced web interfaces with React and optimized backend services using Node.js and SQL databases.`,
  },
  {
    title: 'Wise Logics Digital Solutions',
    url: 'https://wiselogicsdigitalsolutions.com',
    subtitle: 'Full Stack Developer (March 2024 - August 2024)',
    description: `Engineered client projects using the MERN stack. Implemented secure authentication, real-time notifications, and payment integrations. Collaborated with UI/UX team to elevate user experience.`,
  },
  {
    title: 'Livinart Technologies',
    url: 'https://www.livinarttech.com/',
    subtitle: 'Full Stack Developer (October 2023 - February 2024)',
    description: `Developed full-stack applications for transportation and fintech clients. Integrated real-time tracking, payment gateways, and responsive UI components.`,
  },
]
const projects = [
  {
    title: 'Urban Garage',
    url: 'https://urbangarage.com',
    subtitle: 'Full-stack automotive marketplace',
    description:
      'Built with the MERN stack featuring an admin dashboard, Redux state management, and real-time inventory updates.',
  },
  {
    title: 'Bazaar',
    url: 'https://bazaar.com',
    subtitle: 'Modern e-commerce platform',
    description:
      'Built with React, Node.js and MongoDB. Features secure JWT authentication, Stripe payment integration, and shopping cart functionality.',
  },
  // {
  //   title: 'Expense Tracker',
  //   url: 'https://expensetracker.com',
  //   subtitle: 'React-based personal finance application',
  //   description:
  //     'With MongoDB backend for tracking income and expenses. Features interactive charts, budget categories, and transaction history.',
  // },
  // {
  //   title: 'Cinemato',
  //   url: 'https://cinemato.com',
  //   subtitle: 'Modern movie discovery platform',
  //   description:
  //     'Built with React that integrates with the TMDB API. Features advanced search functionality, movie/TV show details, ratings, and reviews.',
  // },
]
export default function Home() {
  return (
    <main className="container grid grid-cols-1 space-y-8 mt-12">
      <Header />
      <Section title="experience" content={experience} />
      <Section title="projects" content={projects} action="projects" />
      <Links />
    </main>
  )
}
