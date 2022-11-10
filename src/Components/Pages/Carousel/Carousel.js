import React from 'react';
import './Carousel.css'
const Carousel = () => {
    return (
        <div className="carousel w-full image container">
        <div id="slide1" className="carousel-item relative w-full">

          <img src="https://img.freepik.com/premium-photo/doctor-with-stethoscope-hand-hospital-background-medical-medicine-concept_34200-278.jpg?w=2000" className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
           <div className="absolute flex justify-between transform -translate-y-1/2 left-40 top-1/2">
            <p className='text-5xl font-bold responsive-font'>Enjoy Your Life —<br /> I am Here to Save it! <br /><p className='text-xl mt-4 mb-10 responsive-font'>I am available for 24/7 hours <br />I care for you — inside and out! Taking Care of You Since — Well, <br /> Beginning of Time!</p></p>
           </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>    
        </div> 

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://png.pngtree.com/background/20210710/original/pngtree-medical-doctor-science-background-picture-image_968711.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <div className="absolute flex justify-between transform -translate-y-1/2 right-40 top-1/2">
            <p className='text-5xl font-bold responsive-font'>Enjoy Your Life —<br /> I am Here to Save it! <br /><p className='text-xl mt-4 mb-10 responsive-font'>I am available for 24/7 hours <br />I care for you — inside and out! Taking Care of You Since — Well, <br /> Beginning of Time!</p></p>
           </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Carousel;