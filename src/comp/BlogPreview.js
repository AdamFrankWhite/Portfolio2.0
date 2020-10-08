import React from "react";
import { NavLink, Link } from "react-router-dom";
import posts from "../content/posts";
import ScrollAnimation from "react-animate-on-scroll";
export default function BlogPreview() {
    return (
        <section className="blog-preview">
            <div className="frame-content">
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <div className="blog-title-cont">
                        <h2>Articles</h2>
                        <hr></hr>
                    </div>

                    <NavLink to="/blog">View Blog</NavLink>
                    <div className="blog-preview-post-cont">
                        {posts.slice(0, 4).map(post => {
                            return (
                                <div
                                    key={post.title}
                                    className="post-card slide-in"
                                >
                                    <div className="post-card-content">
                                        <Link to={`/blog/${post.path}`}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                        <Link to={`/blog/${post.category}`}>
                                            <h3 class="post-cat">
                                                {post.category}
                                            </h3>
                                        </Link>
                                        {post.snippet.map(para => (
                                            <p key={para}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
