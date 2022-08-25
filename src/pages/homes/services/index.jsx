import React, { Component, useState } from 'react';
import styles from './index.module.css';
// import Testimonial from "../../../components/elements/testimonial/index"
import Testimonial from "../../../pages/homes/testimonial/index"
import CardServices from "./cards"
import { withTranslation } from "react-i18next";

export function Services(props) {
    const { t } = props;

    // const [btnExample, setbtnExample] = useState({`${t("services.subTitle")}`});
    // btnExample = {{t("services.title")}

    return (

        <section className={styles.servicesSetion} id='services'>
            <h1 className={styles.title}>{t("services.title")}</h1>

            <p className={styles.subtitle}>{t("services.subtitle")}</p>

            <div className={styles.serviceContainer}>
                <CardServices title={t("services.titleWebdeveloper")} btnLink={t("services.btns")} paragraph={t("services.webDeveloper")} />
                <CardServices title={t("services.titleWebDesign")} btnLink={t("services.btns")} paragraph={t("services.webDesign")}/>
                <CardServices title={t("services.titleAppDeveloper")} btnLink={t("services.btns")} paragraph={t("services.appDeveloper")} />
                <CardServices title={t("services.titleAppDesign")} btnLink={t("services.btns")} paragraph={t("services.appDesign")} />
            </div>

            <Testimonial/>

        </section>
    );
}

export default withTranslation()(Services);