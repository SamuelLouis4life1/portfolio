import React from "react";
import styles from "./index.module.css";
import {
    FaBehanceSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa";
import { UrlSocialMedia } from "../../../consts"

export function SocialMidiaIcon(props) {
    const { linkSocialMidia, icon } = props;

    return (
        <div class={styles.hover}><span>Follow me</span>
            <a class={styles.socialLink} href={`${UrlSocialMedia}`} target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myLinkedIn}`} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myInsta}`} target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia}`} target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.MyGitHub}`} target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia}`} target="_blank" rel="noopener noreferrer"><FaBehanceSquare/></a>
        </div>
    )
}
export default SocialMidiaIcon;