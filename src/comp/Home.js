import React from "react";
import { ReactComponent as HeroIcon } from "../img/hero-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
export default function Home() {
    return (
        <section className="home slide-in">
            <div className="main frame-content slide-in">
                <div className="header-content ">
                    <div className="slide-down">
                        <h2 className="headline">Web Design and Development</h2>
                        <h3>Custom, hand-coded web design for your business</h3>
                    </div>
                    <div className="cta-cont">
                        <a href="#contact" rel="noopener">
                            Hire Me
                        </a>
                        <a href="#packages" rel="noopener">
                            Packages
                        </a>
                    </div>
                </div>

                <HeroIcon className="hero-icon" />
            </div>
        </section>
    );
}
