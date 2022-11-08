import React from 'react';
import './ContactMe.css'
import { AiOutlineClockCircle} from 'react-icons/ai';
import { GoLocation  } from 'react-icons/go';
import { BsTelephoneXFill } from 'react-icons/bs';
const ContactMe = () => {
    return (
        <div className='mb-10'>
            <p className='text-center text-4xl mb-5 font-bold text-teal-600'>Contact Me</p>
           <div className='flex justify-evenly  text-3xl font-bold contact'>  
           <div>
            <div className='flex justify-center items-center contact-body'>
                <AiOutlineClockCircle className='contact-icon'></AiOutlineClockCircle>
                <p>Opening Hour <br /> <span className='text-xl'>at 9 o'clock morning</span></p>
            </div>
            </div>
            <div>
            <div className='flex justify-center items-center contact-body'>
                <GoLocation className='contact-icon'></GoLocation>
                <p>Location<br /> <span className='text-xl'>Dhaka, Tongi</span></p>
            </div>
            </div>
            <div>
            <div className='flex justify-center items-center contact-body'>
                <BsTelephoneXFill className='contact-icon'></BsTelephoneXFill>
                <p>Contact Now<br /> <span className='text-xl'>+00213131239</span></p>
            </div>
            </div>
            
           </div>
        </div>
    );
};

export default ContactMe;