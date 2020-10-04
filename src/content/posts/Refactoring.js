import React from "react";
import Highlight from "react-highlight.js";
export default function Refactoring() {
    return (
        <div class="blog-post">
            <p>
                Here we have a menu that we wish to do a few things with. Note
                how the code is repeated. We can fix this using the ever-handy
                .map() method.
            </p>
            <Highlight language={"javascript"}>
                {`
            import React, { useState } from "react";
            import posts from "../content/posts";
            import { Link } from "react-router-dom";
            export default function Blog() {
                const [postList, setPostList] = useState(posts);
                const [category, setCategory] = useState("All");
                return (
                    <div className="blog slide-in">
                        <div className="frame-content">
                            <h2>Blog</h2>
                            <ul>
                                <li
                                    className={category == "All" && "selected"}
                                    onClick={() => {
                                        setPostList(posts);
                                        setCategory("All");
                                    }}
                                >
                                    ALL
                                </li>
                                <li
                                    className={category == "React" && "selected"}
                                    onClick={() => {
                                        setPostList(
                                            posts.filter(post => post.category === "React")
                                        );
                                        setCategory("React");
                                    }}
                                >
                                    React
                                </li>
                                <li
                                    className={category == "CSS/SASS" && "selected"}
                                    onClick={() => {
                                        setPostList(
                                            posts.filter(
                                                post => post.category === "CSS/SASS"
                                            )
                                        );
                                        setCategory("CSS/SASS");
                                    }}
                                >
                                    CSS/SASS
                                </li>
                                <li
                                    className={category == "Wordpress" && "selected"}
                                    onClick={() => {
                                        setPostList(
                                            posts.filter(
                                                post => post.category === "Wordpress"
                                            )
                                        );
                                        setCategory("Wordpress");
                                    }}
                                >
                                    Wordpress
                                </li>
                                <li
                                    className={category == "Performance" && "selected"}
                                    onClick={() => {
                                        setPostList(
                                            posts.filter(
                                                post => post.category === "Performance"
                                            )
                                        );
                                        setCategory("Performance");
                                    }}
                                >
                                    Performance
                                </li>
                            </ul>
                            <div>
                                {postList.map(post => {
                                    return (
                                        <div className="post-card">
                                            <div className="post-card-content">
                                                <Link to={&#96;/blog/&#36;{post.path}&#96;}>
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
                        </div>
                    </div>
                );
            }
            
            `}
            </Highlight>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus turpis, ullamcorper vel tortor ac, tristique lacinia dui.
                Proin dignissim mi ac tortor suscipit, ac sagittis risus
                feugiat. Curabitur a enim nunc. Nunc feugiat efficitur diam eget
                aliquam. Quisque eget pharetra libero, sed malesuada eros.
                Pellentesque pharetra rutrum magna, et bibendum metus gravida
                et.
            </p>

            <p>
                Phasellus sodales urna mauris, sed sollicitudin tortor
                condimentum sit amet. Nulla facilisi. Phasellus sagittis orci
                sed dictum posuere. Curabitur volutpat iaculis elit ut auctor.
                Praesent ac eros laoreet enim vehicula maximus a non velit.
                Donec a lectus hendrerit elit eleifend vehicula. Pellentesque
                nec orci vehicula, iaculis tortor eget, eleifend augue. Nulla eu
                lectus quis turpis aliquet aliquet.
            </p>

            <p>
                Suspendisse odio orci, euismod id euismod vitae, consectetur nec
                sapien. Aliquam a euismod mi, lacinia vehicula orci. Vestibulum
                ex ipsum, finibus vitae mattis non, maximus non libero. In id
                pellentesque erat, quis lacinia felis. Curabitur vitae magna
                mollis, fringilla massa in, posuere nunc. Quisque in tristique
                ipsum. Nullam ultrices nibh quis purus mollis, eget condimentum
                tortor sollicitudin. Suspendisse aliquam eros vitae neque
                consequat tristique. Sed sed arcu vitae sapien fermentum blandit
                in a est. Maecenas egestas porta nibh in sollicitudin.
            </p>

            <p>
                Pellentesque elementum cursus mauris eu eleifend. Integer et
                justo tempor, varius felis id, sodales quam. Maecenas iaculis
                imperdiet nisl, in porttitor purus posuere at. Donec elementum,
                metus nec tincidunt aliquet, velit sapien aliquam elit,
                vulputate placerat erat mauris quis lectus. Mauris posuere orci
                nulla, at ullamcorper eros interdum quis. Curabitur id tellus
                quis tortor vestibulum venenatis. Aliquam porttitor lectus eu
                velit accumsan auctor. Aenean nisi sapien, consectetur ut est
                sed, tempor lacinia velit. Etiam id libero velit. Praesent eget
                metus consectetur, lacinia enim vitae, pretium sem.
            </p>
        </div>
    );
}
