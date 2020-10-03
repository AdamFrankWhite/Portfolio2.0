import React from "react";

export default function PortfolioCard(props) {
    return (
        <div class="website-card">
            <div class="card">
                <div class="card__face card__face--back">
                    <div>
                        <a target="_blank" href={props.website.link}>
                            View Site
                        </a>
                        |
                        <a target="_blank" href={props.website.code}>
                            View Code
                        </a>
                    </div>
                    <h4>{props.website.tech}</h4>
                    <hr />
                    {props.website.text.map(para => <p>{para}</p>).join("")}
                </div>
                <div
                    class="card__face card__face--front"
                    style={{
                        backgroundImage: "url(" + props.website.img + ")"
                    }}
                >
                    <h3>{props.website.name}</h3>
                    <hr />
                    <p>{props.website.desc}</p>
                </div>
            </div>
        </div>
    );
}
