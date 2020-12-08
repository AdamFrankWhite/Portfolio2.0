import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NavBar = React.lazy(() => import("./comp/NavBar"));
const Home = React.lazy(() => import("./comp/Home"));
const Blog = React.lazy(() => import("./comp/Blog"));
const BlogPost = React.lazy(() => import("./comp/BlogPost"));
const Category = React.lazy(() => import("./comp/Category"));
const MainPage = React.lazy(() => import("./comp/MainPage"));
const posts = React.lazy(() => import("./content/posts"));

function App() {
    const categories = ["All", "React", "CSS/SASS", "Wordpress", "Performance"];

    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={MainPage} />

                    <Route exact path="/blog" component={Blog} />
                    {/* <Route path="/privacy-policy" component={PrivacyPolicy} /> */}
                    {/* <Route path="/working-with-me" component={WorkingWithMe} /> */}
                    {posts.map((post) => (
                        <Route
                            key={post.title}
                            path={`/blog/${post.path}`}
                            render={(props) => (
                                <BlogPost
                                    {...props}
                                    post={post}
                                    // callback={}
                                    categories={categories}
                                />
                            )}
                        />
                    ))}
                    {categories
                        .filter((category) => category !== "All")
                        .map((category) => (
                            <Route
                                key={category}
                                path={`/blog/${category}`}
                                render={(props) => (
                                    <Category
                                        {...props}
                                        categories={categories}
                                        category={category}
                                    />
                                )}
                            />
                        ))}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
