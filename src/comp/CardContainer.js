import React from "react";
import { Link } from "react-router-dom";
export default function CardContainer(props) {
    return (
        <div className="card-container slide-in">
            {props.posts.map(post => {
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
    );
}
