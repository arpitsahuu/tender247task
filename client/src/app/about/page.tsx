import { Metadata } from 'next'
import Story from '@/components/about/Story'
import Mission from '@/components/about/Mission'
import GetInTouch from '@/components/about/GetInTouch'

export const metadata: Metadata = {
  title: 'About Us | My Blog',
  description: 'Learn more about our blog, our mission, and the team behind it.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">About Us</h1>
      <Story/>
      <Mission/>
      <GetInTouch/>
    </div>
  )
}
