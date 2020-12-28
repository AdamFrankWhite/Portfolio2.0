import React, { useEffect } from "react";
import posts from "../content/posts";
import CategoryMenu from "./CategoryMenu";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
export default function Category(props) {
    const filterPosts = posts.filter(
        (post) => post.category === props.category
    );
    useEffect(() => {
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: "auto" }); // or just leave it window.scrollTo(...), doens't matter. I just like it this way ;)
    }, []);
    return (
        <div className="frame-content">
            <CategoryMenu
                categories={props.categories}
                callback={props.callback}
                category={props.category}
            />
            <ScrollAnimation
                animateIn="fadeIn"
                offset={250}
                duration={0.75}
                animateOnce={true}
            >
                <div className="card-container">
                    {filterPosts.map((post) => {
                        return (
                            <div key={post.title} className="post-card">
                                <div className="post-card-content">
                                    <Link to={`/blog/${post.path}`}>
                                        <h3>{post.title}</h3>
                                    </Link>
                                    <Link to={`/blog/${post.category}`}>
                                        <h3 class="post-cat">
                                            {post.category}
                                        </h3>
                                    </Link>
                                    {post.snippet.map((para) => (
                                        <p key={para}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ScrollAnimation>
        </div>
    );
}
