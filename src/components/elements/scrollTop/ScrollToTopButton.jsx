import React, { Component } from "react";
import BackToTop from 'react-back-to-top-button';
import '../scrollTop/scrollToTopButton.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default class ScrollToTopButton extends Component {
    render() {
        return (
            <BackToTop
                showOnScrollDown
                className='button-position widthButtom'
                showAt={100}
                speed={1000}
                easing="easeInOutQuint"
                style={{zIndex: '9999'}}
            >
                <BsFillArrowUpCircleFill className='scroll-to-top-button button-position' />
            </BackToTop>
        );
    }
}