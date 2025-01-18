import Link from 'next/link'
import React from 'react'

const blogs = [
  {
    id: 1,
    url: 'the-rise-of-ai-in-startups',
    title: 'The Rise of AI in Startups',
    description:
      'Exploring how artificial intelligence is revolutionizing the startup ecosystem.',
    date: '2023-01-15',
  },
  {
    id: 2,
    url: 'ai-powered-tools-for-startups',
    title: 'AI-Powered Tools for Startups',
    description:
      'A comprehensive guide to the best AI tools that can help startups grow and succeed.',
    date: '2023-02-10',
  },
  {
    id: 3,
    url: 'challenges-of-implementing-ai-in-startups',
    title: 'Challenges of Implementing AI in Startups',
    description:
      'An in-depth look at the common challenges faced by startups when integrating AI technologies.',
    date: '2023-03-05',
  },
]
const Blogs = () => {
  return (
    <main className="container grid grid-cols-1 space-y-8 mt-12">
      <div className="flex flex-col space-y-4">
        <h2 className="text-white font-bold text-4xl mb-6">
          <span className="mr-0.5 text-accent">~</span>
          blogs
        </h2>
        <p className="tracking-white">
          few blogs that I have written over the years
        </p>
      </div>
      <section className="grid grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-2xl hover:text-accent cursor-pointer">
                <Link href={`/blogs/${blog.url}`}>{blog.title}</Link>
              </h3>
              <p className="text-gray-400 whitespace-nowrap ">{blog.date}</p>
            </div>
            <p className="text-gray-400">{blog.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Blogs
