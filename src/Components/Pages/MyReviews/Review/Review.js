import React from 'react';
import './Review.css'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/bs';
import './Review.css'
const Review = ({review}) => {
    const { service,serviceName,customer,email,message,photoURL,img} = review
   
    return (
        <div className="card card-compact w-96 shadow-xl mb-3 review-body">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <div className='font-bold'>
                    <div>
                        <h2 className="text-xl">Service Name : {serviceName}</h2>
                        <h2 className='text-lg'>Name: {customer}</h2>
                        <h2 className='text-lg'>Email :{email}</h2>
                    </div>
                </div>
                <div className='review-box overflow-scroll h-52 rounded p-2'>
               <p className=' text-lg'><span className='font-bold'>Review :</span> {message}</p><br />
                </div>
                <div className='flex justify-between'>
                  <div className="card-actions justify-end">
                    <button className='btn btn-error'>Delete review</button>
                    </div>
                    <div className="card-actions justify-end">
                    <button className='btn btn-success'>Edit Review</button>
                    </div>
                </div>
                {/* <p className='mt-11  flex items-center'> Rating: <span className='flex ml-2 items-center'><FaStar className='text-yellow-500'></FaStar>{star}<img className="mask mask-circle h-11 ml-14" src={photoURL} alt='' /><h1>{buyerName}</h1></span></p>  */}
                
                
            </div>
        </div>
    );
};

export default Review;