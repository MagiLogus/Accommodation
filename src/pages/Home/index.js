import React from "react";
import Header from "../../Layouts/Header/Header";
import AnimatedIntroSection from "../../Components/AnimatedIntroSection/AnimatedIntroSection";
import IntroSection from "./IntroSection/IntroSection";
import Contact from "./Contact/Contact";
import AnimatedContact from "../../Components/AnimatedContact/AnimatedContact";
import Promotion from "./Promotion/Promotion";


const Home = () => {

    return (
        <React.Fragment>
            <AnimatedIntroSection>
                <Header />
                <IntroSection />
            </AnimatedIntroSection>
            <Promotion/>
            <AnimatedContact>
                <Contact />
            </AnimatedContact>



        </React.Fragment>
    );
};

export default Home;