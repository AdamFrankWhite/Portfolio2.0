import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
import SlideDown from "react-slidedown";

export default function PortfolioCard({
    card,
    // toggleModal,
    // showModal,
    selectedModal,
    setModal,
}) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 964px)" });
    return (
        <div
            className="website-card"
            onClick={() => {
                !isTabletOrMobile && setModal(card);
            }}
        >
            {isTabletOrMobile ? (
                <a href={card.link}>
                    <div className="card__face card__face--front">
                        <img src={card.img} alt={`${card.name} image`} />
                        <div className="card-front-content">
                            <h3>{card.name}</h3>
                            {isTabletOrMobile && (
                                <>
                                    <hr />
                                    <p>{card.desc}</p>
                                </>
                            )}
                        </div>
                    </div>
                </a>
            ) : (
                <div className="card__face card__face--front">
                    <img src={card.img} alt={`${card.name} image`} />
                    <div className="card-front-content">
                        <h3>{card.name}</h3>
                        {isTabletOrMobile && (
                            <>
                                <hr />
                                <p>{card.desc}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
            {/* </div> */}
        </div>
    );
}
