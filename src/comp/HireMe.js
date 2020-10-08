import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import HireCard from "./HireCard";
export default function HireMe() {
    const hireCards = [
        {
            title: "Wordpress Development",
            imgPath: "/assets/icons/icons8-wordpress-104.png",
            tabs: [
                "Wordpress Installation",
                "Custom Theme Development",
                "Plug-in management",
                "Theme Modification"
            ]
        },
        {
            title: "Web Hosting/Maintainence",
            imgPath: "/assets/icons/icons8-launch-90.png",
            tabs: [
                "Web Hosting",
                "Domain Registration",
                "Domain Email",
                "SSL Certification"
            ]
        },
        {
            title: "Custom Web Development",
            imgPath: "/assets/icons/icons8-code-104.png",
            tabs: [
                "Custom HTML/CSS/JavaScript",
                "Coded from scratch",
                "Node.js",
                "React/Redux"
            ]
        }
    ];
    return (
        <section id="hire-me" className="about slide-in">
            <ScrollAnimation animateIn="fadeIn" offset={250} duration={0.75}>
                <div className="frame-content">
                    <div className="hire-title-cont">
                        <h2>Hire Me</h2>
                        <hr className="full-width" />
                    </div>
                    <br />
                    <div className="hire-card-cont">
                        {hireCards.map(card => (
                            <HireCard card={card} />
                        ))}
                    </div>
                    <h2>What I Can Do For You</h2>
                    <hr />
                    <p>
                        If you are looking for a bespoke, stand-alone site, or a
                        managable Wordpress site, or custom theme, I'd be happy
                        to help. Or, if you are looking for someone to edit and
                        improve a pre-existing site or page, that's also
                        something I'd be happy to help with. If it's something
                        else, I'm always up for a challenge - let me know and
                        I'll see if I am able to help.
                    </p>
                    <h2>My Process</h2>
                    <hr />
                    <p>
                        I will work with you to understand your business needs
                        and the type of site you require (information, blog,
                        sales, editable content). If you are looking for a
                        bespoke site, I will then create some wireframes to give
                        you a feel for the general design, before making some
                        mockups for you to choose from. Then, I will develop
                        your site. Finally, if you need help with setting up web
                        hosting and a domain, I can help with that too, before
                        deploying your site.
                    </p>
                    <h2>What Tech Do You Use?</h2>
                    <hr />
                    <p>
                        I am comfortable with a variety of languages, frameworks
                        and tools including HTML, CSS/SASS, JavaScript, React,
                        Node/Express and Wordpress. I use Adobe XD for
                        prototyping, VS Code for most projects, and XAMPP for
                        PHP/Wordpress-based projects.
                    </p>

                    <h2>Pricing</h2>
                    <hr />
                    <p>
                        I charge by the project, depending on the complexity and
                        individual requirements. As a general guide, my prices
                        are as follows: a simple website from £495. Bespoke
                        custom site from £1095.
                    </p>
                    <p>
                        For smaller jobs and consultancy, I charge an hourly
                        rate of £30/hour.
                    </p>
                    <p>
                        Please note, I require 25% deposit before beginning the
                        project, and 75% on completion, before the site is made
                        live and handed over
                    </p>
                </div>
            </ScrollAnimation>
        </section>
    );
}
