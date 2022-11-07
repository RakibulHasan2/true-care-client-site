import React from 'react';
import './Carousel.css'
const Carousel = () => {
    return (
        <div className="carousel w-full image container ml-9">
        <div id="slide1" className="carousel-item relative w-full">

          <img src="https://img.freepik.com/premium-photo/doctor-with-stethoscope-hand-hospital-background-medical-medicine-concept_34200-278.jpg?w=2000" className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
           <div className="absolute flex justify-between transform -translate-y-1/2 left-40 bottom-1/2">
            <p className='text-5xl font-bold'>We are  Committed<br /> to Your Health <br /><span className='text-xl'>I am available for 24/7 hours </span></p>
           </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>    
        </div> 

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://png.pngtree.com/background/20210710/original/pngtree-medical-doctor-science-background-picture-image_968711.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <div className="absolute flex justify-between transform -translate-y-1/2 right-40 bottom-1/2">
            <p className='text-5xl font-bold'>We are  Committed<br /> to Your Health <br /><span className='text-xl'>I am available for 24/7 hours </span></p>
           </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Carousel;