import React, { useState, useEffect } from "react";
import posts from "../content/posts";
import PostsList from "./PostsList";
import Category from "./Category";
import { Link, Route } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
export default function Blog() {
    const [postList, setPostList] = useState();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "React", "CSS/SASS", "Wordpress", "Performance"];
    useEffect(() => {
        if (selectedCategory !== "All") {
            const filterPosts = posts.filter(
                (post) => post.category === selectedCategory
            );
            setPostList(filterPosts);
        }
    }, [selectedCategory]);
    useEffect(() => {
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: "auto" }); // or just leave it window.scrollTo(...), doens't matter. I just like it this way ;)
    }, []);

    const setCategoryCallBack = (category) => {
        setSelectedCategory(category);
    };
    return (
        <ScrollAnimation animateIn="fadeIn" offset={250} duration={0.75}>
            <div className="blog">
                {/* Need to create duplicate postcards, to force rerender for uniform animation */}
                {selectedCategory == "All" && (
                    <PostsList
                        callback={setCategoryCallBack}
                        categories={categories}
                    />
                )}
            </div>
        </ScrollAnimation>
    );
}
