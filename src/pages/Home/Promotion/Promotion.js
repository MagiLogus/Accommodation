/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Animation from "../../../assets/animations/travel.json"

const Promotion = () => {

    return (
        <React.Fragment>
            <div className="promo-section">
                <div className="promo-text">
                    <h1>Come check out the best <a href="#">hotels</a> with the best <a href="#">deals</a> in the country</h1>
                    <p><a href="#">Don't miss out</a> and come see the <a href="#">best</a> in Brazilian hospitality</p>
                </div>
                <div className="promo-image">

                    <DotLottieReact
                        src={Animation}
                        loop
                        autoplay
                        style={{ width: '100%', height: '400px' }} // Adicionando tamanho e estilo

                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Promotion;