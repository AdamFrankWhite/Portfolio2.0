import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ServiceCard from "./ServiceCard";
import PriceCard from "./PriceCard";
import ProcessCard from "./ProcessCard";
export default function HireMe() {
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
                "I can help you set up your web hosting, hosted email and domain, as well as help maintain your webiste, uploading new content and security updates.",
        },
        {
            title: "Custom Web Development",
            imgPath: "/assets/icons/icons8-code-104.png",
            content:
                "Looking for add a custom feature to your website, like a slideshow, animation or contact form? Perhaps you already have a site that you would like re-designed or tweaking? I can help you set up a Wordpress website that you can update yourself, or if you want something a little more unique, I can create a site from the groundup, as a front-end developer. ",
        },
        // {
        //     title: "Wordpress Development",
        //     imgPath: "/assets/icons/icons8-wordpress-104.png",
        //     tabs: [
        //         "Wordpress Installation",
        //         "Custom Theme Development",
        //         "Plug-in management",
        //         "Theme Customisation"
        //     ]
        // },
        // {
        //     title: "Web Hosting/Maintainence",
        //     imgPath: "/assets/icons/icons8-launch-90.png",
        //     tabs: [
        //         "Web Hosting",
        //         "Domain Registration",
        //         "Domain Email",
        //         "SSL Certification"
        //     ]
        // },
        // {
        //     title: "Custom Web Development",
        //     imgPath: "/assets/icons/icons8-code-104.png",
        //     tabs: [
        //         "Custom HTML/CSS/JavaScript",
        //         "Coded from scratch",
        //         "Node.js",
        //         "React/Redux"
        //     ]
        // }
    ];

    const process = [
        {
            icon: "/assets/icons/icons8-chat-240.png",
            title: "1. Connect and discuss",
            content:
                "Firstly, we’ll have a chat about your business and figure out exactly what kind of website you'll need, your goals and your preferred features.",
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
                "After narrowing down your design, I will develop your website from scratch, using the latest web technology to create a beautiful, functional, secure site.",
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
            title: "Standard",
            imgPath: "/assets/icons/icons8-wordpress-104.png",
            tabs: [
                "Wordpress theme template",
                "Mobile Responsive",
                "Theme Customisation",
                "Social Media Integration",
                "Contact Form",
                "Google Maps",
                "Photo Sourcing",
                "2 rounds of revision",
            ],
            price: 499,
        },
        {
            title: "Premium",
            imgPath: "/assets/icons/icons8-wordpress-104.png",
            tabs: [
                "Custom-made Wordpress theme",
                "Mobile Responsive",
                "Social Media Integration",
                "Contact Form",
                "Google Maps",
                "Photo Sourcing",
                "2 rounds of revision",
            ],
            price: 999,
        },
        {
            title: "Bespoke",
            imgPath: "/assets/icons/icons8-code-104.png",
            tabs: [
                "Coded from scratch",
                "Tailor-made solution",
                "Mobile Responsive",
                "Social Media Integration",
                "Contact Form",
                "Google Maps",
                "Photo Sourcing",
                "3 rounds of revision",
            ],
            price: 1499,
        },
    ];
    return (
        <section id="hire-me" className="about slide-in">
            <div className="frame-content">
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <div className="hire-title-cont">
                        <h2>Hire Me</h2>
                        <hr className="full-width" />
                    </div>
                    <br />
                    <h2 className="text-center">Services</h2>
                    <hr style={{ margin: "auto" }} />
                    <div className="service-card-cont">
                        {servicesCards.map((card) => (
                            <ServiceCard card={card} />
                        ))}
                    </div>
                    <h2>What I Can Do For You</h2>
                    <hr />
                    <p>
                        I strive to create visually pleasing, well-designed
                        sites. I pay close attention to detail - fully
                        responsive layouts, avoiding image display issues and
                        visual bugs is something I take pride in.
                    </p>
                    <p>
                        If you are looking for a bespoke, stand-alone site, or a
                        managable Wordpress site, or custom theme, I'd be happy
                        to help. Or, if you are looking for someone to edit and
                        improve a pre-existing site or page, that's also
                        something I'd be happy to help with. If it's something
                        else, I'm always up for a challenge - let me know and
                        I'll see if I am able to help.
                    </p>
                    <h2>FAQs</h2>
                    <hr />
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <p>Do you outsource?</p>
                    <h2>My Process</h2>
                    <hr />
                    <div className="process-card-cont">
                        {process.map((step) => (
                            <ProcessCard card={step} />
                        ))}
                    </div>
                </ScrollAnimation>
                <p>
                    I will work with you to understand your business needs and
                    the type of site you require (brochure, blog, e-commerce,
                    editable content).
                </p>
                <p>
                    Following an initial consultation, I'll send you a proposal,
                    containing a quote and basic overview of the project.
                </p>
                <ol>
                    <li>
                        Initial Consultation (email, phone, zoom or in-person)
                    </li>
                    <li>
                        Price Quote or Proposal (watch:
                        https://www.youtube.com/watch?v=g4sxe...)
                    </li>
                    <li>
                        Statement of Work aka SOW (watch:
                        https://www.youtube.com/watch?v=GKKG_...)
                    </li>
                    <li>
                        Website Design Contract (watch:
                        https://www.youtube.com/watch?v=SGa1X...)
                    </li>
                    <li>Non-Refundable 50% Deposit</li>
                    <li>
                        Deep Dive w/ Client (Sitemap, set goals, expectations
                        and review sites together)
                    </li>
                    <li>Submit 5-10 Templates or a 2 page Custom Mock-up </li>
                    <li>
                        Request Content (including but not limited to logo,
                        brand guidelines, images, text content) w/ dropbox
                        folders{" "}
                    </li>
                    <li>
                        A Developer is given the project and website is started
                        on our server.
                    </li>
                    <li>
                        Client is provided 1st look at dev. link and we request
                        revisions (on desktop only).
                    </li>
                    <li>
                        Next payment of 25% is required to move forward with
                        revisions.
                    </li>
                    <li>
                        Client provides second and last set of revisions. We
                        make the changes.
                    </li>
                    <li>
                        Client is given a final review of site on desktop for
                        approval.
                    </li>
                    <li>
                        Once desktop is approved mobile responsiveness is
                        completed.
                    </li>
                    <li>
                        Testing Website on multiple, browsers, devices, screen
                        sizes, contact forms, navigation items, hyperlinks,
                        social media, anchor texts.
                    </li>
                    <li>Client pays remainder of balance (25%).</li>
                    <li>
                        We migrate site to clients hosting server (or hand over
                        files).
                    </li>
                    <li>
                        An email with login’s and passwords provided to client.
                    </li>
                    <li>
                        Client is offered additional services and/or 1-on-1
                        tutorial with developer for $120 per hour.
                    </li>
                    <li>
                        Client has 7 days to review and notify us of any errors
                        free. Updates fixed free of charge.
                    </li>
                </ol>
                <h2>What Tech Do You Use?</h2>
                <hr />
                <p>
                    I am comfortable with a variety of languages, frameworks and
                    tools including HTML, CSS/SASS, JavaScript, React,
                    Node/Express and Wordpress. I use Adobe XD for prototyping,
                    VS Code for most projects, and XAMPP for PHP/Wordpress-based
                    projects.
                </p>

                <h2>Pricing</h2>
                <hr />
                <div className="hire-card-cont">
                    {priceCards.map((card) => (
                        <PriceCard card={card} />
                    ))}
                </div>
                <p>
                    I charge by the project, depending on the complexity and
                    individual requirements. As a general guide, my prices are
                    as follows: a simple brochure-style Wordpress site from
                    £495, a bespoke custom site from £1295.
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
            </div>
        </section>
    );
}
