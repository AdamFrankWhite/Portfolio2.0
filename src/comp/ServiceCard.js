import React from "react";

export default function ServiceCard(props) {
    return (
        <div className="service-card">
            <div className="service-card-head">
                <img src={props.card.imgPath} alt={props.card.name} />
                <h3>{props.card.title}</h3>
            </div>
            <p>{props.card.content}</p>
        </div>
    );
}
