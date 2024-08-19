import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

const AnimatedContact = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const totalCircles = 10;
        const container = containerRef.current;

        for (let i = 0; i < totalCircles; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            container.appendChild(circle);

            const size = Math.random() * 90 + 10;
            const positionX = Math.random() * (container.offsetWidth - size);
            gsap.set(circle, {
                width: size,
                height: size,
                x: positionX,
                y: container.offsetHeight,
                opacity: 0.5,
                backgroundColor: "#FAFAFA",
                borderRadius: "50%",
                position: "absolute",
            });

            animateCircle(circle);
        }

        function animateCircle(circle) {
            gsap.to(circle, {
                y: -100,
                duration: 5 + Math.random() * 5,
                ease: "power1.inOut",
                repeat: -1,
                delay: Math.random() * 2,
                opacity: 0,
                onRepeat: () => {
                    const positionX = Math.random() * (container.offsetWidth - circle.offsetWidth);
                    gsap.set(circle, {
                        y: container.offsetHeight,
                        x: positionX,
                        opacity: 0.5,
                    });
                },
            });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            className="contact-section"
        >
            {children}
        </section>
    );
};

export default AnimatedContact;