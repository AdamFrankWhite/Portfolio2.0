import React from "react";
import ContactForm from "./ContactForm";
export default function Contact() {
    return (
        <div className="contact slide-in">
            <div className="frame-content">
                <div className="contact-content">
                    <h2>Contact</h2>
                    <p>
                        If you have a project you'd like me to help out with,
                        please do get in touch.
                    </p>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}
