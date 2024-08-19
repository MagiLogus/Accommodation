import React from "react";
import "./style.css"

const ContactSection = () => {
    return (
        <React.Fragment>
            <div className="contact-container">
                <h2>Talk to one of our advisors</h2>
                <p className="contact-email">accommodations@contact.com</p>
                <p className="contact-phone">(11) 0800-707-0707</p>
            </div>
        </React.Fragment>
    );
};

export default ContactSection;