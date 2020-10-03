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
                        src="assets/icons/icons8-smartphone-tablet-256.png"
                        alt="tree"
                    />
                    <img
                        className="laptop"
                        src="assets/icons/icons8-laptop-400.png"
                        alt="tree"
                    />

                    <img
                        className="monitor"
                        src="assets/icons/icons8-monitor-400.png"
                        alt="tree"
                    />
                </div>
                <div className="block-div"></div>
            </div>
        </section>
    );
}
