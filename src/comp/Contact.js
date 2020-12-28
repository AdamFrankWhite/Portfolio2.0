import React from "react";
import ContactForm from "./ContactForm";
import ScrollAnimation from "react-animate-on-scroll";
export default function Contact() {
    return (
        <div id="contact" className="contact slide-in">
            <div className="frame-content">
                <ScrollAnimation
                    animateIn="fadeIn"
                    offset={250}
                    duration={0.75}
                    animateOnce={true}
                >
                    <div className="contact-content">
                        <h2 className="section-title">Contact</h2>
                        <hr className="full-width" />
                        <p>
                            If you have a project you'd like me to help out
                            with, please do get in touch. You can reach me{" "}
                            <a
                                className="link"
                                href="mailto:info@adamwhite.tech"
                            >
                                here
                            </a>
                            , or send me a message using the form.
                        </p>
                    </div>

                    <ContactForm />
                </ScrollAnimation>
            </div>
        </div>
    );
}
