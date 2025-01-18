import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center h-screen w-full">
      <div className="space-y-6 text-center">
        <pre className="font-mono text-accent whitespace-pre text-4xl font-medium">
          404
        </pre>
        <p className="text-gray-400">
          looks like you've wandered into uncharted territory
        </p>
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-accent transition-colors group"
        >
          return home
        </Link>
      </div>
    </div>
  )
}
