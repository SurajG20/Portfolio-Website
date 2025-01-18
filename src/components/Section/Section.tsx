import { ArrowUpRight, Dot } from 'lucide-react'
import Link from 'next/link'

type Experience = {
  title: string
  url: string
  subtitle: string
  description: string
}

type SectionProps = {
  title: string
  content: Experience[]
  action?: string
}

export default function Section({ title, content, action }: SectionProps) {
  return (
    <div>
      <h2 className="text-white font-bold text-3xl mb-6">
        <span className="mr-0.5 text-accent">~</span>
        {title}
      </h2>
      <div className="space-y-8">
        {content &&
          content.map((item, index) => (
            <div key={index} className="space-y-2.5">
              <h3 className="text-white font-semibold text-xl tracking-tighter hover:text-accent cursor-pointer">
                <a
                  href={item.url}
                  className="inline-flex items-center gap-x-0.5"
                >
                  {' '}
                  <Dot /> {item.title}
                </a>
              </h3>
              <h4 className="text-sm text-gray-400">{item.subtitle}</h4>
              <p className="text-gray-300 tracking-wide">{item.description}</p>
            </div>
          ))}
        {action && (
          <Link
            href={`/${action}`}
            className=" font-medium inline-flex items-center gap-x-1 cursor-pointer hover:text-accent"
          >
            all {action}
            <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
