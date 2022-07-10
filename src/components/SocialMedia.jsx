import React from "react";
import "../styles/socialMidia.css";

export function SocialMidiaIcon(props) {
    const { linkSocialMidia, icon } = props;

    return (
        <div className="social_buttons">
            <a href={`${linkSocialMidia}`} target="_blank" rel="noopener noreferrer">{React.createElement(icon, { width: 12, height: 12, color: '#000' })}</a>
        </div>
    )
}
export default SocialMidiaIcon;