import Carousel from "re-carousel";
import CallbackExample from "./callback-example.js";
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'
import "./textCarousel.css"

function App() {
    return (
        <div className="App">
            <Carousel
                loop
                auto
                axis="y"
                duration= {1000}
                className="custom-class"
                widgets={[IndicatorDots, Buttons]}
            >
                <p style={{ height: "100%" }}>BE POSSITIVE</p>
                <p style={{ height: "100%" }}>POSSITIVE MINDED</p>
                <p style={{ height: "100%" }}>STAY STRONG</p>
                <p style={{ height: "100%" }}>IF YOU DON'T HAVE AN IMAGE, BE ONE</p>
                <p style={{ height: "100%" }}>NEVER GIVE UP</p>

                {/* <p style={{ backgroundColor: "royalblue", height: "100%" }}>BE POSSITIVE</p>
                <p style={{ backgroundColor: "orange", height: "100%" }}>POSSITIVE MINDED</p>
                <p style={{ backgroundColor: "orchid", height: "100%" }}>STAY STRONG</p>
                <p style={{ backgroundColor: "orchid", height: "100%" }}>IF YOU DON'T HAVE AN IMAGE, BE ONE</p>
                <p style={{ backgroundColor: "orchid", height: "100%" }}>NEVER GIVE UP</p> */}
            </Carousel>
        </div>
    );
}

export { App }