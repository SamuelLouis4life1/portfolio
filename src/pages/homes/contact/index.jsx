import React from "react";
// import TesteFlip from "./FlipCard"
import { withTranslation } from "react-i18next";
import ContactForm from "./form";
import styles from "./index.module.css"
// import "../js/FlipsAnimations"

export function Contact(props) {
  const { t } = props;

  return (
    <body>

      <section className={styles.contactSection} id="contact" >
        <h1 className={styles.title}>{t("contact.title")}</h1>

        <h4 className="contact-sub-header">{t("contact.description1")}</h4>

        <div className={styles.contactContainer}>

          <div className="contact-options">
            <div className="contact-option">
              <h4>Email</h4>
              <h5>sampeur4life1@gmail.com</h5>
              <a href="mailto:sampeur4life1@gmail.com" target="_blank">{t("contact.contactEmail")}</a>
            </div>
            <div className="contact-option">
              <h4>Whatsapp</h4>
              <h5>+5521987722151</h5>
              <a href="mailto:sampeur4life1@gmail.com" target="_blank">{t("contact.contactWhatsapp")}</a>

            </div>
            <div className="contact-option">
              <h4>Messenger</h4>
              <h5>Messenger Sampeur</h5>
              <a href="mailto:sampeur4life1@gmail.com" target="_blank">{t("contact.requiredMessenger")}</a>
            </div>
          </div>

          <div className="contact-email">
            <ContactForm />
            {/* <TesteFlip></TesteFlip> */}
          </div>

        </div>

      </section>
    </body>

  );
}

export default withTranslation()(Contact);