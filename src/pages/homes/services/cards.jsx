import React from "react";
// import ReactDOM from "react-dom";
import "../css/cardServices.css";

export function CardServices(props) {
    const { title, paragraph, btnLink } = props;
    // const teste = {
    //     btnLink: `${btnLink}%`
    // }
    //paragraph = "klhangh";

    return (
        <div className="card-section">
            <div className="card-content">
                <h2 className="card-title">{`${title}`}</h2>
                <p className="card-body">{`${paragraph}`}</p>
                <a href="#" className="button">{`${btnLink}`}</a>
            </div>
        </div>
    )
}
export default CardServices;