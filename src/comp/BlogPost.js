import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CategoryMenu from "./CategoryMenu";
export default function BlogPost(props) {
    useEffect(() => {
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: "auto" }); // or just leave it window.scrollTo(...), doens't matter. I just like it this way ;)
    }, []);
    return (
        <>
            <CategoryMenu
                callback={props.callback}
                categories={props.categories}
                category="All"
            />
            <ScrollAnimation animateIn="fadeIn" offset={250} duration={0.75}>
                <div className="blog-post">
                    <h1>{props.post.title}</h1>
                    <hr />
                    {props.post.content}
                </div>
            </ScrollAnimation>
        </>
    );
}
