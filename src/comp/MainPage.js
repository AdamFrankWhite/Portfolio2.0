import React, { useState, useEffect } from "react";
const Home = React.lazy(() => import("./Home"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const BlogPreview = React.lazy(() => import("./BlogPreview"));
const Contact = React.lazy(() => import("./Contact"));
const HireMe = React.lazy(() => import("./HireMe"));
const Footer = React.lazy(() => import("./Footer"));
const Modal = React.lazy(() => import("./Modal"));

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
