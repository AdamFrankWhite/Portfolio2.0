import React, { useState } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import BlogPreview from "./BlogPreview";
import Contact from "./Contact";
import HireMe from "./HireMe";
import Footer from "./Footer";
import Modal from "./Modal";
import Services from "./Services";
import FAQs from "./FAQs";
import ScrollAnimation from "react-animate-on-scroll";
export default function MainPage() {
    const [selectedModal, setModal] = useState(null);

    return (
        <div>
            <Home />
            <Services />
            <HireMe />
            <Portfolio selectedModal={selectedModal} setModal={setModal} />
            <ScrollAnimation
                animateIn="fadeIn"
                offset={250}
                duration={0.75}
                animateOnce={true}
            >
                <FAQs />{" "}
            </ScrollAnimation>
            {/* <BlogPreview /> */}

            <Contact />
            <Footer />
            {selectedModal && (
                <Modal selectedModal={selectedModal} setModal={setModal} />
            )}
        </div>
    );
}
