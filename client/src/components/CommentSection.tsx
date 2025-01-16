'use client'
import { useState } from 'react'

export default function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-4 rounded-lg">
          <p>{comment}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          rows={3}
        />
        <button 
          type="submit" 
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Comment
        </button>
      </form>
    </div>
  )
}

