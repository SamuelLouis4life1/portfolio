import React, { useCallback } from "react";
import { withTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ParticleAnimation from 'react-particle-animation'
import SocialMidiaIcons from "../../../components/elements/socialMedia/index";
import NavbarMenu from "../../../components/Nav";
// import NavbarMenu from "../../../components/layouts/navbar";
import styles from "./index.module.css";
import particlesConfig from "../../../particlesConfig/particlesConfig.json"

export function HomeIndex(props) {
    const { t } = props;

    const particlesInit = async (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <header className={styles.home} id="home">
            <div class={styles.bgImg}></div>
            <NavbarMenu />
            
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />

            <div className={styles.homeDescription}>

                <h4>{t("home.hi")}</h4>
                <h1>{t("home.name")}</h1>
                <h5>Fullstack Developer</h5>
                <p>{t("home.belief")}<a href="#" className="">{t("home.YESHUA")}</a></p>

                <SocialMidiaIcons />
            </div>
        </header>
    )
}

export default withTranslation()(HomeIndex);