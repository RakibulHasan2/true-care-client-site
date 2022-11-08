import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/UserContext';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {name, img, price, details, ratings}  = useLoaderData()
    const {user} = useContext(AuthContext)

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.Name.value;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            // service: _id,
            // serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
    }
    return (
            <div >
             <div className='flex justify-between container details-container mb-5'>
           <div className='details-body'>
           <h1 className='text-center text-primary font-bold text-3xl '>{name}</h1>
           <p className='mb-2'> <span className='font-bold'>Ratings </span> : {ratings}</p>
           <p className='mb-2'> <span className='font-bold'>Price </span> : BDT {price}</p>
           <p className='text-justify'><span className='font-bold '>Service Details</span>: {details}</p>
           </div>
           <img src={img} alt="" />
           </div>
           <div className='review-section'>
           <form onSubmit={handlePlaceReview}>
                <p className='text-3xl font-bold text-center mb-5'>Please Give Your Valuable Review</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="Name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="url" type="text" placeholder="Your Photo URL"  className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mb-3" placeholder="Your Message" required></textarea>

                <input className='btn mb-5' type="submit" value="Submit Review" />
            </form>

           </div>
        </div>
    );
};

export default ServiceDetails;