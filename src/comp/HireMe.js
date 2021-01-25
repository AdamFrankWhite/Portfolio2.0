import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import PriceCard from "./PriceCard";
import { useMediaQuery } from "react-responsive";
import ProcessCard from "./ProcessCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function HireMe() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 964px)" });
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
            icon: "/assets/icons/icons8-rocket-240.png",
            title: "4. Launch and on-going support",
            content:
                "Once launched, you'll receive any required training and support to help you get the most from your site. I will also be available for long-term support and updates.",
        },
    ];

    const priceCards = [
        {
            title: "basic",
            imgPath: "/assets/icons/icons8-web-design-208.png",
            desc:
                "The most cost-effective web design package, popular for small businesses, sole traders, community groups and landing pages. All core web design features included.",
            subtitle: "up to 5 pages",
            price: 399,
        },
        {
            title: "standard",
            imgPath: "/assets/icons/icons8-site-quality-warranty-250.png",
            desc:
                "Geared towards small businesses with more content, a multi-page site helps present your company in a professional manner, on an affordable budget. Add more content than the standard package.",
            subtitle: "up to 10 pages",
            price: 799,
        },
        {
            title: "bespoke",
            imgPath: "/assets/icons/icons8-code-208-gold.png",
            desc:
                "The best choice if you want a large multi-page website with in-depth custom design. Also great for SEO, our bespoke package allows you to create a powerful website with advanced features.",
            subtitle: "unlimited pages",
            price: 1299,
        },
    ];
    const tabs = [
        "Custom Design",
        "Responsive design (mobile/tablet/desktop)",
        "Optimised Performance",
        "Social Media Integration",
        "Basic SEO",
        "Contact Form",
        "Favicon and icons",
        "Free stock images",
        "2 rounds of revision",
    ];
    const optionalTabs = [
        "Gallery",
        "Slideshow",
        "Popup",
        "Widget integration (e.g. Yell Reviews)",
        "Sticky navigation",
        "Email/Newsletter signup form",
        "Premium stock images/graphics",
        "Embedded Google Maps",
        "Google My Business Listing",
        "Extra revisions",
        "Animations",
    ];
    return (
        <>
            <section id="hire-me" className="about">
                <div className="frame-content">
                    <ScrollAnimation
                        animateIn="fadeIn"
                        offset={150}
                        duration={0.75}
                        animateOnce={true}
                    >
                        <div className="hire-title-cont">
                            <h2 className="section-title">Hire Me</h2>
                            <hr className="mr-auto" />
                        </div>
                        <br />
                        <div className="hire-intro mr-auto">
                            <p>
                                I have a passion for web development and making
                                user-friendly, beautiful websites that help
                                businesses achieve their goals.
                            </p>
                            <p>
                                Whether you are looking for a brand new website,
                                a re-design, or would like new features
                                integrating into your current site, I'm here to
                                help.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <section id="packages" className="packages">
                <div className="frame-content">
                    <ScrollAnimation
                        animateIn="fadeIn"
                        offset={150}
                        duration={0.75}
                        animateOnce={true}
                    >
                        <h2 id="pricing">Packages</h2>
                        <hr className="mx-auto" />
                    </ScrollAnimation>
                    <div className="hire-card-cont">
                        {priceCards.map((card, i) => (
                            <ScrollAnimation
                                animateIn="fadeIn"
                                offset={150}
                                duration={0.75}
                                delay={isTabletOrMobile ? 0 : i * 500}
                                animateOnce={true}
                            >
                                <PriceCard key={card.title} card={card} />
                            </ScrollAnimation>
                        ))}
                    </div>
                    <div className="package-cont">
                        <div className="package-details">
                            <div className="package-details-list">
                                <ScrollAnimation
                                    animateIn="fadeIn"
                                    offset={150}
                                    duration={0.75}
                                    animateOnce={true}
                                >
                                    <h2>What's included?</h2>
                                    <ul>
                                        {tabs.map((tab) => (
                                            <li>
                                                {tab}
                                                <FontAwesomeIcon
                                                    icon={faCheckCircle}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollAnimation>
                            </div>
                            <div className="package-details-list">
                                <ScrollAnimation
                                    animateIn="fadeIn"
                                    offset={150}
                                    duration={0.75}
                                    animateOnce={true}
                                >
                                    <h2>Extra features</h2>
                                    <ul>
                                        {optionalTabs.map((tab) => (
                                            <li>
                                                {tab}
                                                <FontAwesomeIcon
                                                    icon={faPlusCircle}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="hire-intro">
                        <ScrollAnimation
                            animateIn="fadeIn"
                            offset={150}
                            duration={0.75}
                            animateOnce={true}
                        >
                            <h3>Please Note</h3>
                            <p>
                                - I charge by the project, depending on the
                                complexity and individual requirements. As a
                                general guide, I offer three core packages,
                                listed below. All projects are customisable.
                            </p>
                            <p>
                                - For smaller jobs and consultancy, I charge an
                                hourly rate of £30/hour.
                            </p>
                            <p>
                                - Please note, I require 50% deposit before
                                beginning the project, and 50% on completion,
                                before the site is made live and handed over
                            </p>
                        </ScrollAnimation>
                    </div>
                    <h2 className="pt-1">What to expect</h2>
                    <hr className="mx-auto" />
                    <div className="process-card-cont">
                        {process.map((step, i) => (
                            <ScrollAnimation
                                animateIn="fadeIn"
                                offset={150}
                                duration={0.75}
                                delay={isTabletOrMobile ? 0 : i * 500}
                                animateOnce={true}
                            >
                                <ProcessCard card={step} />
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
