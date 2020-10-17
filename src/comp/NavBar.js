import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 727px)" });
    const [stickyNav, showStickyNav] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header>
            <NavLink to="/">
                <div className="title-name home-link">
                    <h1>Adam White</h1>
                    <h2>Freelance Web Designer</h2>
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
                            <a href="/#portfolio">
                                <li className="tab-link">Portfolio</li>
                            </a>
                            <NavLink to="/blog">
                                <li className="tab-link">Blog</li>
                            </NavLink>
                            <a href="/#hire-me">
                                <li className="tab-link">Hire Me</li>
                            </a>
                            <a href="/#about">
                                <li className="tab-link">About</li>
                            </a>
                            <a href="/#contact">
                                <li className="tab-link">Contact</li>
                            </a>
                        </ul>
                    </SlideDown>
                ) : (
                    <ul>
                        <a href="/#portfolio">
                            <li className="tab-link">Portfolio</li>
                        </a>
                        <NavLink to="/blog">
                            <li className="tab-link">Blog</li>
                        </NavLink>
                        <a href="/#hire-me">
                            <li className="tab-link">Hire Me</li>
                        </a>
                        <a href="/#about">
                            <li className="tab-link">About</li>
                        </a>
                        <a href="/#contact">
                            <li className="tab-link">Contact</li>
                        </a>
                    </ul>
                )}
            </nav>
        </header>
    );
}
