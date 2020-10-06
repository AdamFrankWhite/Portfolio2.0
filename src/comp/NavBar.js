import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useMediaQuery } from "react-responsive";
export default function NavBar() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 727px)" });

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <header className="header-1">
            <NavLink to="/">
                <div className="title-name home-link">
                    <h1>Adam White</h1>
                    <h2>UX/UI Designer and Web Developer</h2>
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
                            <NavLink to="/portfolio">
                                <li className="tab-link">Portfolio</li>
                            </NavLink>
                            <NavLink to="/blog">
                                <li className="tab-link">Blog</li>
                            </NavLink>
                            <NavLink to="/hire-me">
                                <li className="tab-link">Hire Me</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li className="tab-link">About</li>
                            </NavLink>
                            <NavLink to="/contact">
                                <li className="tab-link">Contact</li>
                            </NavLink>
                        </ul>
                    </SlideDown>
                ) : (
                    <ul>
                        <NavLink to="/portfolio">
                            <li className="tab-link">Portfolio</li>
                        </NavLink>
                        <NavLink to="/blog">
                            <li className="tab-link">Blog</li>
                        </NavLink>
                        <NavLink to="/hire-me">
                            <li className="tab-link">Hire Me</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li className="tab-link">About</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li className="tab-link">Contact</li>
                        </NavLink>
                    </ul>
                )}
            </nav>
        </header>
    );
}
