import React from "react";

export default function BlogPost(props) {
    console.log(props);
    return (
        <div className="blog-post">
            <h1>{props.post.title}</h1>
            {props.post.content}
        </div>
    );
}
