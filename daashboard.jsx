import React, { useState } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const Dashboard = () => {
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
  };

  const clearCurrentBlog = () => {
    setCurrentBlog(null);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <BlogForm currentBlog={currentBlog} clearCurrentBlog={clearCurrentBlog} />
      <BlogList onEdit={handleEdit} />
    </div>
  );
};

export default Dashboard;