'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div>
      <ul className="flex justify-start space-x-6">
        <li className="cursor-pointer hover:text-accent">
          <Link href="/" className={`${pathname == '/' && 'text-accent'}`}>
            [h] home
          </Link>
        </li>
        <li className="cursor-pointer hover:text-accent">
          <Link
            href="/blogs"
            className={`${pathname == '/blogs' && 'text-accent'}`}
          >
            {' '}
            [b] blog
          </Link>
        </li>
        <li className="cursor-pointer hover:text-accent">
          <Link
            href="/projects"
            className={`${pathname == '/projects' && 'text-accent'}`}
          >
            [p] projects
          </Link>
        </li>
      </ul>
    </div>
  )
}
