import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | My Blog',
  description: 'Learn more about our blog, our mission, and the team behind it.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2023, our blog emerged from a shared passion for knowledge and a desire to create a platform where 
          experts and enthusiasts alike could come together to learn, share, and grow.
        </p>
        <p className="text-gray-600 mb-4">
          What started as a small project has blossomed into a thriving community, dedicated to exploring diverse topics 
          and fostering intellectual curiosity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          We strive to empower our readers with knowledge, inspire curiosity, and foster a community of lifelong learners. 
          Our goal is to create a platform where diverse voices can be heard and ideas can flourish.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Provide accurate and up-to-date information</li>
          <li>Encourage critical thinking and open dialogue</li>
          <li>Showcase innovative ideas and emerging trends</li>
          <li>Build a supportive community of readers and contributors</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, 
          feel free to reach out to us at{' '}
          <Link href="mailto:contact@myblog.com" className="text-blue-600 hover:underline">
            contact@myblog.com
          </Link>.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

