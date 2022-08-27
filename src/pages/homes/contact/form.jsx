import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import "./forms.css";
import { sendRequestForm } from "../../../services/sendRequestForm";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
// import Swal from 'sweetalert2'
// import "../js/ContactForm.js"

export function ContactForm(props) {
    const { t } = props;
    const sendcontactForm = {
        subject: '',
        name: '',
        document: '',
        phone: '',
        email: '',
        message: '',
        termAcceptance: false
    }
    const [state, setState] = useState(sendcontactForm);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     sendRequestForm(state)
    //         .then((response) => {
    //             if (response.data.success) {
    //                 setState(sendcontactForm);
    //                 Swal.fire(t("contactForm.success"));

    //             } else {
    //                 Swal.fire(t("contactForm.error"));
    //             }
    //         })
    //         .catch((error) => {
    //             Swal.fire(t("contactForm.error"));
    //             console.error(error);
    //         })
    // }

    const handleChange = (event) => {
        const { value, name, type, checked, touched } = event.target;
        let newValue = type !== "checkbox" ? value : checked;
        let newState = { ...state }
        newState[name] = newValue
        setState(newState)
    }

    return (
        <>
            {/* <form state={state} setState={setState} onSubmit={handleSubmit} className="rights-request-form"> */}
            <form state={state} setState={setState} className="rights-request-form">

                <h3 className="rights">{t("contactForm.title")}</h3>

                <div className="rights-request-form-container">
                    <ul>
                        <li>
                            <select name="subject" value={state.subject} onChange={handleChange} required>
                                <option value="" disabled>{t("contactForm.selectedOption")}</option>
                                <option value="0">{t("contactForm.optionFeedback")}</option>
                                <option value="1">{t("contactForm.optionResume")}</option>
                                <option value="2">{t("contactForm.optionAppDeveloper")}</option>
                                <option value="3">{t("contactForm.optionAppDesign")}</option>
                                <option value="4">{t("contactForm.optionwebDeveloper")}</option>
                                <option value="5">{t("contactForm.optionWebDesign")}</option>
                                <option value="6">{t("contactForm.optionOther")}</option>
                            </select>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input name="name" value={state.name} onChange={handleChange} type="text" placeholder={t("contactForm.placeholderName")} required />
                                <input maxlength="15" name="document" value={state.document} onChange={handleChange} type="text" placeholder={t("contactForm.placeholderSurname")} required />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <InputMask
                                    name="phone"
                                    value={state.phone}
                                    onChange={handleChange}
                                    type="text"
                                    mask={"(99)99999-9999"}
                                    placeholder={t("contactForm.placeholderPhone")}
                                    required />
                                <input name="email" value={state.email} onChange={handleChange} type="email" placeholder={t("contactForm.placeholderEmail")} required />
                            </div>
                        </li>
                        <li>
                            <textarea name="message" value={state.message} onChange={handleChange} placeholder={t("contactForm.placeholderMessage")} required></textarea>
                        </li>
                        <li>
                            <input name="termAcceptance" value={state.termAcceptance} onChange={handleChange} type="checkbox" id="terms" required />
                            <label for="terms">
                                {t("contactForm.terms")}
                                <Link to={"/termo"} target="_blank" rel="noopener noreferrer" className="footer-txt">{t("contactForm.conditions")}</Link>
                            </label>
                        </li>
                        <li>
                            <div className="grid grid-3 required-field">
                                <div className="required-msg">{t("contactForm.requiredField")}</div>
                                <button className="btn-grid" type="submit" disabled={!state.termAcceptance}>
                                    <span className="back">
                                        <img
                                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="front">{t("contactForm.sumit")}</span>
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
        </>
    )
}
export default withTranslation()(ContactForm);