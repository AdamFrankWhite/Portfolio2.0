import React, { useState, useEffect } from "react";
import posts from "../content/posts";
import PostsList from "./PostsList";
import { Link } from "react-router-dom";
export default function Blog() {
    const [postList, setPostList] = useState();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "React", "CSS/SASS", "Wordpress", "Performance"];
    useEffect(() => {
        if (selectedCategory !== "All") {
            const filterPosts = posts.filter(
                post => post.category === selectedCategory
            );
            setPostList(filterPosts);
        }
    }, [selectedCategory]);
    const CategoryMenu = () => {
        return (
            <ul>
                {categories.map(category => {
                    const linkPath =
                        category !== "All"
                            ? `/blog/${category.toLowerCase()}`
                            : "/blog";
                    return (
                        <Link to={linkPath}>
                            <li
                                key={category}
                                className={
                                    category == selectedCategory
                                        ? "selected"
                                        : ""
                                }
                                onClick={() => {
                                    setSelectedCategory(category);
                                }}
                            >
                                {category}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        );
    };
    const setCategoryCallBack = category => {
        setSelectedCategory(category);
    };
    return (
        <div className="blog slide-in">
            <div className="frame-content">
                <h2>Blog</h2>
                <CategoryMenu callback={setCategoryCallBack} />
                {/* Need to create duplicate postcards, to force rerender for uniform animation */}
                {selectedCategory == "All" && <PostsList />}

                <div className="card-container">
                    {postList &&
                        selectedCategory !== "All" &&
                        postList.map(post => {
                            return (
                                <div
                                    key={post.title}
                                    className="post-card slide-in"
                                >
                                    <div className="post-card-content">
                                        <Link to={`/blog/${post.path}`}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                        {post.snippet.map(para => (
                                            <p key={para}>{para}</p>
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
