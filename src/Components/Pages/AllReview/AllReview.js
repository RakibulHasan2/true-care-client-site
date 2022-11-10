import React, { useEffect, useState } from 'react';
import './AllReview.css'
import AllReviewCard from './AllReviewCard/AllReviewCard';
const AllReview = () => {
    const [allReview, setAllReview] = useState([])
    useEffect(() => {
        fetch('https://true-care-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setAllReview(data))
      } ,[])
    //   console.log(allReview)
    return (
        <div>
             <div className='text-center mb-4'>
            <h2 className="text-4xl font-bold mb-5">All Review</h2>
            <p className='mb-8'> Get All Reviews from Across the Web</p>
        </div>
        <div className='grid gap-6 service grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6'>
            {
                allReview.map(review => <AllReviewCard
                    key={review._id}
                    review={review}
                ></AllReviewCard>)
            }
        </div>
        </div>
    );
};

export default AllReview;