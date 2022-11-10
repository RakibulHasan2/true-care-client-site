import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';
import Services from '../Services/Services/Services';

const Home = () => {
   useEffect( () => {
    document.title = 'True Care'
   },[])
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Experience></Experience>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;