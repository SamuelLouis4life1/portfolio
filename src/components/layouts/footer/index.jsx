import React, { Component } from 'react';
import styles from './index.module.css'
import { withTranslation } from "react-i18next";
import SocialMidia from "../../../components/elements/socialMedia/index";
import FooterLogo from "../../../images/logo.png";

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <section className={styles.footerSection} id='footer'>
            <div className="footer-line">

            </div>

            <div className={styles.footerContent}>
                <div className="footer-logo footer-items">
                    <img className={styles.footerImg} src={FooterLogo} alt="" />
                </div>

                <div className="footer-right-reserve footer-items">
                    <p class="copyright-text">Copyright &copy; {date} All Rights Reserved by <a href="#">Samuel Louis Sampeur</a>.</p>
                </div>

                <div className={`${styles.footerSocialMedia} ${styles.footerItems}`}>
                    <SocialMidia />
                </div>

            </div>

        </section>
    );
}

export default withTranslation()(Footer);