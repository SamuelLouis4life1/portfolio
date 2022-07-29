import React from 'react';
import styles from './index.module.css';
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

        <section className={styles.portfolioSetion} id="portfolio">
            <h1 className="title">{t("portfolio.title")}</h1>

            <div className={styles.owlCarousel}>
                <div className={styles.options}>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img2} ${styles.active}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-walking"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.csharpProject")}</div>
                                <div className={styles.sub}>{t("portfolio.csharpProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img2}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-snowflake"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.prototypingProject")}</div>
                                <div className={styles.sub}>{t("portfolio.prototypingProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img3}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-tree"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.fronEndProject")}</div>
                                <div className={styles.sub}>{t("portfolio.fronEndProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img4}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-tint"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.androidProject")}</div>
                                <div className={styles.sub}>{t("portfolio.androidProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img5}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.pythonProject")}</div>
                                <div className={styles.sub}>{t("portfolio.pythonProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick} className={`${styles.option} ${styles.img6}`}>
                        <div className={styles.shadow}></div>
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.main}>{t("portfolio.goLangProject")}</div>
                                <div className={styles.sub}>{t("portfolio.goLangProjectDes")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withTranslation()(Portfolio);