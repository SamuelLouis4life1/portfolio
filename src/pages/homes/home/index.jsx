import React, { useCallback } from "react";
import { withTranslation } from "react-i18next";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Particles from 'react-tsparticles';
// import Particles from 'react-particles-js';
// import ParticleAnimation from 'react-particle-animation'
import SocialMidiaIcons from "../../../components/SocialMedia";
// import particlesConfig from '../../particlesConfig/particlesConfig.json'

import NavbarMenu from "../../../components/Nav";
// import NavbarMenu from "../../../components/layouts/navbar";
import styles from "./index.module.css";
import { UrlSocialMedia } from "../../../consts"
import {
    FaBehanceSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa";

export function HomeIndex(props) {
    const { t } = props;

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <header className={styles.home} id="home">
            <div class={styles.bgImg}></div>
            <NavbarMenu />
            {/* <ParticleAnimation /> */}
            {/* <Particles /> */}

            {/* <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                params={particlesConfig} className="App-particles__container"
            />
            </div> */}

            <div className={styles.homeDescription}>

                <h4>{t("home.hi")}</h4>
                <h1>{t("home.name")}</h1>
                <h5>Fullstack Developer</h5>
                <p>{t("home.belief")}<a href="#" className="">{t("home.YESHUA")}</a></p>

                <div className={styles.homeSocial}>
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaFacebookSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaLinkedin} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaInstagramSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaTwitterSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaGithubSquare} />
                    <SocialMidiaIcons linkSocialMidia={UrlSocialMedia.User1Insta} icon={FaBehanceSquare} />
                </div>
            </div>
        </header>
    )
}

export default withTranslation()(HomeIndex);