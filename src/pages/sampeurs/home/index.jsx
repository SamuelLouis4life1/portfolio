import React, { useState } from "react";
import Footer from "../../../components/layouts/footer";
import Nav from "../../../components/Nav";
import { SampeursCarousel } from "../../../components/elements/textCarousel/index"
import "./home.css"
import back from "../../../images/sampeurs/back.png"
import sampeurs1 from "../../../images/sampeurs/sampeurs1.png"
import mens from "../../../images/sampeurs/mens.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from "../../../components/elements/searchBar/index";
import Cards from "../card";


export default function Sampeurs() {

  let [transition, setTransition] = useState('width-carousel')

  const handleTransition = () => {
    setTransition('width-carousel fade-in-image')
  }

  const getConfigurableProps = () => ({
    fadeAnimationHandler: true,
    showArrows: true,
    showIndicators: true,
    infiniteLoop: true,
    // animationHandler: fade,
    // showThumbs: true,
    // useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    // swipeable: true,
    // autoFocus: true,
    interval: 4000,
    transitionTime: 500,
    // swipeScrollTolerance: 5,

    showThumbs: false,
    showStatus: false
  });

  return (
    <>
      <Nav />
      <div className="homeSampeurSection">
        <div className="sampeurHomeDescription">
          <p className="subtitle">Our clothing, your comfort</p>
          <p className="subtitle-description">High Quality Products With Custom Offers And Fixed Price.</p>
          <Search />
        </div>

        <Carousel
          {...getConfigurableProps()}
          // basicFade
          onChange={handleTransition}
          fadeAnimationHandler
        // autoPlay
        // showThumbs = "false"
        >
          <div>
            <img src={mens} />
            <p className="legend">Men's t-shirts</p>
          </div>
          <div>
            <img src={back} />
            <p className="legend">Women's t-shirts</p>
          </div>
          <div>
            <img src={sampeurs1} />
            <p className="legend">Women Pant Collectons</p>
          </div>
          <div>
            <img src={mens} />
            <p className="legend">Men Pant Collectons</p>
          </div>

          {/* http://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base */}
          {/* https://app.bountysource.com/teams/react-responsive-carousel/issues?tracker_ids=12004397 */}
        </Carousel>
      </div>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />

    </>
  )
}
