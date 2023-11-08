import React, { Component } from 'react';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { MdWork, MdDesignServices, MdContactMail } from "react-icons/md";
import { FaBitbucket, FaCog } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import "../../components/navbarmenuItems/navbarMeneuItems.css"
import { withTranslation } from "react-i18next";

class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleMenuItemClick = () => {
    this.setState({ isMenuOpen: false });
  }

  handleDocumentClick = (e) => {
    if (this.buttonRef && !this.buttonRef.contains(e.target)) {
      this.setState({ isMenuOpen: false });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <div>
          <div className='vavbar-dashboard' onClick={this.handleButtonClick} ref={(button) => (this.buttonRef = button)}>
            <BsFillMenuButtonWideFill />
          </div>
          {this.state.isMenuOpen && (
            <>
              <div className='media-query-menu-itens'>
                <a href="#about" onClick={this.handleMenuItemClick}><FaCog /> <p>{t("navbarMenu.about")}</p></a>
                <a href="#skills" onClick={this.handleMenuItemClick}><GiSkills /> <p>{t("navbarMenu.skills")}</p></a>
                <a href="#experiences" onClick={this.handleMenuItemClick}><FaBitbucket /> <p>{t("navbarMenu.experiences")}</p></a>
                <a href="#services" onClick={this.handleMenuItemClick}><MdWork /> <p>{t("navbarMenu.services")}</p> </a>
                <a href="#portfolio" onClick={this.handleMenuItemClick}><MdDesignServices /> <p>{t("navbarMenu.portfolio")}</p> </a>
                <a href="#contact" onClick={this.handleMenuItemClick}><MdContactMail /><p>{t("navbarMenu.contact")}</p> </a>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
export default withTranslation()(MenuComponent);