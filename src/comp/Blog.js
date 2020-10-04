import React, { useState, useEffect } from "react";
import posts from "../content/posts";
import { Link } from "react-router-dom";
export default function Blog() {
    const [postList, setPostList] = useState(posts);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "React", "CSS/SASS", "Wordpress", "Performance"];
    useEffect(() => {
        const filterPosts =
            selectedCategory !== "All"
                ? posts.filter(post => post.category === selectedCategory)
                : posts;
        setPostList(filterPosts);
    }, [selectedCategory]);
    return (
        <div className="blog slide-in">
            <div className="frame-content">
                <h2>Blog</h2>
                <ul>
                    {categories.map(category => {
                        return (
                            <li
                                className={
                                    category == selectedCategory && "selected"
                                }
                                onClick={() => {
                                    setSelectedCategory(category);
                                }}
                            >
                                {category}
                            </li>
                        );
                    })}
                </ul>
                <div>
                    {postList.map(post => {
                        return (
                            <div className="post-card">
                                <div className="post-card-content">
                                    <Link to={`/blog/${post.path}`}>
                                        <h3>{post.title}</h3>
                                    </Link>
                                    {post.snippet.map(para => (
                                        <p>{para}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
