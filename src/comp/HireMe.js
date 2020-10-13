import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ServiceCard from "./ServiceCard";
import PriceCard from "./PriceCard";
import ProcessCard from "./ProcessCard";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
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

    const faqs = [
        {
            question: "Which package should I get?",
            answer:
                "If you want to keep costs low, and don't mind using a Wordpress theme template, go for the Standard package. If you would like a custom-built theme with some more advanced features, but still have the functionality of a Wordpress site, go for the Premium package. If you are particularly concerned about speed and performance, and are also keen on a unique, custom design, a site coded from scratch with the Bespoke package would be your best option.",
        },
        {
            question: "Will my website look good on mobile?",
            answer:
                "Mobile responsiveness is vital for a website - it is estimated that around 51% of web traffic is mobile. As such, it is vital that a website looks good and loads fast on a mobile, as well as looking good on both Android and Apple products.",
        },
        {
            question: "Should I get a Wordpress site?",
            answer:
                "Wordpress powers around 30% of the web - its popularity is partly down to its ease of use. As a CMS (Content Management System), you can easily add images and content to your site. If you are looking to update content yourself, a Wordpress site is a good option. However, if you would like all aspects of your site managed for you, I am happy to add/update content for you, as part of a maintainence plan.",
        },
        {
            question: "Do you outsource?",
            answer:
                "I complete all work myself, so that I know every part of a project, from top to bottom. I'm based in Stockport, Cheshire.",
        },
        {
            question: "Do you use templates?",
            answer:
                "Only for the standard package, a theme template is used - still customised though. The premium and bespoke packages do not use templates. Whilst I may re-use indivivual components from time to time, all my work is custom-made, coded just for you.",
        },
        {
            question: "Do you provide web hosting?",
            answer:
                " I don't provive hosting myself, however I am happy to help guide you through setting it up yourself, so you are fully in control. I can do this through a screenshare.",
        },
        {
            question:
                "What is included in the quote? How do I know how much I'll have to pay?",
            answer:
                "I take pricing transparency seriously - no one wants to have a project cost keep on rising. The proposal I provide gives a detailed breakdown of the project scope, exactly what I will provide, how many rounds of revision and how much it costs - so you know exactly how much you are paying and what is included. Please note, however, anything extra outside the scope outlined in the proposal, will require extra costs.",
        },
        {
            question: "How long will it take?",
            answer:
                "I get to work quickly; you can generally expect your site to be up and running within 2-4 weeks, depending on the size of the project and my outstanding project queue. I will be upfront with the timeline in your proposal.",
        },
        {
            question: "What sort of guarantee do I have?",
            answer:
                "I pride myself on excellent customer service. After I send you the proposal, I provide a contract outlining the project scope, costs, deliverables and timeline so that both parties can rest assured that things will go smoothly.",
        },
        {
            question: "What technology do you use?",
            answer:
                "I am comfortable with a variety of languages, frameworks and tools including HTML, CSS/SASS, JavaScript, React, Node/Express and Wordpress. I use Adobe XD for prototyping, VS Code for most projects, and XAMPP for PHP/Wordpress-based projects.",
        },
        {
            question: "Why should I hire you?",
            answer:
                "As a freelance web developer, I have a solid understanding of the core programming languages that websites are built with: HTML, CSS, JavaScript and PHP. This means that I can create custom sites and features and alter how a site runs, improving performance, aesthetics and security. I also believe in frequent communication - no one wants any nasty surprises or disappearing contractors.",
        },
    ];

    const toggleAnswer = (num) => {
        let questions = document.querySelectorAll(".question");
        //Prevent double-click highlight
        questions[num].addEventListener(
            "mousedown",
            function (e) {
                e.preventDefault();
            },
            false
        );

        let answers = document.querySelectorAll(".answer");
        let arrows = document.querySelectorAll(".question i");
        answers[num].classList.toggle("show");
        arrows[num].classList.toggle("flip");
        console.log(answers[num]);
    };
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
                        <hr className="full-width" />
                    </div>
                    <br />
                    <p>
                        I have a passion for web development and making
                        user-friendly, beautiful websites that help businesses
                        achieve their goals.
                    </p>
                    <p>
                        Whether you are looking for a brand new website, a
                        re-design, or would like new features integrating into
                        your current site, I'm here to help.
                    </p>
                    <h2>Services</h2>
                    <hr />

                    <div className="service-card-cont">
                        {servicesCards.map((card) => (
                            <ServiceCard card={card} />
                        ))}
                    </div>
                    {/* <h2>What I Can Do For You</h2>
                    <hr /> */}

                    {/* <p>
                        If you are looking for a bespoke, stand-alone site, or a
                        managable Wordpress site, or custom theme, I'd be happy
                        to help. Or, if you are looking for someone to edit and
                        improve a pre-existing site or page, that's also
                        something I'd be happy to help with. If it's something
                        else, I'm always up for a challenge - let me know and
                        I'll see if I am able to help.
                    </p> */}
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                >
                    <h2>FAQs</h2>
                    <hr />
                    {faqs.map((faq, index) => {
                        return (
                            <>
                                <p
                                    className="question"
                                    onClick={() => {
                                        toggleAnswer(index);
                                    }}
                                >
                                    {faq.question}
                                    <i class="fa fa-chevron-circle-down"></i>
                                </p>
                                <p className="answer">{faq.answer}</p>
                            </>
                        );
                    })}
                    <h2>My Process</h2>
                    <hr />
                    <div className="process-card-cont">
                        {process.map((step) => (
                            <ProcessCard card={step} />
                        ))}
                    </div>
                </ScrollAnimation>

                {/* <ol>
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
                </ol> */}

                <h2 id="pricing">Pricing</h2>
                <hr />
                <p>
                    I charge by the project, depending on the complexity and
                    individual requirements. As a general guide, I offer three
                    core packages:
                </p>
                <div className="hire-card-cont">
                    {priceCards.map((card) => (
                        <PriceCard card={card} />
                    ))}
                </div>

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
