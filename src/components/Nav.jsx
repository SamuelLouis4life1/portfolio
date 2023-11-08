import React, { useState } from "react";
import "../styles/nav.css";
import "../styles/flag-icons.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { BrowserRouter as Link } from "react-router-dom";
import DarkMode from "./darkMode";
import imgLogo from "../images/logo.png"
import { MdWork, MdDesignServices, MdContactMail } from "react-icons/md";
import { FaBitbucket, FaCog, FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import NavbarDashboard from "./navbarMediaQuery/NavbarMediaQuery";

class NavbarMenu extends React.Component {
  state = {
    navBackground: "red",
    navBackgroundLetters: "white"
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "#eb4438";
      this.setState({ navBackground: backgroundcolor });
      this.setState({ navBackgroundLetters: backgroundcolor });
    });
  }

  constructor(props) {
    super(props);
    console.log("--->" + props.language);
    this.state = {
      value: props.language ? props.language : props.i18n.language,
    };
  }

  onLanguageHandle = (lang) => {
    let newLang = lang;
    console.log(lang);

    this.setState({ value: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  onClickCustomerAreaHandle = (event) => {
    <Link to="/"> </Link>;
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <Navbar
          className="navbar"
          expand="lg"
          sticky="top"
          style={{
            backgroundColor: `${this.state.navBackground}`,
            height: 100,
            paddingTop: 0,
            paddingBotton: 0,
          }}
        >
          <Navbar.Brand className="small-device small-device-top onHover">
            <a href="/">
              <img
                className="img_logo_navbar"
                src={imgLogo}
                alt="image logo sampeur"
              />
            </a>
          </Navbar.Brand>
          <div>
            {window.screen.width >= 420 ? (
              <Nav className="me-auto small-device-bottom onHover">
                <a href="/" className="menuItem hide-small-screen"> <FaHome /> <span className="link-text"><p>{t("navbarMenu.home")}</p></span></a>
                <a href="#about" className="menuItem"> <FaCog /> <span className="link-text"><p>{t("navbarMenu.about")}</p></span></a>
                <a href="#skills" className="menuItem"> <GiSkills /> <span className="link-text"><p>{t("navbarMenu.skills")}</p></span></a>
                <a href="#experiences" className="menuItem"> <FaBitbucket /> <span className="link-text"><p>{t("navbarMenu.experiences")}</p></span></a>
                <a href="#services" className="menuItem"> <MdWork /> <span className="link-text"><p>{t("navbarMenu.services")}</p></span></a>
                <a href="#portfolio" className="menuItem"> <MdDesignServices /> <span className="link-text"><p>{t("navbarMenu.portfolio")}</p></span></a>
                <a href="#contact" className="menuItem"> <MdContactMail /> <span className="link-text"><p>{t("navbarMenu.contact")}</p></span></a>
              </Nav>
            ) : (
              <>
                <NavbarDashboard onClick={this.handleClick} />
              </>

            )}
          </div>

          <div className="lang-toggle-theme">
            <Nav className="small-device">
              <NavDropdown
                title={t("menuLanguage.language")}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    this.onLanguageHandle("ptbr");
                  }}
                >
                  <span className="flag-icon flag-icon-br"></span> Portugues
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    this.onLanguageHandle("en");
                  }}
                >
                  <span className="flag-icon flag-icon-us"></span> English
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    this.onLanguageHandle("fr");
                  }}
                >
                  <span className="flag-icon flag-icon-fr"></span> Francais
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    this.onLanguageHandle("es");
                  }}
                >
                  <span className="flag-icon flag-icon-es"></span> Español
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    this.onLanguageHandle("ht");
                  }}
                >
                  <span className="flag-icon flag-icon-ht"></span> Criolo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <DarkMode className="small-device" />
          </div>
        </Navbar>
      </>
    );
  }
}

export default withTranslation()(NavbarMenu);