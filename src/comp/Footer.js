import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <h3>Adam White</h3>
                    <h4>Freelance Web Developer</h4>
                    <hr />
                    <a
                        href="https://www.linkedin.com/in/adam-white-781aa2168"
                        rel="noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:info@adamwhite.tech" rel="noopener">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </a>
                </div>
                {/* <div>
                    <div className="link-cont">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        |<p>Working With Me</p>
                    </div> 
                    
                </div> */}
            </div>
        </footer>
    );
}
