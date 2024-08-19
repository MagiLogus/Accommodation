import React, { useState } from "react";
import Local from "../../../assets/icons/local-icon.svg";
import Checkin from "../../../assets/icons/checkin-icon.svg";
import Checkout from "../../../assets/icons/checkout-icon.svg";
import "./style.css"

const SearchBar = () => {

    return (
        <React.Fragment>
            <section class="search-section">
                <div class="search-bar">
                    <div class="input-icon">
                        <img className="local" src={Local} />
                        <input type="text" placeholder="Qual o local desejado?" />
                    </div>
                    <div class="vertical-dashed-line"></div>
                    <div class="input-icon">
                        <img className="checkin" src={Checkin} />
                        <input type="text" data-placeholder="Data check in" placeholder="Data check in" />
                    </div>
                    <div class="vertical-dashed-line"></div>
                    <div class="input-icon">
                        <img className="checkout" src={Checkout} />
                        <input type="text" data-placeholder="Data check out" placeholder="Data check out" />
                    </div>
                    <div class="vertical-dashed-line"></div>
                    <button>Procurar hotel</button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SearchBar;