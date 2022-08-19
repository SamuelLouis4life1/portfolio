import React, { Component } from 'react';
import styles from './index.module.css'
import { withTranslation } from "react-i18next";
import CardTestimonial from "./cards"
// import { myImg } from "../imgs/logo-removebg-preview.png";
import user1 from "../../../images/user1.jpg";
import user2 from "../../../images/user2.jpg";
import user3 from "../../../images/user3.jpg";
import user4 from "../../../images/user4.jpg";
import user5 from "../../../images/user5.jpg";
import user6 from "../../../images/user6.jpg";
import { UrlSocialMedia } from "../../../consts"

export function Testimonial(props) {
    const { t } = props;

    return (
        <>
            <section className={styles.testimonialSetion}>
                <h1 className={styles.title}>{t("testimonial.title")}</h1>

                <p className={styles.subtitle}>{t("testimonial.subTitle")}</p>

                <div className={styles.teste}>
                    <CardTestimonial img={user1}
                        name={t("testimonial.user1Name")}
                        title={t("testimonial.user1Title")}
                        description={t("testimonial.user1Description")}
                        instagramLink={UrlSocialMedia.User1Insta}
                        facebookLink={UrlSocialMedia.User1Facebook}
                        twitterLink={UrlSocialMedia.User1Twitter}
                        linkedinLink={UrlSocialMedia.User1Insta}
                        githubLink={UrlSocialMedia.User1GitHub}
                    />
                    <CardTestimonial img={user2}
                        name={t("testimonial.user2Name")}
                        title={t("testimonial.user2Title")}
                        description={t("testimonial.user1Description")}
                        instagramLink={UrlSocialMedia.User1Insta}
                        facebookLink={UrlSocialMedia.User1Facebook}
                        twitterLink={UrlSocialMedia.User1Twitter}
                        linkedinLink={UrlSocialMedia.User1Insta}
                        githubLink={UrlSocialMedia.User1GitHub}
                    />
                    <CardTestimonial img={user3}
                        name={t("testimonial.user3Name")}
                        title={t("testimonial.user3Title")}
                        description={t("testimonial.user1Description")}
                        instagramLink={UrlSocialMedia.User1Insta}
                        facebookLink={UrlSocialMedia.User1Facebook}
                        twitterLink={UrlSocialMedia.User1Twitter}
                        linkedinLink={UrlSocialMedia.User1Insta}
                        githubLink={UrlSocialMedia.User1GitHub}
                    />
                    <CardTestimonial img={user4}
                        name={t("testimonial.user4Name")}
                        title={t("testimonial.user4Title")}
                        description={t("testimonial.user1Description")}
                        instagramLink={UrlSocialMedia.User1Insta}
                        facebookLink={UrlSocialMedia.User1Facebook}
                        twitterLink={UrlSocialMedia.User1Twitter}
                        linkedinLink={UrlSocialMedia.User1Insta}
                        githubLink={UrlSocialMedia.User1GitHub}
                    />
                    <CardTestimonial img={user5}
                        name={t("testimonial.user4Name")}
                        title={t("testimonial.user4Title")}
                        description={t("testimonial.user1Description")}
                        instagramLink={UrlSocialMedia.User1Insta}
                        facebookLink={UrlSocialMedia.User1Facebook}
                        twitterLink={UrlSocialMedia.User1Twitter}
                        linkedinLink={UrlSocialMedia.User1Insta}
                        githubLink={UrlSocialMedia.User1GitHub}
                    />
                    {/* <CardTestimonial img={user6}
                name={t("testimonial.user5Name")}
                title={t("testimonial.user5Title")}
                description={t("testimonial.user1Description")}
                instagramLink={UrlSocialMedia.User1Insta}
                facebookLink={UrlSocialMedia.User1Facebook}
                twitterLink={UrlSocialMedia.User1Twitter}
                linkedinLink={UrlSocialMedia.User1Insta}
                githubLink={UrlSocialMedia.User1GitHub}
                /> */}

                </div>

            </section>

        </>
    );
}

export default withTranslation()(Testimonial);