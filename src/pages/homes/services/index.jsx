import React, { Component, useState } from 'react';
import styles from './index.module.css';
// import Testimonial from "./Testimonial"
import CardServices from "./cards"
import { withTranslation } from "react-i18next";

export function Services(props) {
    const { t } = props;

    // const [btnExample, setbtnExample] = useState({`${t("services.subTitle")}`});
    // btnExample = {{t("services.title")}

    return (

        <section className={styles.servicesSetion} id='services'>
            <h1 className="title">{t("services.title")}</h1>

            <p className="subtitle">{t("services.subTitle")}</p>

            <div className="service_container">
                <CardServices title={t("services.designer")} btnLink={t("services.subTitle")} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."} />
                <CardServices title={t("services.uiUxApp")} btnLink={t("services.subTitle")} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."} />
                <CardServices title={t("services.uiUxWeb")} btnLink={t("services.subTitle")} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."} />
                <CardServices title={"services.webDesign"} btnLink={t("services.subTitle")} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."} />
            </div>

            {/* <Testimonial/> */}

        </section>
    );
}

export default withTranslation()(Services);