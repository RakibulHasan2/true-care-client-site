import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/UserContext';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {_id,name, img, price, details, ratings}  = useLoaderData()
    const {user} = useContext(AuthContext)
    const [submit, setSubmit] = useState('')
    const loginPlease = () =>{
        setSubmit('Please Login to Submit')
    }
  
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const UserName = form.Name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const photoURL = form.url.value
 
        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: UserName,
            email,
            message,
            photoURL: photoURL,
            img: img
        }
     

        fetch('https://true-care-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                 authorization: `Bearer ${localStorage.getItem('trueCare-Token')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            if(data.acknowledged)
            {
               if(user.email){
                alert('review placed successfully')
                form.reset()
               }
            }
        })
        .catch(err => console.log(err));
    }

    
    return (
            <div >
                 {/*----------more details part of service----------*/}
             <div className='flex justify-between container details-container mb-5'>
           <div className='details-body'>
           <h1 className='text-center text-primary font-bold text-3xl '>{name}</h1>
           <p className='mb-2'> <span className='font-bold'>Ratings </span> : {ratings}</p>
           <p className='mb-2'> <span className='font-bold'>Price </span> : BDT {price}</p>
           <p className='text-justify'><span className='font-bold '>Service Details</span>: {details}</p>
           </div>
           <img src={img} alt="" />
           </div>
              {/* ----------all review---------------------*/}
              <div>

              </div>
            {/* ----------review form---------------------*/}
           <div className='review-section'>
           <form onSubmit={handlePlaceReview}>
                <p className='text-3xl font-bold text-center mb-5'>Please Give Your Valuable Review in <span className='text-primary'>{name}</span></p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="Name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="url" type="text" placeholder="Your Photo URL"  className="input input-ghost w-full  input-bordered"    />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mb-3" placeholder="Your Message" required></textarea>

               {/* {
                user?.uid?
                <>
                 <input className='btn mb-5' type="submit" value="Submit Review" />
                 </>
                 :
                 <> <Link to='/login'><input className='btn mb-5' type="submit" value="Submit Review" /></Link></>
               } */}
               <Link to='/login'>
              {
                user?.email?
               <></>
                : <> <p className='mb-4 text-lg text-red-600'>{submit}</p></>
              }
               </Link>
               <input onClick={loginPlease} className='btn mb-5' type="submit" value="Submit Review" />
            </form>
           </div>
        </div>
    );
};

export default ServiceDetails;