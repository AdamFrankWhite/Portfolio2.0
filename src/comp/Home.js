import React from "react";

export default function Home() {
    return (
        <section className="home slide-in">
            <div className="main">
                <h2 className="headline">
                    I create minimalist, functional, responsive, cross-browser
                    web sites and apps
                </h2>
                <div className="icon-cont">
                    <img
                        className="tablet-mobile"
                        src="assets/icons/icons8-smartphone-tablet.svg"
                        alt="tree"
                    />
                    <img
                        className="laptop"
                        src="assets/icons/icons8-laptop.svg"
                        alt="tree"
                    />

                    <img
                        className="monitor"
                        src="assets/icons/icons8-monitor.svg"
                        alt="tree"
                    />
                </div>
                <div className="block-div"></div>
            </div>
        </section>
    );
}
