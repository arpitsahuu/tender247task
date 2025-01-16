import { getPosts } from '../lib/posts'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Card from '@/components/UI/Card'

// Metadata for SEO purposes
export const metadata = {
  title: 'Home',
  description: 'Welcome to my blog. Read the latest posts.',
}

export default async function Home({
  searchParams
}: {
  searchParams: { page?: string; search?: string }
}) {
  // Parsing page number and search query from the URL (query params)
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || '';

  // Parsing page number and search query from the URL (query params)
  const { posts, totalPages } = await getPosts(page, 5)

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Latest Blog Posts</h1>

      {/* Search Bar Component */}
      <SearchBar />

    
      {posts && posts.length > 0 &&
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-5">
            {posts && posts?.map((post: any) => (
              <Card key={post._id} post={post} />
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination currentPage={page} totalPages={totalPages} maxDisplayedPages={5} />
        </>
      }
    </div>
  )
}

