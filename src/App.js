import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./comp/NavBar";
import Home from "./comp/Home";
import Portfolio from "./comp/Portfolio";
import BlogPreview from "./comp/BlogPreview";
import Blog from "./comp/Blog";
import BlogPost from "./comp/BlogPost";
import Contact from "./comp/Contact";
import About from "./comp/About";
import HireMe from "./comp/HireMe";
import Category from "./comp/Category";
import posts from "./content/posts";
import Footer from "./comp/Footer";
import MainPage from "./comp/MainPage";
import PrivacyPolicy from "./comp/PrivacyPolicy";
import CookieConsent from "react-cookie-consent";
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
            <CookieConsent
                location="bottom"
                buttonText="Got it!"
                cookieName="myAwesomeCookieName2"
                style={{ fontSize: "0.7em", background: "black" }}
                className="fade-in"
                buttonStyle={{
                    color: "#4e503b",
                    fontSize: "1em",
                    background: "yellow",
                    color: "black",
                    borderRadius: "5px",
                    padding: "0.5em 1em",
                }}
                // expires={150}
            >
                We use cookies to improve your browsing experience on our
                website, to show you personalized content and targeted ads, to
                analyze our website traffic, and to understand where our
                visitors are coming from. By using this website you agree to
                these terms.
            </CookieConsent>
        </div>
    );
}

export default App;
