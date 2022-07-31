import React from "react";
import styles from "./index.module.css";
import "../../../styles/flag-icons.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { BrowserRouter as Link } from "react-router-dom";
import DarkMode from "../../darkMode/index";
import { FaBitbucket, FaCog, FaHome } from "react-icons/fa";
import imgLogo from "../../../images/logo.png"
import { MdWork, MdDesignServices, MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

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
          className={styles.navbar}
          expand="lg"
          sticky="top"
          style={{
            backgroundColor: `${this.state.navBackground}`,
            height: 100,
            paddingTop: 0,
            paddingBotton: 0,
          }}
        >
          <Navbar.Brand className={`${styles.smallDevice} ${styles.onHover}`}>
            <a href="/">
              <img
                className={styles.imgLogoNavbar}
                src={imgLogo}
                alt="image logo sampeur"
              />
            </a>
          </Navbar.Brand>

          <Nav className={`${styles.meAuto} ${styles.smallDeviceBottom} ${styles.onHover}`}>
            <a href="/" className={`${styles.menuItem} ${styles.hideSmallScreen}`}> <FaHome /> <span className={styles.linkText}><p>{t("navbarMenu.home")}</p></span></a>
            <a href="#about" className={styles.menuItem}> <FaCog /> <span className={styles.linkText}><p>{t("navbarMenu.about")}</p></span></a>
            <a href="#skills" className={styles.menuItem}> <GiSkills /> <span className={styles.linkText}><p>{t("navbarMenu.skills")}</p></span></a>
            <a href="#experiences" className={styles.menuItem}> <FaBitbucket /> <span className={styles.linkText}><p>{t("navbarMenu.experiences")}</p></span></a>
            <a href="#services" className={styles.menuItem}> <MdWork /> <span className={styles.linkText}><p>{t("navbarMenu.services")}</p></span></a>
            <a href="#portfolio" className={styles.menuItem}> <MdDesignServices /> <span className={styles.linkText}><p>{t("navbarMenu.portfolio")}</p></span></a>
            <a href="#contact" className={styles.menuItem}> <MdContactMail /> <span className={styles.linkText}><p>{t("navbarMenu.contact")}</p></span></a>
          </Nav>

          <div className={styles.langToggleTheme}>
            <Nav>
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

              <DarkMode />
          </div>
        </Navbar>
      </>
    );
  }
}

export default withTranslation()(NavbarMenu);