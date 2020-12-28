import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-about">
                    <h3>Adam White</h3>
                    <h4>Web Designer and Developer</h4>
                    <hr />
                    <p>
                        Freelance web designer and developer based in Stockport,
                        UK. I'm passionate about all things web design and am
                        here to help small businesses improve their web
                        presence.
                    </p>
                </div>

                <div className="link-cont">
                    <div className="row-1">
                        <a
                            href="https://www.linkedin.com/in/adam-white-781aa2168"
                            rel="noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto:info@adamwhite.tech" rel="noopener">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                style={{ padding: "0.05em" }}
                            />
                        </a>
                    </div>
                    <div className="row-2">
                        <Link to="/privacy-policy">Privacy Policy</Link>|
                        <a>Working With Me</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
