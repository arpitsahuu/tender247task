import Image from 'next/image'
import CommentSection from '../../../components/CommentSection'
import { getPostById } from '@/lib/posts'
import { IContentBlock } from '@/interfaces/Post'


export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)
  
  return {
    title: post?.title,
    description: post?.content[0]?.value,
    openGraph: {
      title: post?.title,
      description: post?.content[0]?.value,
      type: 'article',
      publishedTime: post?.createdAt,
      authors: [post?.author],
      images: [
        {
          url: post?.image,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post?.content[0]?.value,
      images: [post?.image],
    },
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={post?.image || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={630}
        className="w-full h-64 object-cover"
        priority
      />
      <div className="px-6 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{post?.title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          By {post?.author} on {new Date(post?.createdAt).toLocaleDateString()}
        </p>
        <div className="mt-8 prose prose-indigo prose-lg text-gray-500 mx-auto">
            {post?.content?.map((content:IContentBlock, index:number) =>(
                <div key={index} className='my-4' dangerouslySetInnerHTML={{ __html: content?.value }} />
            ))}
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50 border-t border-gray-200">
        <CommentSection />
      </div>
    </article>
  )
}

