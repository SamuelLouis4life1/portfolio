import React from "react";
import "./cards.css";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

export function CardServices(props) {
  const { title, paragraph, btnLink } = props;
  // const teste = {
  //     btnLink: `${btnLink}%`
  // }
  //paragraph = "klhangh";

  return (
    <div className="card-section">
      <div className="card-content">
        <h2 className="card-title">{`${title}`}</h2>
        <p className="card-body">{`${paragraph}`}</p>
        <ContactMe />
      </div>
    </div>
  )
}
export default CardServices;

function ContactMe() {
  const { ts, i18n } = useTranslation();
  const { t } = i18n;

  return (
    <div className="hover"><span>{t("about.contactBtn")}</span>
      <a> <HashLink to="/#contact" className="link"> {t("about.contactBtn")} </HashLink></a>
    </div>
  )
}