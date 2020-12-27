import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function ServiceCard(props) {
    const [hover, setHover] = useState(false);
    return (
        <div className="service-card">
            <div className="service-card-head">
                <img src={props.card.imgPath} alt={props.card.name} />
                <h3>{props.card.title}</h3>
            </div>
            <p className="text-show">{props.card.content}</p>
        </div>
    );
}

// import React, { useState } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
// export default function ServiceCard(props) {
//     const [hover, setHover] = useState(false);
//     return (
//         <div
//             className="service-card"
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//         >
//             <div className={hover ? "service-card-head-small" : "service-card-head"}>
//                 <img src={props.card.imgPath} alt={props.card.name} />
//                 <h3>{props.card.title}</h3>
//             </div>
//             <p className={hover ? "text-show" : ""}>{props.card.content}</p>
//         </div>
//     );
// }
