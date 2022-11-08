import React from 'react';
import Carousel from '../Carousel/Carousel';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Experience></Experience>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;