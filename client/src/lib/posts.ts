import { cache } from 'react'
import axios from 'axios';

export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  excerpt: string;
  coverImage: string;
}

// Simulating an API call
// const fetchPosts = async (): Promise<Post[]> => {
//   // In a real application, this would be an API call
//   return [
//     {
//       id: '1',
//       title: 'First Blog Post',
//       date: '2023-05-01',
//       author: 'John Doe',
//       content: '<p>This is the full content of the first blog post.</p>',
//       excerpt: 'This is a short excerpt of the first blog post.',
//       coverImage: '/images/post1.jpg',
//     },
//     {
//       id: '2',
//       title: 'Second Blog Post',
//       date: '2023-05-02',
//       author: 'Jane Smith',
//       content: '<p>This is the full content of the second blog post.</p>',
//       excerpt: 'This is a short excerpt of the second blog post.',
//       coverImage: '/images/post2.jpg',
//     },
//     // Add more posts as needed
//   ]
// }


// Fetch posts with pagination
export const fetchPosts = async (page: number = 1, limit: number = 5) => {
  try {
    // Construct the URL with query parameters for page and limit
    const url = `http://localhost:3050/api/v1/blogs?page=${page}&limit=${limit}`;
    
    const response = await axios.get(url); // Fetch posts from the backend
    console.log(response.data.blogs)
    return response.data; // Assuming the server returns a paginated response
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts.');
  }
};

// Get posts with pagination
export const getPosts = cache(async (page: number = 1, postsPerPage: number = 5) => {
  const data = await fetchPosts(page, postsPerPage); // Fetch posts with pagination

  return {
    posts: data.posts, // Assuming the server returns the posts in a `posts` field
    totalPages: data.totalPages, // Assuming the server provides the total page count
  };
});


export const getPostById = cache(async (id: string) => {
  try {
    const url = `http://localhost:3050/api/v1/blog/${id}`; // Assuming the backend has a route to fetch a post by ID
    const response = await axios.get(url);
    console.log(response.data)
    return response.data; // Assuming the backend returns the post directly
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw new Error('Failed to fetch post.');
  }
});

export const searchPosts = cache(async (query: string) => {
  try {
    // Send the search query to the server
    const url = `http://localhost:3050/api/v1/blogs?search=${encodeURIComponent(query)}&limit=5`; // Limit to 5 results
    const response = await axios.get(url);

    return response.data.posts; // Assuming the server returns posts in the `posts` field
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw new Error('Failed to fetch search results.');
  }
});

