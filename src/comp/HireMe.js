import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import PriceCard from "./PriceCard";
import ProcessCard from "./ProcessCard";
export default function HireMe() {
    const process = [
        {
            icon: "/assets/icons/icons8-chat-240.png",
            title: "1. Connect and discuss",
            content:
                "Firstly, we’ll have a chat about your business and figure out exactly what kind of website you'll need, your goals and your preferred features. Following this, I'll send you a proposal containing a quote and basic overview of the project.",
        },
        {
            icon: "/assets/icons/icons8-tiles-240.png",
            title: "2. Gather any content",
            content:
                "Before I get to work on your site, we'll need to get your content together. I can help source images, icons, edit content and design a logo if required.",
        },
        {
            icon: "/assets/icons/icons8-code-240.png",
            title: "3. Design and develop your website",
            content:
                "After narrowing down your design, I will develop your website from scratch, using the latest web technology to create a beautiful, functional, secure site. I will then chat with you and undertake requested revisions.",
        },
        {
            icon: "/assets/icons/icons8-launch-240.png",
            title: "4. Launch and on-going support",
            content:
                "Once launched, you'll receive any required training and support to help you get the most from your site. I will also be available for long-term support and updates.",
        },
    ];

    const priceCards = [
        {
            title: "standard",
            imgPath: "/assets/icons/icons8-web-design-208.png",
            desc:
                "The most cost-effective web design package, popular for small businesses, sole traders, community groups and landing pages.",
            tabs: [
                "1-page site",
                "Customised Wordpress Site",
                "Mobile Responsive",
                "Social Media Integration",
                "Contact Form",
                "Favicon and icons",
                "Image Gallery",
                "Embedded Google Maps",
                "2 rounds of revision",
            ],
            price: 399,
        },
        {
            title: "premium",
            imgPath: "/assets/icons/icons8-site-quality-warranty-250.png",
            desc:
                "Geared towards small businesses with more content, a multi-page site helps present your company in a professional manner, on an affordable budget. Add more content than the standard package.",
            tabs: [
                "up to 5 pages",
                "Custom Design",
                "Mobile Responsive",
                "Content Management System",
                "Social Media Integration",
                "Contact Form",
                "Favicon and icons",
                "Image Gallery",
                "Embedded Google Maps",
                "2 rounds of revision",
            ],
            price: 799,
        },
        {
            title: "bespoke",
            imgPath: "/assets/icons/icons8-code-208-gold.png",
            desc:
                "The best choice if you want an in-depth custom design. Also great for SEO, our bespoke package allows you to create a powerful website with advanced features.",
            tabs: [
                "Unlimited pages",
                "In-depth Custom Design - wireframes and mockups",
                "Mobile Responsive",
                "Content Management System",
                "Social Media Integration",
                "Contact Form",
                "Favicon and icons",
                "Image Gallery",
                "Embedded Video",
                "Embedded Google Maps",
                "SEO Boost",
                "3 rounds of revision",
            ],
            price: 1299,
        },
    ];

    return (
        <section id="hire-me" className="about">
            <div className="frame-content">
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <div className="hire-title-cont">
                        <h2 className="section-title">Hire Me</h2>
                        <hr />
                    </div>
                    <br />
                    <div className="hire-intro">
                        <p>
                            I have a passion for web development and making
                            user-friendly, beautiful websites that help
                            businesses achieve their goals.
                        </p>
                        <p>
                            Whether you are looking for a brand new website, a
                            re-design, or would like new features integrating
                            into your current site, I'm here to help.
                        </p>
                    </div>
                    {/* <p>
                        Find out more about{" "}
                        <Link className="link" to="working-with-me">
                            working with me
                        </Link>
                        .
                    </p> */}
                </ScrollAnimation>
                <h2 id="pricing">Packages</h2>
                <hr className="mx-auto" />
                <p>
                    I charge by the project, depending on the complexity and
                    individual requirements. As a general guide, I offer three
                    core packages, listed below. All projects are customisable.
                </p>
                <p>
                    For smaller jobs and consultancy, I charge an hourly rate of
                    £30/hour.
                </p>
                <p>
                    Please note, I require 50% deposit before beginning the
                    project, and 50% on completion, before the site is made live
                    and handed over
                </p>
                <div className="hire-card-cont">
                    {priceCards.map((card) => (
                        <PriceCard key={card.title} card={card} />
                    ))}
                </div>

                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <h2 className="pt-1">My Process</h2>
                    <hr className="mx-auto" />

                    <div className="process-card-cont">
                        {process.map((step) => (
                            <ProcessCard card={step} />
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
