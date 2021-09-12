import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
export default function NavBar() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 727px)" });
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
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
                    <FontAwesomeIcon icon={faBars} />
                </span>
                {isTabletOrMobile ? (
                    <SlideDown className={"my-dropdown-slidedown"}>
                        <ul className={showMobileMenu ? "" : "hide"}>
                            <li className="tab-link">
                                <a href="/#portfolio" rel="noopener">
                                    Portfolio
                                </a>
                            </li>

                            <li className="tab-link">
                                <a href="/#hire-me" rel="noopener">
                                    Hire Me
                                </a>
                            </li>

                            <li className="tab-link">
                                <a href="/#contact" rel="noopener">
                                    Contact{" "}
                                </a>
                            </li>
                        </ul>
                    </SlideDown>
                ) : (
                    <ul>
                        <li className="tab-link">
                            {" "}
                            <a href="/#portfolio" rel="noopener">
                                Portfolio{" "}
                            </a>
                        </li>

                        <li className="tab-link">
                            {" "}
                            <a href="/#hire-me" rel="noopener">
                                Hire Me{" "}
                            </a>
                        </li>

                        <li className="tab-link tab-contact">
                            {" "}
                            <a href="/#contact" rel="noopener">
                                Contact{" "}
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
