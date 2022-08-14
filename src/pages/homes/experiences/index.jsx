import React, { Component } from 'react';
import '../css/experiences.css'
import { withTranslation } from "react-i18next";

export function Experiences(props) {
    const { t } = props;

    return (
        <section className="experiences-section" id='experiences'>

            <div>
                <h1 className="experiences-description">{t("experiences.description")} </h1>
            </div>

        </section>
    );
}

export default withTranslation()(Experiences);