import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default BlogCard
