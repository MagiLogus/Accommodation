import React from "react";
import Animation from "../../../assets/animations/travel.json"
import Lottie from "lottie-react";
import "./style.css"

const PromotionSection = () => {

    return (
        <React.Fragment>
            <div className="promo-section">
                <div className="promo-text">
                    <h1>Come check out the best <a href="#">hotels</a> with the best <a href="#">deals</a> in the country</h1>
                    <p><a href="#">Don't miss out</a> and come see the <a href="#">best</a> in Brazilian hospitality</p>
                </div>
                <div className="promo-image">
                    <Lottie animationData={Animation} loop={true} style={{ "max-width": "449px", "max-height": "300px", "margin-bottom": "8px" }} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default PromotionSection;