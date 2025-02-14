import React from 'react';
import PostsListClient from './PostsListClient'; // Ensure the path is correct

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

// This Server Component fetches the posts and returns the client-rendered list
const UseExample = async () => {
  const posts = await fetchPosts();
  return <PostsListClient posts={posts} />;
};

export default UseExample;
