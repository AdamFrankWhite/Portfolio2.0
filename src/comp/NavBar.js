import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useMediaQuery } from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
export default function NavBar() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 727px)" });
    const [stickyNav, showStickyNav] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        // <ScrollAnimation animateIn="fadeInDown" duration={0.75} delay={1300}>
        <header>
            <NavLink to="/">
                <div className="title-name home-link">
                    <img src="/assets/icons/aw_logo.png" alt="AW logo" />
                    <div>
                        <h1>Adam White</h1>
                        <h2>Web Designer</h2>
                    </div>
                </div>
            </NavLink>

            <nav>
                <span
                    onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}
                    className="toggle-menu"
                >
                    menu
                </span>
                {isTabletOrMobile ? (
                    <SlideDown className={"my-dropdown-slidedown"}>
                        <ul className={showMobileMenu ? "" : "hide"}>
                            <a href="/#portfolio" rel="noopener">
                                <li className="tab-link">Portfolio</li>
                            </a>
                            <NavLink to="/blog">
                                <li className="tab-link">Blog</li>
                            </NavLink>
                            <a href="/#hire-me" rel="noopener">
                                <li className="tab-link">Hire Me</li>
                            </a>
                            <a href="/#about" rel="noopener">
                                <li className="tab-link">About</li>
                            </a>
                            <a href="/#contact" rel="noopener">
                                <li className="tab-link">Contact</li>
                            </a>
                        </ul>
                    </SlideDown>
                ) : (
                    <ul>
                        <a href="/#portfolio" rel="noopener">
                            <li className="tab-link">Portfolio</li>
                        </a>
                        <NavLink to="/blog">
                            <li className="tab-link">Blog</li>
                        </NavLink>
                        <a href="/#hire-me" rel="noopener">
                            <li className="tab-link">Hire Me</li>
                        </a>
                        <a href="/#about" rel="noopener">
                            <li className="tab-link">About</li>
                        </a>
                        <a href="/#contact" rel="noopener">
                            <li className="tab-link">Contact</li>
                        </a>
                    </ul>
                )}
            </nav>
        </header>
        // </ScrollAnimation>
    );
}
