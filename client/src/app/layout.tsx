import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'My Blog',
    template: '%s | My Blog',
  },
  description: 'A simple blog built with Next.js',
  openGraph: {
    title: 'My Blog',
    description: 'A simple blog built with Next.js',
    url: 'https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    siteName: 'My Blog',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'My Blog',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${inter.className}`}>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-indigo-600">My Blog</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 mt-8">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">© 2025 My Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

