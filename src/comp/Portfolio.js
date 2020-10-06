import React, { useState } from "react";
import websites from "../content/websiteArray";
import projects from "../content/projectArray";
import PortfolioCard from "./PortfolioCard";
export default function Portfolio() {
    const [showWebsites, setShowWebsites] = useState(true);
    const [showProjects, setShowProjects] = useState(false);
    return (
        <section className="portfolio slide-in">
            <div className="frame-content">
                <h2 class="portfolio-title">Portfolio</h2>

                <hr className="full-width" />
                <br />
                <div className="portfolio-tabs">
                    <h4
                        className={showWebsites && "highlight"}
                        onClick={() => {
                            setShowWebsites(true);
                            setShowProjects(false);
                        }}
                    >
                        Websites
                    </h4>
                    <h4
                        className={showProjects && "highlight"}
                        onClick={() => {
                            setShowWebsites(false);
                            setShowProjects(true);
                        }}
                    >
                        Projects
                    </h4>
                </div>

                <div className={showWebsites ? "websites slide-in" : "hide"}>
                    {websites.map(website => (
                        <PortfolioCard card={website} />
                    ))}
                </div>
                <div className={showProjects ? "projects slide-in" : "hide"}>
                    {projects.map(project => (
                        <PortfolioCard card={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
