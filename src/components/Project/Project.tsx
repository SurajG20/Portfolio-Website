import { ArrowUpRight } from 'lucide-react'

type ProjectType = {
  title: string
  url: string
  subtitle: string
  description: string
  achievements: string[]
  technologies: string[]
}

export default function Project({ project }: { project: ProjectType }) {
  return (
    <section className="group">
      <div className="border p-6 space-y-4  group-hover:border-accent transition-all duration-300">
        <div className="space-y-6">
          <div className="flex justify-between">
            <h1 className="text-2xl text-white font-bold group-hover:text-accent transition-all duration-300">
              {project.title}
            </h1>
            <a href={project.url} className="hover:text-accent">
              <ArrowUpRight
                size={18}
                className="group-hover:text-accent font-bold transition-all duration-300"
              />
            </a>
          </div>
          <h4 className="text-sm">{project.subtitle}</h4>
          <h4 className="text-base text-gray-200">{project.description}</h4>

          <div className="space-y-2.5">
            <h4 className="text-white font-semibold text-lg">Achievement</h4>
            <ul className="list-disc list-inside">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-white font-semibold text-lg">Technologies</h4>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <li
                  key={index}
                  className="bg-gray-700 px-2 py-0.5 rounded-sm shadow-md"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
