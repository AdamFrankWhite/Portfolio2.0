import React, { useState } from "react";
export default function PortfolioCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardClasses = "card " + (isFlipped ? "is-flipped" : "");
    const cardContent = props.card.text.map(para => <p>{para}</p>);
    return (
        <div className="website-card">
            <div
                className={cardClasses}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="card__face card__face--back">
                    <div>
                        <a target="_blank" href={props.card.link}>
                            View Site
                        </a>
                        |
                        <a target="_blank" href={props.card.code}>
                            View Code
                        </a>
                    </div>
                    <h4>{props.card.tech}</h4>
                    <hr />
                    {cardContent}
                </div>
                <div
                    className="card__face card__face--front"
                    style={{
                        backgroundImage: "url(" + props.card.img + ")"
                    }}
                >
                    <h3>{props.card.name}</h3>
                    <hr />
                    <p>{props.card.desc}</p>
                </div>
            </div>
        </div>
    );
}
