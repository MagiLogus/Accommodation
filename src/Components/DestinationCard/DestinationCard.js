import React from "react";
import './style.css'

const DestinationCard = ({ image, title, description, location }) => {
    return (
        <React.Fragment>
            <div className="destination-card">
                <img src={image} alt={title} />
                <div className="description-container">
                    <h2>{title}</h2>
                    <span className="location">{location}</span>
                </div>
                <p>{description}</p>
            </div>
        </React.Fragment>
    );
};

export default DestinationCard;