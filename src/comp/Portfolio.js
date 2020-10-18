import React from "react";
import websites from "../content/websiteArray";
import PortfolioCard from "./PortfolioCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio slide-in">
            <br />
            <ScrollAnimation animateIn="fadeIn" offset={250} duration={0.75}>
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
                            <PortfolioCard card={website} />
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}
