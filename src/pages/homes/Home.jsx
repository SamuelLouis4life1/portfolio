import React, { useState, useEffect } from 'react';
import Spinner from "../../components/elements/spinner/index"
import HomeIndex from "../homes/home/index";
import About from "./about";
import Skills from "../../pages/homes/skills/index";
import Experiences from './experiences';
import Services from './services';
import Portfolio from "../../pages/homes/portfolio/index"
import Contact from './contact'
import Testes from './Testes'
import Footer from "../../components/layouts/footer/index"

export default function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Testes />
                    <HomeIndex />
                    <About />
                    <Skills />
                    <Experiences />
                    <Services />
                    <Portfolio />
                    <Contact />
                    <Footer />
                    {/* <BackToTopButton /> */}
                </>
            )}
        </>
    );
}