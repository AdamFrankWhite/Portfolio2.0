import React from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import BlogPreview from "./BlogPreview";
import Contact from "./Contact";
import About from "./About";
import HireMe from "./HireMe";
import Footer from "./Footer";
export default function MainPage() {
    return (
        <div>
            <Home />
            <Portfolio />
            <HireMe />
            <BlogPreview />
            <Contact />
            {/* <About /> */}
            <Footer />
        </div>
    );
}
