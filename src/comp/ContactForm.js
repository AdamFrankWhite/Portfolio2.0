import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function ContactUs() {
    const [mailStatus, setMailStatus] = useState("");

    function sendEmail(e) {
        setMailStatus("Sending");
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_PE0yq4MZ",
                e.target,
                "user_wX2G7BuTDkcHkqSyCMvuU"
            )
            .then(
                result => {
                    console.log(result.text);
                    setMailStatus("Sent");
                },
                error => {
                    console.log(error.text);
                    setMailStatus(error.text);
                }
            );
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            {mailStatus === "Sending" && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            {mailStatus === "Sent" && <p className="sent">&#9989; Sent</p>}
        </form>
    );
}
