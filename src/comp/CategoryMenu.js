import React from "react";
import { Link } from "react-router-dom";
export default function CategoryMenu(props) {
    return (
        <ul>
            {/* {props.categories.map(category => {
                return (
                    <Link to={`/blog/${category}`}>
                        <li
                            key={category}
                            className={
                                category == props.category ? "selected" : ""
                            }
                            onClick={() => {
                                props.callback(category);
                            }}
                        >
                            {category}
                        </li>
                    </Link>
                );
            })} */}
        </ul>
    );
}
