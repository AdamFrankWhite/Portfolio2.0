import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function ContactUs() {
    const [mailStatus, setMailStatus] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    function sendEmail(e) {
        setMailStatus("Sending");
        e.preventDefault();

        emailjs
            .send(
                "gmail",
                "template_PE0yq4MZ",
                { name, email, message },
                "user_wX2G7BuTDkcHkqSyCMvuU"
            )
            .then(
                result => {
                    console.log(result.text);
                    setMailStatus("Sent");
                },
                error => {
                    console.log(error.text);
                    setError(error.text);
                }
            );
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input
                type="text"
                name="user_name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label>Email</label>
            <input
                type="email"
                name="user_email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <div className="email-result">
                {mailStatus === "Sending" && (
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={25}
                        width={25}
                        timeout={3000} //3 secs
                    />
                )}
                {mailStatus === "Sent" && <p className="sent">Message Sent</p>}
                {error && <span>{error}</span>}
            </div>
            {mailStatus == "" && <input type="submit" value="Send" />}
        </form>
    );
}
