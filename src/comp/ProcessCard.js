import React from "react";

export default function ProcessCard(props) {
    return (
        <div className="process-card">
            <div className="process-card-head">
                <img
                    src={props.card.icon}
                    alt={`${props.card.name} icon`}
                ></img>
                <h3>{props.card.title}</h3>
            </div>
            <p>{props.card.content}</p>
        </div>
    );
}
