import { IPost } from '@/interfaces/Post'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define the prop type for the component
interface CardProps {
    post: IPost;
}
const Card: React.FC<CardProps> = ({ post }) => {
    return (
        <article key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Link href={`/posts/${post?._id}`}>
                <Image
                    src={post?.image || "/placeholder.svg"}
                    alt={post?.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                />
            </Link>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/posts/${post._id}`} className="hover:text-indigo-600 transition-colors duration-300">
                        {post?.title}
                    </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    By {post?.author} on {post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Date not available'}
                </p>
                <p className="text-gray-700 mb-4 truncate  ">{post?.content[0].value}</p>
                <Link href={`/posts/${post._id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Read more
                </Link>
            </div>
        </article>
    )
}

export default Card