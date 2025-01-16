import { cache } from 'react'
import axios from 'axios';




// Fetch posts with pagination
export const fetchPosts = async (page: number = 1, limit: number = 5) => {
  try {
    // Construct the URL with query parameters for page and limit
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs?page=${page}&limit=${limit}`;
    
    const response = await axios.get(url); // Fetch posts from the backend
    console.log(response.data.blogs)
    return response.data; // Assuming the server returns a paginated response
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

// Get posts with pagination
export const getPosts = cache(async (page: number = 1, postsPerPage: number = 5) => {
  const data = await fetchPosts(page, postsPerPage); // Fetch posts with pagination

  return {
    posts: data?.posts, // Assuming the server returns the posts in a `posts` field
    totalPages: data?.totalPages, // Assuming the server provides the total page count
  };
});


export const getPostById = cache(async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/${id}`; // Assuming the backend has a route to fetch a post by ID
    const response = await axios.get(url);
    return response?.data; // Assuming the backend returns the post directly
  } catch (error) {
    console.error('Error fetching post by ID:', error);
  }
});

export const searchPosts = cache(async (query: string) => {
  try {
    // Send the search query to the server
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs?search=${encodeURIComponent(query)}&limit=5`; // Limit to 5 results
    const response = await axios.get(url);

    return response?.data?.posts; // Assuming the server returns posts in the `posts` field
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
});

