import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import './MyReviews.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Review from './Review/Review';
const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReview] = useState([])

   useEffect( ()=>{
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
    .then(res => res.json())
    .then(data => setReview(data))
   },[user?.email])

   const handleDelete = id => {
    const proceed = window.confirm('are you sure to delete this review')
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
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
                // alert('deleted');
                const remaining = reviews.filter(odr => odr._id !== id);
                setReview(remaining);
            }
        })
    }
    }



    return (
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
    );
};

export default MyReviews;