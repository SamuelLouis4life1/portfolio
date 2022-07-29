import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import styles from './index.module.css';
import ProgressBar from '../../../components/elements/progressBar/index';
import backendfrontend from '../../../images/developer-frontend.png'; 
import frontend from '../../../images/developer-frontend.png';
import backend from '../../../images/developer-frontend.png';


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
        <section className={styles.skillsSection} id="skills">

            <h1 className={styles.title}>{t("skills.title")}</h1>

            <div className={styles.skillsBody}>

                <p className={styles.subtitle}>{t("skills.subTitle")}</p>

                <div className={`${styles.tab} ${styles.skillsTab}`}>
                    <button
                        id="actived"
                        className={`${styles.tablinks} ${styles.active}`}
                        onClick={(e) => openCity(e, "Frontend")}
                    >
                        {t("skills.frontend")}
                    </button>
                    <button
                        className={styles.tablinks}
                        onClick={(e) => openCity(e, "Backend")}
                    >
                        {t("skills.backend")}
                    </button>
                    <button
                        className={styles.tablinks}
                        onClick={(e) => openCity(e, "Designer")}
                    >
                        {t("skills.designer")}
                    </button>

                    <button
                        className={styles.tablinks}
                        onClick={(e) => openCity(e, "Languages")}
                    >
                        {t("skills.languages")}
                        <p>
                            <small>{t("skills.languages")}</small>
                        </p>
                    </button>
                    <button
                        className={styles.tablinks}
                        // disabled
                        onClick={(e) => openCity(e, "InterestedToLearn")}
                    >
                        {t("skills.otherSkills")}
                        <p>
                            <small>{t("skills.newSkills")}</small>
                        </p>
                    </button>
                </div>

                <div id="Frontend" className={styles.tabcontent} style={{ display: "block" }}>
                    <div className={styles.tabContentInfo}>
                        <div>
                            <img alt="" src={backendfrontend} />
                        </div>
                        <div className={`grid + ${styles.skillsList}`}>
                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>HTML</p>
                                    <ProgressBar bgcolor= {"var(--font-color)"} completed={html} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>CSS</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={css} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>JavaScript</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={javaScript} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>React</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={react} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="InterestedToLearn" className={styles.tabcontent}>
                    <div className={styles.tabContentInfo}>
                        <div>
                            <img alt="" src={frontend} />
                        </div>
                        <div className={`grid ${styles.skillsList}`}>
                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>C#</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={csharp} />
                                </div>

                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>GoLang</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={goLang} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Java</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={java} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Python</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={python} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Backend" className={styles.tabcontent}>
                    <div className={styles.tabContentInfo}>
                        <div>
                            <img alt="" src={backend} />
                        </div>
                        <div className={`grid ${styles.skillsList}`}>
                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>C#</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={csharp} />
                                </div>

                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>GoLang</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={goLang} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Java</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={java} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Python</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={python} />
                                </div>
                            </div>


                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>SQL Server</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={sqlServer} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Designer" className={styles.tabcontent}>
                    <div className={styles.tabContentInfo}>
                        <div>
                            <img alt="" src={backendfrontend} />
                        </div>
                        <div className={`grid ${styles.skillsList}`}>
                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Figma</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={figma} />
                                </div>

                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Sketch</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={sketch} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>Photoshop</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={photoshop} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Languages" className={styles.tabcontent}>
                    <div className={styles.tabContentInfo}>
                        <div>
                            <img alt="" src={backendfrontend} />
                        </div>
                        <div className={`grid ${styles.skillsList}`}>
                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>{t("skills.portugues")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={portugues} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>{t("skills.english")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={english} />
                                </div>

                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>{t("skills.french")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={french} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>{t("skills.spanish")}</p>
                                    <ProgressBar bgcolor={"var(--font-color)"} completed={spanish} />
                                </div>
                            </div>

                            <div className={styles.skillsData}>
                                <div className={styles.skillmg}>

                                </div>
                                <div className={styles.skillsTitles}>
                                    <p className={styles.skillsName}>{t("skills.creol")}</p>
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