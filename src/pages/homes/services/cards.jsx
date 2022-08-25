import React from "react";
import "./cards.css";
import { HashLink } from 'react-router-hash-link';

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
                <a href="#" className="button"><HashLink to="/#contact" className="link">{`${btnLink}`}</HashLink></a>
            </div>
        </div>
    )
}
export default CardServices;