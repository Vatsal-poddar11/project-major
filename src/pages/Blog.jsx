import React from "react";
import blogData from "../utils/blogdata";

const Blog = () => {
    return (
        <div className="blog-page">
            <h1>Medical Research & Care Blogs</h1>
            <div className="blog-list">
                {blogData.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <div className="blog-content">
                            <h2>{blog.title}</h2>
                            <p>{blog.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;