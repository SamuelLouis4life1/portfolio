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
            <div className={styles.bgImg}></div>
            <NavbarMenu />

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />

            <div className={styles.home_description}>
                <h1 className={styles.home_responsibility}>{t("home.hi")}</h1>
                <h2 className={styles.home_name}>{t("home.name")}</h2>
                <h3>Full stack Developer</h3>
                <p>{t("home.belief")}<a href="#" className="">{t("home.YESHUA")}</a></p>

                <SocialMidiaIcons />
            </div>

            <div>
                <a href="#about" className={styles.scroll_down}>
                    <div className={styles.mouse}>
                        <span></span>
                    </div>
                    <div className={styles.arrow}>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default withTranslation()(HomeIndex);