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
                <div className="portfolio-tabs">
                    <h2
                        className={showWebsites && "highlight"}
                        onClick={() => {
                            setShowWebsites(true);
                            setShowProjects(false);
                        }}
                    >
                        Websites
                    </h2>
                    <h2
                        className={showProjects && "highlight"}
                        onClick={() => {
                            setShowWebsites(false);
                            setShowProjects(true);
                        }}
                    >
                        Projects
                    </h2>
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
