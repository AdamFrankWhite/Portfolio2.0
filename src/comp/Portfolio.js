import React from "react";
import websites from "../content/websiteArray";
import projects from "../content/projectArray";
import PortfolioCard from "./PortfolioCard";
export default function Portfolio() {
    return (
        <section className="portfolio slide-in">
            <div className="frame-content">
                <div className="portfolio-tabs">
                    <h2 className="highlight">Websites</h2>
                    <h2>Projects</h2>
                </div>

                <div className="websites slide-in">
                    {websites.map(website => (
                        <PortfolioCard website={website} />
                    ))}
                </div>
                <div className="projects"></div>
            </div>
        </section>
    );
}
