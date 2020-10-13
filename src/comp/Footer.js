import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <h3>Adam White</h3>
                    <h4>Freelance Web Developer</h4>
                    <h4>&copy; 2020</h4>
                </div>
                <div>
                    <div className="link-cont">
                        <p>Privacy Policy</p>|<p>Working With Me</p>
                    </div>
                    <a href="mailto:info@adamwhite.tech">info@adamwhite.tech</a>
                </div>
            </div>
        </footer>
    );
}
