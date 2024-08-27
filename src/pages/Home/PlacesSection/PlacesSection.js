import React from "react";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";
import angra from '../../../assets/images/angradoreis.jpg';
import arraial from '../../../assets/images/arraial.jpg';
import treze from '../../../assets/images/treze.jpg';
import ipanema from '../../../assets/images/ipanema.jpg';
import "./style.css"

const DestinationSection = () => {
    const destinations = [
        {
            image: angra,
            title: 'Angra dos Reis',
            description: 'Desfrute de um paraíso tropical em nossa pousada! Relaxe em nossas piscinas com vista para o mar.',
            location: 'RJ'
        },
        {
            image: arraial,
            title: 'Arraial do Cabo',
            description: 'Conecte-se com a natureza em Arraial do Cabo! Nossa pousada está localizada próximo às praias.',
            location: 'RJ'
        },
        {
            image: treze,
            title: 'Treze Tílias',
            description: 'Viva a experiência de um vilarejo europeu no Brasil! Nossa pousada em Treze Tílias é perfeita.',
            location: 'SC'
        },
        {
            image: ipanema,
            title: 'Ipanema',
            description: 'Explore a rica cultura e história de Ipanema! Nossa pousada é o ponto de partida ideal para conhecer.',
            location: 'RJ'
        },
        {
            image: angra,
            title: 'Angra dos Reis',
            description: 'Desfrute de um paraíso tropical em nossa pousada! Relaxe em nossas piscinas com vista para o mar.',
            location: 'RJ'
        },
        {
            image: arraial,
            title: 'Arraial do Cabo',
            description: 'Conecte-se com a natureza em Arraial do Cabo! Nossa pousada está localizada próximo às praias.',
            location: 'RJ'
        },
        {
            image: treze,
            title: 'Treze Tílias',
            description: 'Viva a experiência de um vilarejo europeu no Brasil! Nossa pousada em Treze Tílias é perfeita.',
            location: 'SC'
        },
        {
            image: ipanema,
            title: 'Ipanema',
            description: 'Explore a rica cultura e história de Ipanema! Nossa pousada é o ponto de partida ideal para conhecer.',
            location: 'RJ'
        },
    ];

    return (
        <React.Fragment>
            <section className="destination-section">
                <div className="destination-container">
                    {destinations.map((dest, index) => (
                        <DestinationCard
                            key={index}
                            image={dest.image}
                            title={dest.title}
                            description={dest.description}
                            location={dest.location}
                        />
                    ))}
                </div>
            </section>
        </React.Fragment>
    );
};

export default DestinationSection;