import React from "react";
import { ReactComponent as HeroIcon } from "../img/hero-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
export default function Home() {
    return (
        <section className="home slide-in">
            <div className="main frame-content slide-in">
                <div className="header-content">
                    <h2 className="headline">Web Design and Development</h2>
                    <h3>Custom, hand-coded web design for your business</h3>

                    <div className="cta-cont">
                        <a href="#portfolio" rel="noopener">
                            Hire Me
                        </a>
                        {/* <a href="#pricing" rel="noopener">
                                FAQs
                            </a> */}
                        <a href="#faqs" rel="noopener">
                            FAQs
                        </a>
                    </div>
                </div>

                <HeroIcon className="hero-icon" />
            </div>
        </section>
    );
}
