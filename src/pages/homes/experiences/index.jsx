import React, { Component } from 'react';
import styles from './index.module.css'
import "./experiences.css"
import { withTranslation } from "react-i18next";
import {
    GiStarFormation,
    GiVendingMachine
} from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";
import { SiMicrosoftacademic } from "react-icons/si";
import { App } from "../../../components/elements/textCarousel/index"


export function Experiences(props) {
    const { t } = props;

    return (
        <section className={styles.experiencesSection} id='experiences'>

            <h1 className="title">{t("experiences.title")} </h1>

            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <MdHistoryEdu />
                            {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                            <h3>{t("experiences.history")}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <div>
                                <input type="checkbox" class="read-more-state" id="post-2" />

                                <ul class="read-more-wrap">
                                    <li><p><span className="bold-text">Hotel Marriott Parque Olímpico - Barman</span></p></li>
                                    <li class="read-more-target"><p><span className="bold-text">(06/2016 até 11/2019)</span></p></li>

                                    <li><p><span className="bold-text">MUNDIVOX - Estágio</span></p></li>
                                    <li class="read-more-target"><p><span className="bold-text">(02/2020 até 04/2020)</span></p></li>

                                    <li><p><span className="bold-text">Sheraton Grand Rio - Atendente</span></p></li>
                                    <li class="read-more-target"><p><span className="bold-text">até (12/2020)</span></p></li>


                                    <li><p><span className="bold-text">Telecall - Estagiando</span></p></li>
                                    <li class="read-more-target"><p><span className="bold-text">(04/2021 até hoje)</span></p></li>
                                </ul>

                                <label for="post-2" class="read-more-trigger"></label>
                            </div>

                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <GiStarFormation />
                            {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" /> */}
                            <h3>{t("experiences.education")}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            {/* <p>Instituto INFNET (https://www.infnet.edu.br/esti/)</p> */}

                            <div className="modal-body-subcontent-details">
                                <div>
                                    <input type="checkbox" class="read-more-state" id="post-2" />

                                    <ul class="read-more-wrap">
                                        <li><p><span className="bold-text">Hotel Marriott Parque Olímpico - Barman</span></p></li>
                                        <li class="read-more-target"><p><span className="bold-text">(06/2016 até 11/2019)</span></p></li>

                                        <li><p><span className="bold-text">Instituto INFNET</span></p></li>
                                        <li class="read-more-target"><p><span className="bold-text">(06/2016 até hoje)</span></p></li>
                                    </ul>

                                    <label for="post-2" class="read-more-trigger"></label>
                                </div>
                            </div>

                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <App />

        </section>
    );
}

export default withTranslation()(Experiences);