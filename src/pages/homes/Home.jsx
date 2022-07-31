import React from "react";
import HomeIndex from "../homes/home/index";
import About from "./about";
import Skills from "../../pages/homes/skills/index";
import Portfolio from "../../pages/homes/portfolio/index"
import Footer from "../../components/layouts/footer/index"

export default function Home(){
    return (
        <>
        <HomeIndex />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
        </>
    );
}
