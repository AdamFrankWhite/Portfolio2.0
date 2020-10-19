import React from "react";

export default function PriceCard(props) {
    return (
        <div className="hire-card">
            <img src={props.card.imgPath} alt={props.card.name} />
            <h3 className={props.card.title}>{props.card.title}</h3>
            <p>{props.card.desc}</p>
            <ul>
                {props.card.tabs.map((tab) => (
                    <li>{tab}</li>
                ))}
            </ul>
            <span>from</span>
            <h3 class="price">£{props.card.price}</h3>
            <a href="#contact">Contact me now</a>
        </div>
    );
}
