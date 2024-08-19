import React from "react";
import Header from "../../Layouts/Header/Header";
import AnimatedIntroSection from "../../Components/AnimatedIntroSection/AnimatedIntroSection";
import IntroSection from "./IntroSection/IntroSection";
import AnimatedContact from "../../Components/AnimatedContact/AnimatedContact";
import PromotionSection from "./PromotionSection/PromotionSection";
import ContactSection from "./ContactSection/ContactSection";
import SearchBar from "./SearchBar/SearchBar";
import PlacesSection from "./PlacesSection/PlacesSection";

const Home = () => {

    return (
        <React.Fragment>
            <AnimatedIntroSection>
                <Header />
                <IntroSection />
            </AnimatedIntroSection>
            <SearchBar />
            <PlacesSection />
            <PromotionSection />
            <AnimatedContact>
                <ContactSection />
            </AnimatedContact>
        </React.Fragment>
    );
};

export default Home;