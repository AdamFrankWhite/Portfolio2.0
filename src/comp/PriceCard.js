import React from "react";

export default function PriceCard(props) {
    return (
        <div className="hire-card">
            <img src={props.card.imgPath} alt={`${props.card.title} icon`} />
            <h3 className={props.card.title}>{props.card.title}</h3>
            <h2 className="subtitle">{props.card.subtitle}</h2>
            <p>{props.card.desc}</p>

            <span>from</span>
            <h3 class="price">£{props.card.price}</h3>
            <a href="#contact">Contact me now</a>
        </div>
    );
}
