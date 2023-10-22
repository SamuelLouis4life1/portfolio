import React, { useEffect, useState } from 'react'
import "./navbarMeneuItems.css"
import { AiFillSetting } from "react-icons/ai"
// import NavbarMenuMediaQuery from "./NavbarMenuMediaQuery"
import { useStateContext } from '../../contexts/ContextProvider';
import { RiNotification3Line } from "react-icons/ri"
import { FiSettings } from 'react-icons/fi';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import NavbarMenuMediaQuery from "../../components/NavbarMenuMediaQuery"


const NavbarDashboard = () => {
  
  return (
    <>
      <div className='vavbar-dashboard'>

        <BsFillMenuButtonWideFill />

      </div>

    </>
  )
}

export default NavbarDashboard