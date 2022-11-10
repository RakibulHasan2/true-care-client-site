import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AllReviewCard.css'
const AllReviewCard = ({review}) => {
    const {_id,service,serviceName,customer,email,message,photoURL,img} = review;
    return (
        <div className="card card-compact w-96 shadow-xl mb-3 review-body">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <div className='font-bold'>
                        <h2 className="text-xl text-center text-teal-600">{serviceName}</h2>
                      <div className='flex justify-between userPhoto'>
                      <h2 className='text-lg'>Name: {customer}</h2>
                      {
                        photoURL? 
                        <><img src={photoURL} alt="" /></>
                        :
                        <FaUser></FaUser>
                      }
                      </div>
                        <h2 className='text-lg'>Email :{email}</h2>
                </div>
                <div className='review-box overflow-scroll h-52 rounded p-2'>
               <p className=' text-lg'><span className='font-bold'>Review :</span> {message}</p><br />
                </div>        
            </div>
        </div>
    );
};

export default AllReviewCard;