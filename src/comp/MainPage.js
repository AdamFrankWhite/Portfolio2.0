import React, { useState, useEffect } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import BlogPreview from "./BlogPreview";
import Contact from "./Contact";
import About from "./About";
import HireMe from "./HireMe";
import Footer from "./Footer";
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
                <div className="modal-card">
                    <div className="modal-content">
                        <div className="title-cont">
                            <a target="_blank" href={selectedModal.link}>
                                View Site
                            </a>
                            |
                            <a target="_blank" href={selectedModal.code}>
                                View Code
                            </a>
                        </div>
                        <h4>Built with {selectedModal.tech}</h4>
                        <hr />
                        {selectedModal.text.map((para) => (
                            <p>{para}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
