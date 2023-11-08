import React, { Component } from "react";
import BackToTop from 'react-back-to-top-button';
import '../scrollTop/scrollToTopButton.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default class ScrollToTopButton extends Component {
    render() {
        return (
            <BackToTop
                showOnScrollDown
                className='buttonPosition widthButtom'
                showAt={100}
                speed={1000}
                easing="easeInOutQuint"
                style={{zIndex: '9999'}}
            >
                <BsFillArrowUpCircleFill className='scrollToTopButton buttonPosition' color="#26AAE2" size={63} />
            </BackToTop>
        );
    }
}