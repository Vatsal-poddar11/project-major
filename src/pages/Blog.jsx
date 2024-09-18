import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const API_KEY = process.env.REACT_APP_BLOG_API_KEY;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`);
<<<<<<< HEAD
                // Set the blogs from response.data.articles
=======
>>>>>>> 688794a8fd248c74976029238d4543028a250f3d
                setBlogs(response.data.articles);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#ffffff]">Medical Research & Care Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="border border-[#d1d5db] p-4 rounded-md shadow-md bg-[#ffffff] max-w-xs mx-auto">
                            <h2 className="text-lg font-semibold mb-2 text-[#1f2937]">{blog.title}</h2>
                            <p className="text-sm text-[#4b5563]">
                                {blog.author ? blog.author : "Unknown Author"} - {new Date(blog.publishedAt).toDateString()}
                            </p>
                            <p className="text-sm mt-4 text-[#4b5563]">
                                {blog.description ? blog.description.substring(0, 100) : "No description available"}...
                            </p>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-[#3b82f6] text-white px-3 py-1 text-sm rounded hover:bg-[#2563eb] transition-colors duration-200 block text-center"
                            >
                                Read More
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-[#f8fafc]">No blog posts available.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;
