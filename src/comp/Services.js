import React from "react";
import ServiceCard from "./ServiceCard";

import ScrollAnimation from "react-animate-on-scroll";
export default function Services() {
    const servicesCards = [
        {
            title: "Web Design",
            imgPath: "/assets/icons/icons8-design-100.png",
            content:
                "Looking for a website? Whether you know exactly what you want, or if you need some guidance and friendly advice, I can help. Perhaps you already have a site that you would like re-designed or tweaking? I can help you set up a Wordpress website that you can update yourself, or if you want something a little more unique, I can create a site from the groundup, as a front-end developer. ",
        },
        {
            title: "Web Hosting/Maintainence",
            imgPath: "/assets/icons/icons8-launch-90.png",
            content:
                "I can help you set up your web hosting, hosted email and domain, as well as help maintain your website, uploading new content and security updates.",
        },
        {
            title: "Custom Web Development",
            imgPath: "/assets/icons/icons8-code-104.png",
            content:
                "Looking for add a custom feature to your website, like a slideshow, animation or contact form? Perhaps you already have a site that you would like re-designed or tweaking? I can help you set up a Wordpress website that you can update yourself, or if you want something a little more unique, I can create a site from the groundup, as a front-end developer. ",
        },
        {
            title: "SEO and Analytics",
            imgPath: "/assets/icons/icons8-web-analytics-128.png",
            content:
                "It is important to get noticed and to understand who your customers are and where they come from. I can help build SEO and get you the insights you need to help better understand and grow your business. I can also help set up Google Business Listing.",
        },
    ];
    return (
        <div className="frame-content" id="services">
            <h2>Services</h2>

            <div className="service-card-cont">
                {servicesCards.map((card, i) => (
                    <ScrollAnimation
                        animateIn={i % 2 !== 0 ? "fadeInLeft" : "fadeInRight"}
                        offset={250}
                        duration={1}
                    >
                        <ServiceCard card={card} i={i} />
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
}
