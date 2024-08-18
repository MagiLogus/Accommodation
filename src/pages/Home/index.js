import React from "react";
import Header from "../../Layouts/Header/Header";
import AnimatedIntroSection from "../../Components/AnimatedIntroSection/AnimatedIntroSection";
import IntroSection from "../../Components/IntroSection/IntroSection";

const Home = () => {

    return (
        <React.Fragment>
            <AnimatedIntroSection>
                <Header />
                <IntroSection />
            </AnimatedIntroSection>
        </React.Fragment>
    );
};

export default Home;