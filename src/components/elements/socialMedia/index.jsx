import React from "react";
import styles from "./index.module.css";

export function SocialMidiaIcon(props) {
    const { linkSocialMidia, icon } = props;

    return (
        <div className={styles.socialButtons}>
            <a href={`${linkSocialMidia}`} target="_blank" rel="noopener noreferrer">{React.createElement(icon, { width: 12, height: 12, color: '#000' })}</a>
        </div>
    )
}
export default SocialMidiaIcon;