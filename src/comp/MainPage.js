import React, { useState, useEffect } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import BlogPreview from "./BlogPreview";
import Contact from "./Contact";
import About from "./About";
import HireMe from "./HireMe";
import Footer from "./Footer";
import Modal from "./Modal";
export default function MainPage() {
    // const [showModal, toggleModal] = useState(false);
    const [selectedModal, setModal] = useState(null);
    useEffect(() => {
        console.log(selectedModal);
    }, selectedModal);
    return (
        <div>
            <Home />
            <Portfolio
                selectedModal={selectedModal}
                setModal={setModal}
                // toggleModal={toggleModal}
                // showModal={showModal}
            />
            <HireMe />
            <BlogPreview />
            <Contact />
            {/* <About /> */}
            <Footer />
            {selectedModal && (
                <Modal selectedModal={selectedModal} setModal={setModal} />
            )}
        </div>
    );
}
