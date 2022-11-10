import React from 'react';
import './Footer.css'
import logo from '../../../Images/pngwing.com (3).png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black footer text-base-content p-28">
        <div className='logo-footer'>
        <img src={logo} alt="" />
        <p className='text-3xl font-bold'>True <span className='text-teal-600'>Care</span><br/>Born For Serving</p>
          </div> 
       <div>
          <span className="footer-title">Services</span> 
           <a href="/" className="link link-hover">Dental Implants</a> 
           <a href="/" className="link link-hover">Teeth Whitening</a> 
           <a href="/" className="link link-hover">Surgical Dentistry</a> 
           <a href="/" className="link link-hover">Root Canal</a> 
           <a href="/" className="link link-hover">Cap / Crown</a> 
           <a href="/" className="link link-hover">Orthodontics</a>
        </div> 
       <div>
         <span className="footer-title">Contact</span> 
         <a href="/" className="link link-hover">About Me</a> 
         <a href="/" className="link link-hover">Contact</a> 
        <a href="/" className="link link-hover">Telephone</a> 
        <a href="/" className="link link-hover">Location</a>
      </div> 
     <div>
       <span className="footer-title">Legal</span> 
       <a href="/" className="link link-hover">Terms of use</a> 
       <a href="/" className="link link-hover">Privacy policy</a> 
       <a href="/" className="link link-hover">Cookie policy</a>
     </div>
   </footer>
    );
};

export default Footer;