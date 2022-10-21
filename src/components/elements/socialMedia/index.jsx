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
import { withTranslation } from "react-i18next";

export function SocialMidiaIcon(props) {
    const { t } = props;

    return (
        <div class={styles.hover}><span>{t("home.follow")}</span>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myFacebook}`} target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myLinkedIn}`} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myInsta}`} target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myTwitter}`} target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myGitHub}`} target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
            <a class={styles.socialLink} href={`${UrlSocialMedia.myBehance}`} target="_blank" rel="noopener noreferrer"><FaBehanceSquare/></a>
        </div>
    )
}
export default withTranslation()(SocialMidiaIcon);