import React from "react";
import posts from "../content/posts";
import { Link } from "react-router-dom";

export default function PostsList() {
    return (
        <div className="card-container">
            {posts.map(post => {
                return (
                    <div key={post.title} className="post-card slide-in">
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
    );
}
