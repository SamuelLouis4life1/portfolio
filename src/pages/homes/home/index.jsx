import React, { useCallback } from "react";
import { withTranslation } from "react-i18next";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Particles from 'react-tsparticles';
// import Particles from 'react-particles-js';
// import ParticleAnimation from 'react-particle-animation'
import SocialMidiaIcons from "../../../components/elements/socialMedia/index";
// import particlesConfig from '../../particlesConfig/particlesConfig.json'

import NavbarMenu from "../../../components/Nav";
// import NavbarMenu from "../../../components/layouts/navbar";
import styles from "./index.module.css";

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
                
                <SocialMidiaIcons  />
            </div>
        </header>
    )
}

export default withTranslation()(HomeIndex);