import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="header-1">
            <div className="title-name home-link">
                <h1>Adam White</h1>
                <h2>UX/UI Designer and Web Developer</h2>
            </div>

            <nav>
                <ul>
                    <NavLink to="/">
                        <li className="tab-link">Home</li>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <li className="tab-link">Portfolio</li>
                    </NavLink>
                    <NavLink to="/blog">
                        <li className="tab-link">Blog</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="tab-link">About</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li className="tab-link">Contact</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}
