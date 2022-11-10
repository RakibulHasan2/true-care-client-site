import React, { useEffect } from 'react';
import './AddServices.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddServices = () => {
    useEffect( ()=>{
        document.title = 'Add Service'
    },[])

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const photoURL = form.photoURL.value
        const details = form.details.value
        console.log(serviceName, price, ratings)
 
        const service = {
            name: serviceName,
            price,
            ratings,
            details,
            img: photoURL
        }
        fetch('https://true-care-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            if(data.acknowledged)
            {
                toast.success("Added Service Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                form.reset()
            }
        })
        .catch(err => console.log(err));


    }
    return (
        <div className='addService-section'>
            <p className='text-2xl font-bold mb-5'>Add Services Here</p>
          <form onSubmit={handlePlaceService}>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-3" required/> <br />
                <input name='photoURL' type="text" placeholder="Photo URL (Optional)" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br />
                <input name='ratings' type="text" placeholder="Rating" className="input input-bordered input-success w-full max-w-xs mb-3"/> <br />
                <input name='price' type="text" placeholder="Price" className="input input-bordered input-success w-full max-w-xs mb-3"/> <br />
                    <textarea name='details' className="textarea textarea-success w-96" placeholder="Add Service Details" required></textarea> <br />
                
                    <input className='btn mb-5 btn-primary' type="submit" value="Add Services" />
                    <ToastContainer position="top-center"
                        autoClose={1000}
                       hideProgressBar={false}
                          newestOnTop={false}
                            closeOnClick
                              rtl={false}
                      pauseOnFocusLoss
                       draggable
                        pauseOnHover
                          theme="light" />
             
                </form> :
           </div>
    );
};

export default AddServices;