import React from "react";
import ServiceCard from "./ServiceCard";
import { useMediaQuery } from "react-responsive";

import ScrollAnimation from "react-animate-on-scroll";
export default function Services() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 964px)" });
    const servicesCards = [
        {
            title: "Web Design",
            imgPath: "/assets/icons/icons8-design.svg",
            content:
                "Looking for a website re-design? Or perhaps a brand new website? Whether you know exactly what you want, or if you need some guidance and friendly advice, I can help.  I can help you set up a Wordpress website that you can update yourself, or if you want something a bit more unique , I can develop a custom site from scratch.",
        },
        {
            title: "Setup",
            imgPath: "/assets/icons/icons8-launch.svg",
            content:
                "I can help you set up your web hosting, hosted email and domain, as well as help maintain your website, upload new content and manage any necessary security updates.",
        },
        {
            title: "Custom Web Development",
            imgPath: "/assets/icons/icons8-code.svg",
            content:
                "Looking for add a custom feature to your website, like a popup, slideshow, animation or contact form? Perhaps you have a specific vision for your site and don't want to use Wordpress and would like a site built from scratch. I'm here to help.",
        },
        {
            title: "SEO and Analytics",
            imgPath: "/assets/icons/icons8-web-analytics.svg",
            content:
                "It is important to get noticed and to understand who your customers are and where they come from. I can help advise you on how to build SEO and get you the insights you need to help better understand and grow your business. I can also help set up a Google Business Listing.",
        },
    ];

    return (
        <section id="services">
            <div className="frame-content">
                <h2>Services</h2>
                <ScrollAnimation
                    animateIn="fadeInLeft"
                    initiallyVisible={false}
                    offset={350}
                    duration={1}
                    animateOnce={true}
                >
                    <div className="service-card-cont">
                        {servicesCards.map((card) => (
                            <ServiceCard card={card} />
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
