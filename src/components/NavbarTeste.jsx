import React from "react";
import "../styles/nav.css";
import { withTranslation } from "react-i18next";
import { MdWork, MdDesignServices, MdContactMail } from "react-icons/md";
import { FaBitbucket, FaCog, FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

class ContextMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  handleMenuClicked = (event) => {
    event.preventDefault()
    this.props.onMenuClicked()
  }

  render() {
    const { isMenuOpened, t } = this.props

    return (
      <>
        <nav className={isMenuOpened ? 'menuTest' : 'hideMenu'}>
          <a href="#about" className="menuItem"> <FaCog /> <span className="link-text">navbarMenu.about</span></a>
          <a href="#skills" className="menuItem"> <GiSkills /> <span className="link-text"><p>navbarMenu.skills</p></span></a>
          <a href="#experiences" className="menuItem"> <FaBitbucket /> <span className="link-text"><p>navbarMenu.experiences</p></span></a>
          <a href="#services" className="menuItem"> <MdWork /> <span className="link-text"><p>navbarMenu.services</p></span></a>
          <a href="#portfolio" className="menuItem"> <MdDesignServices /> <span className="link-text"><p>navbarMenu.portfolio</p></span></a>
          <a href="#contact" className="menuItem"> <MdContactMail /> <span className="link-text"><p>navbarMenu.contact</p></span></a>




          <a href="#about">Jump to about</a>
          <a href="#skills">Jump to skills</a>
          <a href="#experiences">Jump  experiences</a>
        </nav>

        <div onClick={this.handleMenuClicked} className='contextMenu' />
      </>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false
    }
  }

  onMenuClicked = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    })
  }

  render() {
    const { isMenuOpened } = this.state
    return (
      <div className='scrollingContainer'>
        {/* <div className='sectionHome' id='1'>SECTION 1</div>
          <div className='sectionAbout' id='2'>SECTION 2</div>
          <div className='sectionSkill' id='3'>SECTION 3</div>
          <div className='sectionContact' id='4'>SECTION 4</div> */}
        <div className='floating'>
          <ContextMenu isMenuOpened={isMenuOpened} onMenuClicked={this.onMenuClicked} />
        </div>
      </div>
    )
  }

}
export default withTranslation()(App);