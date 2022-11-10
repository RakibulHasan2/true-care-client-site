import React, { useState } from 'react';
import './UpdateReview.css'
import { useLoaderData } from 'react-router-dom';
const UpdateReview = () => {
    const storedReview = useLoaderData()

    const [review, setReview] = useState(storedReview)
    const handleUpdateUser = e => {
            e.preventDefault()
            fetch(`https://true-care-server.vercel.app/reviews/${storedReview._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    alert('user updated')
                    console.log(data);
                }
                
            })
    }

    const handleInputChange = event =>{
        const message = event.target.value
        const newReview = {...review}
        newReview.message = message 
        setReview(newReview)
    }
    return (
        <div>
           
            <div className='flex justify-center '>
                  <form onSubmit={handleUpdateUser} className=' bg-transparent rounded-xl  mb-4 border w-96 h-9s p-3  text-center'>
                  <h1 className='font-bold text-xl mb-5'>Please Update <span className='text-teal-500 text-2xl'>{storedReview.serviceName}</span> review here :</h1>
                    <textarea onChange={handleInputChange} defaultValue={storedReview.message} type="text" name='message'  className="textarea textarea-success w-full items-center" placeholder="Bio"></textarea> <br />
                    <button type="submit" className='btn btn-success mt-5'>Update Review</button>
                    
               
             </form>
            </div>
        </div>
    );
};

export default UpdateReview;