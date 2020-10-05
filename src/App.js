import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./comp/NavBar";
import Home from "./comp/Home";
import Portfolio from "./comp/Portfolio";
import Blog from "./comp/Blog";
import BlogPost from "./comp/BlogPost";
import Contact from "./comp/Contact";
import About from "./comp/About";
import Category from "./comp/Category";
import posts from "./content/posts";
function App() {
    const categories = ["All", "React", "CSS/SASS", "Wordpress", "Performance"];
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    {/* <div className="main-cont"> */}
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/blog" component={Blog} />
                    {posts.map(post => (
                        <Route
                            key={post.title}
                            path={`/blog/${post.path}`}
                            render={props => (
                                <BlogPost {...props} post={post} />
                            )}
                        />
                    ))}
                    {categories.map(category => (
                        <Route
                            key={category}
                            path={`/blog/${category}`}
                            render={props => (
                                <Category {...props} category={category} />
                            )}
                        />
                    ))}

                    {/* <Route path="/blog/:post" component={BlogPost} /> */}
                    {/* </div> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
