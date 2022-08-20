import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"
import AboutImg from "../../../images/logo.png";
import { HashLink } from 'react-router-hash-link';

import { useTranslation } from "react-i18next";
// import SmoothList from "react-smooth-list";
// import 'animate.css';
import portugues from '../../../pdf/cv_portugues.pdf';
import english from '../../../pdf/cv_english.pdf';
import francais from '../../../pdf/cv_creol.pdf';
import espanol from '../../../pdf/cv_creol.pdf';
import criolo from '../../../pdf/cv_creol.pdf';
import { FaDownload } from "react-icons/fa";
import { AboutTypewriter } from "../../../components/elements/typeWriter/index"

export default function About(props) {
  const { ts, i18n } = useTranslation();
  const { t } = i18n;

  return (
    <>
      {/* <SmoothList visible="true"> */}
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.title}>{t("about.title")}</h1>

        <div className={styles.aboutContainer}>

          <div className={styles.aboutLeftContents}>
            <div class={styles.aboutImg}></div>
            <div>

              <p id="words" className={styles.aboutImgTitle}><AboutTypewriter /></p>

            </div>
            <p className={styles.aboutImgSubTitle}>{t("about.bigText5")}<Link to={"/sampeurs"} className="link">{("sampeurs")}</Link></p>
          </div>

          <div className={styles.aboutRightContents}>
            <h3>{t("about.subTitle")}</h3>
            <p>{t("about.descriptionP1")}
              <Nav.Link href="https://www.marriott.com/en-us/hotels/riori-residence-inn-rio-de-janeiro-barra-da-tijuca/overview/" target="_blank" rel="noopener noreferrer" className="link"> {t("about.marriott")}</Nav.Link>
              {t("about.descriptionP2")}
              <Nav.Link href="https://www.mundivox.com/homepage" target="_blank" rel="noopener noreferrer" className="link"> {t("about.mundivox")}</Nav.Link>
              {t("about.descriptionP3")}
              <Nav.Link href="https://www.infnet.edu.br/rj/" target="_blank" rel="noopener noreferrer" className="link">{t("about.college")}</Nav.Link>
              {t("about.descriptionP4")}
              <Nav.Link href="https://www.telecall.com/" target="_blank" rel="noopener noreferrer" className="link">{t("about.telecall")}</Nav.Link>
            </p>
            <p>{t("about.descriptionP5")} <HashLink to="/#contact" className="link"> {t("about.contact")} </HashLink></p>

            <p>{t("about.descriptionP6")} {t("about.moreAboutme")} <button>{t("about.showMore")}</button></p>

            <div className={styles.aboutBtns}>
              <CVButton />
              <ContactMe />
            </div>
          </div>
        </div>

      </section>

      {/* </SmoothList> */}
    </>
  );
}

function CVButton(props) {
  const { ts, i18n } = useTranslation();
  const { t } = i18n;

  const [download, setDownload] = useState('');
  const [userOs, setUserOS] = useState();
  const LinksToDownloadCv = {
    Portugues: portugues,
    English: english,
    Francais: francais,
    Espanol: espanol,
    Criolo: criolo
  }

  useEffect(() => {
    setUserOS(() => detectOS());
  }, []);

  function detectOS(lang) {
    if (i18n.language === "ptbr") {
      return "Portugues";
    }
    if (i18n.language === "en") {
      return "English";
    } else if (i18n.language === "fr") {
      return "Francais";
    } else if (i18n.language === "es") {
      return "Espanol"
    } else if (i18n.language === "ht") {
      return "Criolo"
    } else {
      return null;
    }
  }

  useEffect(() => {
    setDownload(LinksToDownloadCv[userOs]);
  }, [userOs]);

  return (
    <>
      {console.log("langDown", i18n.language)}
      {console.log("langDown2", props.language)}
      {console.log("langDown1", download)}

      <div class={styles.hover}><span>{t("about.aboutMeCv")}</span>
        <a href={download} download="Samuel Louis's CV.pdf"> <FaDownload />{t("about.aboutBtnCv")}</a>
      </div>
    </>
  )
}

function ContactMe() {
  const { ts, i18n } = useTranslation();
  const { t } = i18n;

  return (
    <div class={styles.hover}><span>{t("about.contactBtn")}</span>
      <a> <HashLink to="/#contact" className="link"> {t("about.contactBtn")} </HashLink></a>
    </div>
  )
}