import React from "react";
import "./style.css";

const Header = () => {

    return (
        <React.Fragment>
            <header>
                <div className="logo">Accommodations.com</div>
                <div className="menu-wrapper">
                    <nav>
                        <a href="#hotels">Hotels</a>
                        <a href="#contact">Contact</a>
                        <a href="#login">Login</a>
                    </nav>
                    <div className="cta-buttons">
                        <a href="#sign-up">Sign Up</a>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;