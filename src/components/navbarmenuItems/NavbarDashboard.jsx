import React, { useEffect, useState } from 'react'
import "./navbarMeneuItems.css"
import { AiFillSetting } from "react-icons/ai"
// import NavbarMenuMediaQuery from "./NavbarMenuMediaQuery"
import { useStateContext } from '../../contexts/ContextProvider';
import { RiNotification3Line } from "react-icons/ri"
import { FiSettings } from 'react-icons/fi';
import NavbarMenuMediaQuery from "../../components/NavbarMenuMediaQuery"


const NavButton = ({ customFunc, icon }) => (
  <>
    <button
      type="button"
      onClick={() => customFunc()}
    >
      {icon}
    </button>
  </>

);


const NavbarDashboard = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(null);

  // const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  // const { handleClick } = useStateContext();


  // useEffect(() => {
  //     const handleResize = () => setScreenSize(window.innerWidth);

  //     window.addEventListener('resize', handleResize);

  //     handleResize();

  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  //   useEffect(() => {
  //     if (screenSize <= 900) {
  //       setActiveMenu(false);
  //     } else {
  //       setActiveMenu(true);
  //     }
  //   }, [screenSize]);

  //   const handleActiveMenu = () => setActiveMenu(!activeMenu);



  // const {
  //   setCurrentColor, setCurrentMode,
  //   currentMode, activeMenu,
  //   themeSettings, currentColor,
  //   setThemeSettings
  // } = useStateContext();

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('colorMode');
  //   const currentThemeMode = localStorage.getItem('themeMode');
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, []);

  return (
    <>
      <div className='vavbar-dashboard'>
        {/* <p>Example</p> */}
        {/* <NavButton title="Notification" customFunc={() => handleClick('notification')} /> */}

        {/* {isClicked.notification && (<NavbarMenuMediaQuery />)} */}

        {/* <AiFillSetting onClick={}/> */}
        <NavbarMenuMediaQuery isOpen={isMenuOpen} />
        <AiFillSetting onClick={e => setProfileMenu(e.currentTarget)}/>

      </div>

    </>
  )
}

export default NavbarDashboard