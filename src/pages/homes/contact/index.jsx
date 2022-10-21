import React from "react";
// import TesteFlip from "./FlipCard"
import { withTranslation } from "react-i18next";
import ContactForm from "./form";
import styles from "./index.module.css"
// import "../js/FlipsAnimations"

export const contactContent = [
  {
    title: "Email",
    content: "sampeur4life1@gmail.com",
    message: "contact.contactEmail",
    linkContact: "mailto:sampeur4life1@gmail.com"
  },
  {
    title: "Whatsapp",
    content: "+5521987722151",
    message: "contact.contactWhatsapp",
    linkContact: "https://web.whatsapp.com/+5521987722151"
  },
  {
    title: "Messenger",
    content: "Messenge me on Facebook",
    message: "contact.requiredMessenger",
    linkContact: ""
  }
]

export function Contact(props) {

  const CardList = () => {
    return (
      <ul>
        {contactContent.map(contactContent => {
          return (
              <div className={styles.contactOption}>
                <p> <strong>{contactContent.title}</strong></p>
                <h4>{contactContent.content}</h4>
                <a href={contactContent.linkContact} target="_blank">{t(contactContent.message)}</a>
              </div>
          );
        })}
      </ul>
    );
  };

  const { t } = props;
  return (
    <body>

      <section className={styles.contactSection} id="contact" >
        <h1 className={styles.title}>{t("contact.title")}</h1>

        <p className={styles.subtitle}>{t("contact.description2")}</p>

        <div className={styles.contactContainer}>

          <div className={styles.contactOptions}>
            <CardList />
          </div>

          <div className={styles.contactEmail}>
            <ContactForm />
            {/* <TesteFlip></TesteFlip> */}
          </div>

        </div>

      </section>
    </body>

  );
}
export default withTranslation()(Contact);