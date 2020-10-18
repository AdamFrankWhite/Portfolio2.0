import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function CategoryMenu(props) {
    const [active, setActive] = useState(props.category);
    return (
        <div className="cat-menu">
            <h2>Blog</h2>
            <hr />
            <br />
            <ul class="blog-menu">
                {props.categories.map((category) => {
                    const linkPath =
                        category !== "All"
                            ? `/blog/${category.toLowerCase()}`
                            : "/blog";
                    return (
                        <Link to={linkPath}>
                            <li
                                className={
                                    active == category ? "highlight" : ""
                                }
                                key={category}
                                onClick={() => {
                                    setActive(category);
                                }}
                            >
                                {category}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
