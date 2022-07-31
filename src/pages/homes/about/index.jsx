import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
// import "../css/button.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import AboutImg from "../../../images/logo.png";
import { HashLink } from 'react-router-hash-link';
import i18n from "i18next";
// import portuges from "/cv_portugues.pdf"
// import SmoothList from "react-smooth-list";
// import $ from 'jquery';
// import 'animate.css';

export function About(props) {
  const { t } = props;

  const [download, setDownload] = useState('');
  const [userOs, setUserOS] = useState();
  const LinksToDownloadCv = {
    Portugues: "/cv_portugues.pdf",
    English: "/cv_english.pdf",
    Francais: "/cv_french.pdf",
    Espanol: "/cv_spanish.pdf",
    Criolo: "/cv_creol.pdf"
  }

  useEffect(() => {
    setUserOS(() => detectOS());
  }, []);

  function detectOS() {
    const userAgent = navigator.userAgent;
    if (i18n.Lang === "ptbr") {
      return "Portugues";
    } else if (i18n.Lang === "en") {
      return "English";
    } else if (i18n.Lang === "fr") {
      return "Francais";
    } else if (i18n.Lang === "es") {
      return "Espanol"
    } else if (i18n.Lang === "cr") {
      return "Criolo"
    } else {
      return null;
    }
  }

  useEffect(() => {
    setDownload(LinksToDownloadCv[userOs]);
  }, [userOs]);


  //   (function () {
  //     var words = ["Fullstack Developer", "Developer"],
  //       i = 0;
  //     setInterval(function () {
  //       $('#words').fadeOut(function () {
  //         $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
  //       });
  //     }, 5000)
  //   })();

  return (
    <>
      {/* <SmoothList visible="true"> */}
      {/* <Container fluid padding="0%"> */}
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.title}>{t("about.title")}</h1>

        <div className={styles.aboutContainer}>

          <div className={styles.aboutLeftContents}>
            {/* <div class={styles.aboutImg}></div> */}
            <img src={AboutImg} alt="" />
            {/* <p id="words" className={styles.aboutImgTitle}>{t("about.bigText2")}</p> */}
            <p className={styles.aboutImgSubTitle}>{t("about.bigText5")}<Link to={"/sampeurs"} className="link">{t("sampeurs")}</Link></p>
          </div>

          <div className="about-item about-description">
            <h3 className="about-subTitle">{t("about.subTitle")}</h3>
            <p>{t("about.descriptionP1")}
              <Link to={"/https://www.marriott.com/en-us/hotels/riori-residence-inn-rio-de-janeiro-barra-da-tijuca/overview/"} className="link"> {t("about.marriott")}</Link>
              {t("about.descriptionP2")}
              <Link to={"/https://www.mundivox.com/homepage"} className="link"> {t("about.mundivox")}</Link>
              {t("about.descriptionP3")}
              <Link to={"/https://www.infnet.edu.br/rj/"} className="link">{t("about.college")}</Link>
              {t("about.descriptionP4")}
              <Link to={"https://www.telecall.com/"} className="link">{t("about.college")}</Link>
              {t("about.nowWorkink")}
            </p>

            <p>{t("about.descriptionP5")} <HashLink to="/#contact" className="link"> {t("about.contact")} </HashLink></p>

            <p>{t("about.descriptionP6")}</p>

            <div className="about-item about-btn">
              <button class="blob-btn">
                {t("about.aboutMeBtn")}
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>

              <button class="blob-btn" value={userOs} onChange={(e) => setUserOS(e.target.value)}>
                {t("about.aboutMeCv")}
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
              <a href={download}><button>Download</button></a>
              {/* <a href="../../../images/cv_creol.pdf" target="_blank" rel="noopener noreferrer" download>Download test</a> */}
              <a href="/images/cv_creol.pdf" target="_blank" rel="noopener noreferrer" download>Download test</a>


            </div>
          </div>
        </div>

      </section>

      {/* </SmoothList> */}

      {/* </Container> */}
    </>
  );
}

export default withTranslation()(About);