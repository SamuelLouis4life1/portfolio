import React, { useState } from "react";
import Footer from "../../../components/layouts/footer";
import Nav from "../../../components/Nav";
import { SampeursCarousel } from "../../../components/elements/textCarousel/index"
import "./home.css"
import Men from "../../../images/sampeurs/men.png"
import Women from "../../../images/sampeurs/women.png"
import MenPants from "../../../images/sampeurs/men_pants.png"
import WomenPants from "../../../images/sampeurs/women_pants.png"
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
            <img src={Men} />
            <p className="legend">Men's t-shirts</p>
          </div>
          <div>
            <img src={Women} />
            <p className="legend">Women's t-shirts</p>
          </div>
          <div>
            <img src={WomenPants} />
            <p className="legend">Women Pant Collectons</p>
          </div>
          <div>
            <img src={MenPants} />
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
