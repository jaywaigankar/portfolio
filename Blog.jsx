// src/components/Blog/Blog.jsx

import React from 'react';
import BlogForm from '../dashboard/blogfrom';
import BlogList from '../dashboard/bloglist';
import styles from './Blog.module.css';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <h2>Blog Section</h2>
            <BlogForm />
            <BlogList />
        </div>
    );
};

export default Blog;
