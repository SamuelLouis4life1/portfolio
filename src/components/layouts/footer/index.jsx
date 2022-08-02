import React, { Component } from 'react';
import styles from './index.module.css'
import { withTranslation } from "react-i18next";
// import SocialMidia from "../../../components/elements/index";
import FooterLogo from "../../../images/developer-frontend.png";

import { UrlSocialMedia } from "../../../consts"
import SocialMidiaIcons from "../../../components/elements/socialMedia/index";
import {
    FaBehanceSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa";

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <section className={styles.footerSection} id='footer'>
            <div className={styles.footerLine}>

            </div>

            <div className={styles.footerContent}>
                <div className={styles.footerItems}>
                    <img className={styles.footerImg} src={FooterLogo} alt="" />
                </div>

                <div className={styles.footerItems}>
                    <p>Copyright &copy; {date} All Rights Reserved by <a href="#">Samuel Louis Sampeur</a>.</p>
                </div>

                <div className={`${styles.footerSocialMedia} ${styles.footerItems}`}>
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaFacebookSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaLinkedin} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaInstagramSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaTwitterSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaGithubSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaBehanceSquare} />

                </div>

            </div>

        </section>
    );
}

export default withTranslation()(Footer);