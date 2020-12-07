import React, { useState } from "react";
export default function PortfolioCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardClasses = "card " + (isFlipped ? "is-flipped" : "");
    const cardContent = props.card.text.map((para) => <p>{para}</p>);
    return (
        <div className="website-card">
            <div
                className={cardClasses}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="card__face card__face--back">
                    <div className="title-cont">
                        <a target="_blank" href={props.card.link}>
                            View Site
                        </a>
                        |
                        <a target="_blank" href={props.card.code}>
                            View Code
                        </a>
                    </div>
                    <h4>Built with {props.card.tech}</h4>
                    <hr />
                    {cardContent}
                </div>
                <div
                    className={`card__face card__face--front care__${props.card.bgClass}`}
                    style={{
                        background:
                            "url(" + props.card.img + ") no-repeat center top",
                        backgroundSize: "contain",
                    }}
                >
                    <div className="card-front-content">
                        <h3>{props.card.name}</h3>
                        {/* <hr />
                        <p>{props.card.desc}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
