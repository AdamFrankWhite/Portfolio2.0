import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./comp/NavBar";
import Home from "./comp/Home";
import Portfolio from "./comp/Portfolio";
import Blog from "./comp/Blog";
import Contact from "./comp/Contact";
import About from "./comp/About";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <div class="main-cont">
                        <Route exact path="/" component={Home} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
