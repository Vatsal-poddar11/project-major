import React, { useState } from "react";
import blogData from "../utils/blogdata";

const Blog = () => {
    const [expandedBlogs, setExpandedBlogs] = useState({});

    const toggleReadMore = (index) => {
        setExpandedBlogs((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the read more state for each blog
        }));
    };

    const handleReadFullArticle = (index, url) => {
        if (expandedBlogs[index]) {
            // If the blog is already expanded, scroll the user to the full content
            document.getElementById(`blog-${index}`).scrollIntoView({ behavior: "smooth" });
        } else if (url) {
            // If not expanded, navigate to the external link
            window.open(url, "_blank");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#ffffff]">Medical Research & Care Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData && blogData.length > 0 ? (
                    blogData.map((blog, index) => {
                        const isExpanded = expandedBlogs[index]; // Check if this blog is expanded
                        const description = isExpanded ? blog.info : `${blog.info.substring(0, 100)}...`;

                        return (
                            <div
                                key={index}
                                id={`blog-${index}`}
                                className="border border-[#d1d5db] p-4 rounded-md shadow-md bg-[#ffffff] max-w-xs mx-auto"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold mb-2 text-[#1f2937]">{blog.title}</h2>
                                <p className="text-sm mt-4 text-[#4b5563]">
                                    {description}
                                </p>
                                <span
                                    className="text-[#007bff] cursor-pointer mt-2 inline-block font-medium hover:text-[#0056b3] transition-colors duration-200"
                                    onClick={() => toggleReadMore(index)}
                                >
                                    {isExpanded ? 'Show Less' : 'Read More'}
                                </span>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-[#f8fafc]">No blog posts available.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;
