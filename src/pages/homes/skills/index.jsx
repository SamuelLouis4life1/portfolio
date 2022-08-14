import React, { useState } from "react";
import { withTranslation } from "react-i18next";
// import styles from './index.module.css';
import "./skills.css"
import ProgressBar from '../../../components/elements/progressBar/index';
import frontend from '../../../images/front-end-dev.png';
import backend from '../../../images/backend.png';
import webDesign from '../../../images/Phrase.png';
import newSkill from '../../../images/new-skill.png';
import languages from '../../../images/languages.png';
import {
    GiMaterialsScience,
    GiVendingMachine
} from "react-icons/gi";

import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaSketch,
    FaDatabase
} from "react-icons/fa";

import {
    SiCsharp,
    SiJavascript,
    SiGoland,
    SiPython,
    SiAdobephotoshop,
    SiFigma,
    SiSmartthings
} from "react-icons/si";


export function Skills(pros) {
    const { t } = pros

    const [html, setHtml] = useState(80);
    const [css, setCss] = useState(90);
    const [javaScript, setJavaScript] = useState(80);
    const [react, setReact] = useState(60);
    const [csharp, setCsharp] = useState(60);
    const [goLang, setGoLang] = useState(60);
    const [java, setJava] = useState(40);
    const [python, setPython] = useState(50);
    const [sqlServer, setSqlServer] = useState(50);
    const [figma, setFigma] = useState(30);
    const [sketch, setSketch] = useState(30);
    const [photoshop, setPhotoshop] = useState(50);
    const [english, setEnglish] = useState(60);
    const [spanish, setSpanish] = useState(40);
    const [french, setFrench] = useState(80);
    const [creol, setCreol] = useState(90);
    const [portugues, setPortugues] = useState(70);

    function openCity(evt, deviceName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(deviceName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return (
        <section className="skills-section" id="skills">

            <h1 className="title">{t("skills.title")}</h1>

            <div className="skills-body">

                <p className="subtitle">{t("skills.subTitle")}</p>

                <div className="tab skills-tab">
                    <button
                        id="actived"
                        className="tablinks active"
                        onClick={(e) => openCity(e, "Frontend")}
                    >
                        {t("skills.frontend")}
                    </button>
                    <button
                        className="tablinks"
                        onClick={(e) => openCity(e, "Backend")}
                    >
                        {t("skills.backend")}
                    </button>
                    <button
                        className="tablinks"
                        onClick={(e) => openCity(e, "Designer")}
                    >
                        {t("skills.designer")}
                    </button>

                    <button
                        className="tablinks"
                        onClick={(e) => openCity(e, "Languages")}
                    >
                        {t("skills.languages")}
                        <p>
                            <small>{t("skills.languages")}</small>
                        </p>
                    </button>
                    <button
                        className="tablinks"
                        // disabled
                        onClick={(e) => openCity(e, "InterestedToLearn")}
                    >
                        {t("skills.otherSkills")}
                        <p>
                            <small>{t("skills.newSkills")}</small>
                        </p>
                    </button>
                </div>

                <div id="Frontend" className="tabcontent" style={{ display: "block" }}>
                    <div className="tabContentInfo">
                        <div>
                            <img alt="" src={frontend} />
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaHtml5 />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">HTML</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={html} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaCss3Alt />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">CSS</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={css} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiJavascript />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">JavaScript</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={javaScript} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaReact />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">React</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={react} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="InterestedToLearn" className="tabcontent">
                    <div className="tabContentInfo">
                        <div>
                            <img alt="" src={newSkill} />
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiSmartthings />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.internet")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={csharp} />
                                </div>

                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <GiMaterialsScience />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.data")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={goLang} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <GiVendingMachine />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.machine")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={java} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaDatabase />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Data Base</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={python} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Backend" className="tabcontent">
                    <div className="tabContentInfo">
                        <div>
                            <img alt="" src={backend} />
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiCsharp />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">C#</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={csharp} />
                                </div>

                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiGoland />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">GoLang</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={goLang} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaJava />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Java</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={java} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiPython />

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Python</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={python} />
                                </div>
                            </div>


                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaDatabase />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Data Base</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={sqlServer} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Designer" className="tabcontent">
                    <div className="tabContentInfo">
                        <div>
                            <img alt="" src={webDesign} />
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiFigma />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Figma</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={figma} />
                                </div>

                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <FaSketch />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Sketch</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={sketch} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skill-img">
                                    <SiAdobephotoshop />
                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">Photoshop</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={photoshop} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Languages" className="tabcontent">
                    <div className="tabContentInfo">
                        <div>
                            <img alt="" src={languages} />
                        </div>
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="">
                                    <span className="flag-icon flag-icon-br skill-img"></span>

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.portugues")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={portugues} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="">
                                    <span className="flag-icon flag-icon-us skill-img"></span>

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.english")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={english} />
                                </div>

                            </div>

                            <div className="skills_data">
                                <div className="">
                                    <span className="flag-icon flag-icon-fr skill-img"></span>

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.french")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={french} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="">
                                    <span className="flag-icon flag-icon-es skill-img"></span>

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.spanish")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={spanish} />
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="">
                                    <span className="flag-icon flag-icon-ht skill-img"></span>

                                </div>
                                <div className="skills_titles">
                                    <p className="skills_name">{t("skills.creol")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={creol} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
export default withTranslation()(Skills);