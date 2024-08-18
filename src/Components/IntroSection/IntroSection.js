import React from "react";
import BrazilMap from "../../assets/images/mapa-brasil.png"
import "./style.css"

const IntroSection = () => {

    return (
        <React.Fragment>
            <section className="intro-section">
                    <div className="intro-text">
                        <h1>The Best Accommodations in Brazil</h1>
                        <p>Over 500,000 reservations waiting for you! Just find the ideal location and make your dream trip a reality.</p>
                    </div>
                    <figure className="intro-image">
                        <img src={BrazilMap} alt="Map of Brazil with regions" />
                    </figure>
            </section>
        </React.Fragment>
    );
};

export default IntroSection;