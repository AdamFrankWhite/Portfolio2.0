import React from "react";
import posts from "../content/posts";
import { Link } from "react-router-dom";
export default function Blog() {
    return (
        <div className="blog slide-in">
            <div className="frame-content">
                <h2>Blog</h2>
                <ul>
                    {posts.map(post => {
                        return (
                            <Link to={`/blog/${post.path}`}>
                                <li>{post.title}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
