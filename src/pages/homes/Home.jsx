import React, { useState, useEffect } from 'react';
import Spinner from "../../components/elements/spinner/index"
import HomeIndex from "../homes/home/index";
import Skills from "../../pages/homes/skills/index";
import Portfolio from "../../pages/homes/portfolio/index"
import Footer from "../../components/layouts/footer/index"

export default function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <HomeIndex />
                    <About />
                    <Skills />
                    <Portfolio />
                    {/* <Footer /> */}
                </>
            )}
        </>
    );
}