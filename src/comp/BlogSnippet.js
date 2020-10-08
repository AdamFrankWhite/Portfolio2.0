import React from "react";
import { NavLink } from "react-router-dom";
export default function BlogSnippet() {
    return (
        <section className="blog-snippet">
            <h2>Blog</h2>
            <hr className="small-hr"></hr>
            <NavLink to="/blog">View Blog</NavLink>
        </section>
    );
}
