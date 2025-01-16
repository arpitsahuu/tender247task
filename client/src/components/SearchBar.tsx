'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { debounce } from 'lodash'
import { searchPosts } from '../lib/posts'
import Link from 'next/link'
import { IPost } from '@/interfaces/Post'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<IPost[]>([])
  const router = useRouter()
  
  // Debounced search function to avoid frequent API calls
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query) {
        try {
          const searchResults = await searchPosts(query)
          setResults(searchResults) 
        } catch (error) {
          console.error('Error fetching search results:', error)
          setResults([]) 
        }
      } else {
        setResults([]) 
      }
    }, 300), 
    []
  )

  // Update search query and trigger debounced search
  useEffect(() => {
    debouncedSearch(search)
    return () => debouncedSearch.cancel()
  }, [search, debouncedSearch])

   // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?search=${encodeURIComponent(search)}`)
  }

  return (
    <div className="relative">
      {/* Search form */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-r-md">
          Search
        </button>
      </form>

      {/* Search results dropdown */}
      {results?.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md max-h-60 overflow-auto">
          {results.map((post:IPost) => (
            <Link
              key={post?._id}
              href={`/posts/${post?._id}`}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              <h3 className="text-sm font-medium text-gray-900">{post?.title}</h3>
              <p className="text-xs text-gray-500">{post?.author}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

