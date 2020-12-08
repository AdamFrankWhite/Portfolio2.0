import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <h3>Adam White</h3>
                    <h4>Freelance Web Developer</h4>
                    <hr />
                    <a href="mailto:info@adamwhite.tech" rel="noopener">
                        info@adamwhite.tech
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
