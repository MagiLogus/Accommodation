import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

const AnimatedContact = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const totalCircles = 10; // Número de círculos
        const container = containerRef.current;

        for (let i = 0; i < totalCircles; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            container.appendChild(circle);

            const size = Math.random() * 90 + 10; // Tamanho entre 10 e 100
            const positionX = Math.random() * (container.offsetWidth - size); // Garante que o círculo fique dentro da largura do contêiner
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
                duration: 5 + Math.random() * 5, // Duração entre 5 e 10 segundos
                ease: "power1.inOut",
                repeat: -1,
                delay: Math.random() * 2, // Atraso inicial
                opacity: 0,
                onRepeat: () => {
                    const positionX = Math.random() * (container.offsetWidth - circle.offsetWidth); // Recalcula a posição X na repetição
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