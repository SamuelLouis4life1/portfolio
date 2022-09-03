import React from 'react';
import styles from './index.module.css'
import "./experiences.css"
import { withTranslation } from "react-i18next";
import { MdHistoryEdu } from "react-icons/md";
import { SiMicrosoftacademic } from "react-icons/si";
import { App } from "../../../components/elements/textCarousel/index"


export function Experiences(props) {
    const { t } = props;

    return (
        <section className={styles.experiencesSection} id='experiences'>

            <h1 className="title">{t("experiences.title")} </h1>

            <div class="container">
                <div class="cards-experiences">
                    <div class="face face1">
                        <div class="content">
                            <MdHistoryEdu />
                            {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                            <h3>{t("experiences.profissionalHistory")}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <div>
                                <input type="checkbox" class="read-more-state-academic-aducation" id="post-2" />

                                <ul class="read-more-wrap-academic-aducation">
                                    <li><p><span className="bold-text">{t("experiences.marriottHotel")}</span></p></li>
                                    <li class="read-more-target-academic-aducation"><p><span className="bold-text">{t("experiences.marriottHotelDate")}</span></p></li>

                                    <li><p><span className="bold-text">{t("experiences.mundivox")}</span></p></li>
                                    <li class="read-more-target-academic-aducation"><p><span className="bold-text">{t("experiences.mundivoxDate")}</span></p></li>

                                    <li><p><span className="bold-text">{t("experiences.sheraton")}</span></p></li>
                                    <li class="read-more-target-academic-aducation"><p><span className="bold-text">{t("experiences.sheratonDate")}</span></p></li>

                                    <li><p><span className="bold-text">{t("experiences.telecall")}</span></p></li>
                                    <li class="read-more-target-academic-aducation"><p><span className="bold-text">{t("experiences.telecallDate")}</span></p></li>
                                </ul>
                                <label for="post-2" class="read-more-trigger-academic-aducation"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cards-experiences">
                    <div class="face face1">
                        <div class="content">
                            <SiMicrosoftacademic />
                            {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" /> */}
                            <h3>{t("experiences.academicAducation")}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <div className="modal-body-subcontent-details-profissional-history">
                                <div>
                                    <input type="checkbox" class="read-more-state-profissional-history" id="post-23" />

                                    <ul class="read-more-wrap-profissional-history">
                                        <li><p><span className="bold-text">{t("experiences.windsorSchool")}</span></p></li>
                                        <li class="read-more-target-profissional-history"><p><span className="bold-text">{t("experiences.windsorSchoolDate")}</span></p></li>

                                        <li><p><span className="bold-text">{t("experiences.levelingCourses")}</span></p></li>
                                        <li class="read-more-target-profissional-history"><p><span className="bold-text">{t("experiences.levelingCoursesDate")}</span></p></li>

                                        <li><p><span className="bold-text">{t("experiences.infnet")}</span></p></li>
                                        <li class="read-more-target-profissional-history"><p><span className="bold-text">{t("experiences.infnetDate")}</span></p></li>
                                    </ul>

                                    <label for="post-23" class="read-more-trigger-profissional-history"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <App />

        </section>
    );
}

export default withTranslation()(Experiences);