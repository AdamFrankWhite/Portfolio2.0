import React, { useState } from "react";
import websites from "../content/websiteArray";
import projects from "../content/projectArray";
import PortfolioCard from "./PortfolioCard";

import ScrollAnimation from "react-animate-on-scroll";

import Carousel from "react-bootstrap/Carousel";
export default function Portfolio() {
    return (
        <section className="portfolio slide-in">
            <br />
            <ScrollAnimation animateIn="fadeIn" offset={250} duration={0.75}>
                <div className="frame-content">
                    <div className="portfolio-title-cont">
                        <h2 class="portfolio-title">Projects</h2>

                        <hr />
                    </div>
                    <br />
                    <div className="card-container">
                        {websites.map(website => (
                            <PortfolioCard card={website} />
                        ))}
                    </div>
                    {/* <Carousel>
                        {websites.map(website => (
                            <Carousel.Item>
                                <PortfolioCard card={website} />
                            </Carousel.Item>
                        ))}
                    </Carousel> */}
                </div>
            </ScrollAnimation>
        </section>
    );
}
