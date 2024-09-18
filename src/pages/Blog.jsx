import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const API_KEY = process.env.REACT_APP_BLOG_API_KEY;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`);
                // Set the blogs from response.data.articles
                setBlogs(response.data.articles);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Medical Research & Care Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="border p-4 rounded shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="text-sm text-gray-600">
                                {blog.author ? blog.author : "Unknown Author"} - {new Date(blog.publishedAt).toDateString()}
                            </p>
                            <p className="text-md mt-4">{blog.description ? blog.description.substring(0, 150) : "No description available"}...</p>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block text-center"
                            >
                                Read More
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No blog posts available.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;
