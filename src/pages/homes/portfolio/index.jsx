import React from 'react';
import styles from './index.module.css';
import "./portfolio.css"
import { withTranslation } from "react-i18next";


export function Portfolio(props) {
    const { t } = props;

    function handleClick(e) {
        let options = document.querySelectorAll(".option")
        options.forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active");
    };

    return (

        <section className="portfolio-setion" id="portfolio">
            <h1 className="title">{t("portfolio.title")}</h1>

            <div className="owl-carousel">
                <div className="options">
                    <div onClick={handleClick} className="option img1 active">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-walking"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.csharpProject")}</div>
                                <div className="sub">{t("portfolio.csharpProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className="option img2">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-snowflake"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.prototypingProject")}</div>
                                <div className="sub">{t("portfolio.prototypingProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className="option img3">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-tree"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.fronEndProject")}</div>
                                <div className="sub">{t("portfolio.fronEndProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className="option img4">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-tint"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.androidProject")}</div>
                                <div className="sub">{t("portfolio.androidProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className="option img5">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.pythonProject")}</div>
                                <div className="sub">{t("portfolio.pythonProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className="option img6">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className="info">
                                <div className="main">{t("portfolio.goLangProject")}</div>
                                <div className="sub">{t("portfolio.goLangProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withTranslation()(Portfolio);