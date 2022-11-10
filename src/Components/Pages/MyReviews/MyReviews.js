import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import './MyReviews.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Review/Review';
const MyReviews = () => {
    const {user,logOut} = useContext(AuthContext)
    const [reviews, setReview] = useState([])
   useEffect( ()=>{
        document.title = 'My Reviews'
    fetch(`https://true-care-server.vercel.app/reviews?email=${user?.email}`,{
        headers:{
            authorization: `Bearer ${localStorage.getItem('trueCare-Token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        setReview(data)
    })
   },[user?.email])


   const handleDelete = id => {
    const proceed = window.confirm('are you sure to delete this review')
    if(proceed){
        fetch(`https://true-care-server.vercel.app/reviews/${id}`, {
         method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0){
                toast.success("Deleted Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                const remaining = reviews.filter(odr => odr._id !== id);
                setReview(remaining);
            }
        })
    }
    }

    return (
    <div >
        { reviews.length === 0 ?
        <div className='flex justify-center font-bold'><h1 className='text-4xl mb-5'>No Reviews Were Added</h1></div>
        :    
      <div className='review-card'>
        {
            reviews.map( review => <Review
                key={review._id}
                review = {review}
                handleDelete = {handleDelete}
                >
                </Review>)
        }
      </div>
        }
    </div>
    );
};

export default MyReviews;