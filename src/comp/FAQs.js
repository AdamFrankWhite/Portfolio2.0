import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle";
import SlideDown from "react-slidedown";
export default function FAQs() {
    const faqs = [
        {
            question: "Which package should I get?",
            answer:
                "If you want to keep costs low, and don't mind using a Wordpress theme template, go for the Standard package. If you would like a custom-built theme with some more advanced features, but still have the functionality of a Wordpress site, go for the Premium package. If you are particularly concerned about speed and performance, and are also keen on a unique, custom design, a site coded from scratch with the Bespoke package would be your best option.",
        },
        {
            question: "Will my website look good on mobile?",
            answer:
                "Mobile responsiveness is vital for a website - it is estimated that around 51% of web traffic is mobile. As such, it is essential that a website looks good and loads fast on a mobile, as well as looking good on both Android and Apple products. This comes as standard in all packages.",
        },
        {
            question: "Do I own the website?",
            answer:
                "100% yes. Once the project is complete and handed over, it is entirely owned by you.",
        },
        {
            question: "What is web hosting?",
            answer:
                "Web hosting is the server where your website files actually live. There are a few hosting companies that I recommend in particular.",
            // If you sign up with my affiliate link, you can get a discount on your hosting.
        },
        {
            question: "Do you provide web hosting?",
            answer:
                "I don't provive hosting myself, however I am happy to help guide you through setting it up yourself, so you are fully in control. I can do this through a screenshare. Typical prices range from £3-10/month, depending on the length of billing cycle.",
        },
        {
            question: "Should I get a Wordpress site?",
            answer:
                "Wordpress powers around 30% of the web - its popularity is partly down to its ease of use. As a CMS (Content Management System), you can easily add images and content to your site. If you are looking to update content yourself, a Wordpress site is a good option. However, if you would like all aspects of your site managed for you, I am happy to add/update content for you, as part of a maintainence plan.",
        },
        {
            question: "What do you need to get started?",
            answer:
                "Once we have arranged the project details, I'll need your logo, text content for the website & photos (I can provide stock photos). Professionally written copy and professional photographs help with making a website more effective. I can provide a logo branding service if you need a new logo designed for your business.",
        },
        {
            question: "Do you outsource?",
            answer:
                "I complete all work myself, so that I know every part of a project, from top to bottom. I'm based in Stockport, Cheshire.",
        },
        {
            question: "Do you use templates?",
            answer:
                "Only for the standard package is a customised theme template used. The premium and bespoke packages do not use templates. Whilst I may re-use individual components from time to time, all my work is custom-made, coded just for you.",
        },

        {
            question:
                "What is included in the quote? How do I know how much I'll have to pay?",
            answer:
                "I take pricing transparency seriously - no one wants to have a project cost keep on rising. The proposal I provide gives a detailed breakdown of the project scope, exactly what I will provide, how many rounds of revision and how much it costs - so you know exactly how much you are paying and what is included. Please note, however, anything extra outside the scope agreed in the proposal will be chargeable.",
        },
        {
            question: "How long will it take?",
            answer:
                "I get to work quickly; you can generally expect your site to be up and running within 3-4 weeks, depending on the size of the project and my outstanding project queue. I will be upfront with the timeline in your proposal.",
        },
        {
            question: "What sort of guarantee do I have?",
            answer:
                "I pride myself on excellent customer service. After I send you the proposal, I provide a contract outlining the project scope, costs, deliverables and timeline so that both parties can rest assured that things will go smoothly.",
        },
        {
            question: "What technology do you use?",
            answer:
                "I am comfortable with a variety of languages, frameworks and tools including HTML, CSS/SASS, JavaScript, React, Node/Express and Wordpress. I use Adobe XD for prototyping, VS Code my text editor, and XAMPP for PHP/Wordpress-based projects. In my spare time, I continue to learn and study to further enhance my skills.",
        },
        {
            question: "Why should I hire you?",
            answer:
                "As a freelance web developer, I have a solid understanding of the core programming languages that websites are built with: HTML, CSS, JavaScript and PHP. This means that I can create custom sites and features, improving performance, aesthetics and security. I also believe in frequent communication - no one wants any nasty surprises or disappearing contractors. I am committed to providing a quality experience from start to finish.",
        },
    ];
    // const toggleAnswer = (num) => {
    //     let questions = document.querySelectorAll(".question");
    //     //Prevent double-click highlight
    //     questions[num].addEventListener(
    //         "mousedown",
    //         function (e) {
    //             e.preventDefault();
    //         },
    //         false
    //     );

    //     let answers = document.querySelectorAll(".answer");
    //     let arrows = document.querySelectorAll(".question i");
    //     answers[num].classList.toggle("show");
    //     arrows[num].classList.toggle("flip");
    // };
    const questionToggles = Object.assign(
        {},
        faqs.map((faq) => {
            return false;
        })
    );
    useEffect(() => {
        console.log(answerToggle);
    });
    const [answerToggle, setAnswerToggle] = useState(questionToggles);
    return (
        <div className="faq-cont">
            <div className="flex-col">
                <FontAwesomeIcon icon={faQuestionCircle} />
                <h2 id="faqs">FAQs</h2>
            </div>
            <hr className="mx-auto" />
            {faqs.map((faq, index) => {
                return (
                    <>
                        <p
                            className="question"
                            onClick={() => {
                                setAnswerToggle({
                                    ...answerToggle,
                                    ...{
                                        [index]: !answerToggle[index],
                                    },
                                });
                            }}
                        >
                            {faq.question}
                            <i
                                className={
                                    answerToggle[index]
                                        ? "fa fa-chevron-circle-down flip"
                                        : "fa fa-chevron-circle-down"
                                }
                            ></i>
                        </p>
                        <SlideDown>
                            {answerToggle[index] && (
                                <p className="answer">{faq.answer}</p>
                            )}
                        </SlideDown>
                    </>
                );
            })}
        </div>
    );
}
