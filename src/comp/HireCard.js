import React from "react";

export default function HireCard(props) {
    return (
        <div className="hire-card">
            <img src={props.card.imgPath} alt={props.card.name} />
            <h3>{props.card.title}</h3>
            <ul>
                {props.card.tabs.map(tab => (
                    <li>{tab}</li>
                ))}
            </ul>
        </div>
    );
}
