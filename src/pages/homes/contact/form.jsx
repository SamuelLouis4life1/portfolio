import React from "react";
import { withTranslation } from "react-i18next";
import "../css/contactForm.css";
// import "../js/ContactForm.js"

export function ContactForm(props) {
    const { t } = props;

    return (
        <form class="contact-form-section">
            <div class="myContainer">
                <h1>{t("contactForm.title")}</h1>
                <ul>
                    <li>
                        <select>
                            <option selected disabled>{t("contactForm.selectedOption")}</option>
                            <option>{t("contactForm.option1")}</option>
                            <option>{t("contactForm.option2")}</option>
                            <option>{t("contactForm.option3")}</option>
                            <option>{t("contactForm.option4")}</option>
                        </select>
                    </li>
                    <li>
                        <div class="grid grid-2">
                            <input type="text" placeholder={t("contactForm.placeholderName")} required />
                            <input type="text" placeholder={t("contactForm.placeholderSurname")} required />
                        </div>
                    </li>
                    <li>
                        <div class="grid grid-2">
                            <input type="email" placeholder={t("contactForm.placeholderEmail")} required />
                            <input type="tel" placeholder={t("contactForm.placeholderPhone")} />
                        </div>
                    </li>
                    <li>
                        <textarea placeholder={t("contactForm.placeholderMessage")}></textarea>
                    </li>
                    <li>
                        <input className="checkbox-terms" type="checkbox" id="terms" />
                        <label for="terms">{t("contactForm.terms")}<a href="">{t("contactForm.conditions")}</a></label>
                    </li>
                    <li>
                        <div class="grid grid-3">
                                <div class="required-msg">{t("contactForm.requiredField")}</div>
                            <button class="btn-grid" type="submit" >
                                <span class="back">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                                </span>
                                <span class="front">{t("contactForm.sumit")}</span>
                            </button>
                            <button class="btn-grid" type="reset" >
                                <span class="back">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                                </span>
                                <span class="front">{t("contactForm.reset")}</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </form>
    )
}
export default withTranslation()(ContactForm);