import React from "react";
import "./style.css"

const AnimatedIntroSection = ({ children }) => {

    return (
        <React.Fragment>
            <div className="background">
                {children}
            </div>
        </React.Fragment>
    );
};

export default AnimatedIntroSection;