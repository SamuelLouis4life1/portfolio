import React from "react";
import "../css/cardTestimonial.css";

export function CardTestimonial(props) {
    const { img, name, title, description, facebookLink, twitterLink, linkedinLink, instagramLink, githubLink } = props;

    return (
        <div className="container">
            <div className="row">

                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src={`${img}`} />
                        </div>
                        <div className="team-content">
                            <h3 className="name">{`${name}`}</h3>
                            <h4 className="testimonial-title">{`${title}`}</h4>
                            <p className="description">{`${description}`}</p>
                        </div>
                        <ul className="social">
                            <li><a href={`${instagramLink}`} className="fa fa-instagram" aria-hidden="true"></a></li>
                            <li><a href={`${facebookLink}`} className="fa fa-facebook" aria-hidden="true"></a></li>
                            <li><a href={`${twitterLink}`} className="fa fa-twitter" aria-hidden="true"></a></li>
                            <li><a href={`${linkedinLink}`} className="fa fa-linkedin" aria-hidden="true"></a></li>
                            <li><a href={`${githubLink}`} className="fa fa-github" aria-hidden="true"></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CardTestimonial;