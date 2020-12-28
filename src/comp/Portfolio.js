import React from "react";
import websites from "../content/websiteArray";
import PortfolioCard from "./PortfolioCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio({
    toggleModal,
    showModal,
    selectedModal,
    setModal,
}) {
    return (
        <section id="portfolio" className="portfolio slide-in">
            <br />
            <ScrollAnimation
                animateIn="fadeIn"
                offset={250}
                duration={0.75}
                animateOnce={true}
            >
                <div className="frame-content">
                    <div className="portfolio-title-cont">
                        <h2 class="portfolio-title">Projects</h2>
                        <hr />
                        <a
                            href="https://github.com/AdamFrankWhite"
                            target="_blank"
                        >
                            Github <i class="fa fa-github"></i>
                        </a>
                    </div>

                    <br />
                    <div className="card-container">
                        {websites.map((website) => (
                            <PortfolioCard
                                // toggleModal={toggleModal}
                                // showModal={showModal}
                                selectedModal={selectedModal}
                                setModal={setModal}
                                card={website}
                            />
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}
