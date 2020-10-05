import React from "react";
import { Link } from "react-router-dom";
export default function CategoryMenu(props) {
    return (
        <div>
            <ul class="blog-menu">
                {props.categories.map(category => {
                    const linkPath =
                        category !== "All"
                            ? `/blog/${category.toLowerCase()}`
                            : "/blog";
                    return (
                        <Link to={linkPath}>
                            <li
                                key={category}
                                // className={
                                //     category == props.category ? "selected" : ""
                                // }
                                onClick={() => {
                                    props.callback(category);
                                }}
                            >
                                {category}
                            </li>
                        </Link>
                    );
                })}
            </ul>
            <hr class="menu-hr" />
        </div>
    );
}
