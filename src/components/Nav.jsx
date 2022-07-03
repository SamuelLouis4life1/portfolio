import React from "react";
import "../styles/nav.css";
import "../styles/flag-icons.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { BrowserRouter as Link } from "react-router-dom";
// import DarkMode from "./DarkMode";


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
          <Container style={{}}>
            <Navbar.Brand>
              <a href="#">
                <img
                  className="img_logo_navbar"
                  src="/imgs/uploads/logo.png"
                  alt=""
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <a href="#home" className="menuItem">
                  {t("navbarMenu.home")}
                </a>
                <a href="#about" className="menuItem">
                  {t("navbarMenu.about")}
                </a>
                <a href="#skills" className="menuItem">
                  {t("navbarMenu.skills")}
                </a>
                <a href="#experiences" className="menuItem">
                  {t("navbarMenu.experiences")}
                </a>
                <a href="#services" className="menuItem">
                  {t("navbarMenu.services")}
                </a>
                <a href="#portfolio" className="menuItem">
                  {t("navbarMenu.portfolio")}
                </a>
                <a href="#contact" className="menuItem">
                  {t("navbarMenu.contact")}
                </a>
              </Nav>

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
                    <span className="flag-icon flag-icon-br"></span> Brasil
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#"
                    onClick={() => {
                      this.onLanguageHandle("en");
                    }}
                  >
                    <span className="flag-icon flag-icon-us"></span> United
                    States
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#"
                    onClick={() => {
                      this.onLanguageHandle("fr");
                    }}
                  >
                    <span className="flag-icon flag-icon-fr"></span> France
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#"
                    onClick={() => {
                      this.onLanguageHandle("es");
                    }}
                  >
                    <span className="flag-icon flag-icon-es"></span>Español
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#"
                    onClick={() => {
                      this.onLanguageHandle("ht");
                    }}
                  >
                    <span className="flag-icon flag-icon-ht"></span> Haiti
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* <DarkMode /> */}

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withTranslation()(NavbarMenu);