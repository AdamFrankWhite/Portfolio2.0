import React, { useState } from "react";
export default function PortfolioCard({
    card,
    // toggleModal,
    // showModal,
    selectedModal,
    setModal,
}) {
    return (
        <div
            className="website-card"
            onClick={() => {
                setModal(card);
            }}
        >
            {/* <div
                onClick={() => {
                    toggleModal(true);
                }}
            > */}
            <div className="card__face card__face--front">
                <img src={card.img} alt={`${card.name} image`} />
                <div className="card-front-content">
                    <h3>{card.name}</h3>
                    {/* <hr />
                        <p>{card.desc}</p> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
