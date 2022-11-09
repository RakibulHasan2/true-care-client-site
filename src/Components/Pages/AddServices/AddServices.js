import React from 'react';
import './AddServices.css'
const AddServices = () => {
    return (
        <div className='addService-section'>
            <p className='text-2xl font-bold mb-5'>Add Services Here</p>
          <form>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-3" required/> <br />
                <input name='photoURL' type="text" placeholder="Photo URL (Optional)" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br />
                <input name='ratings' type="text" placeholder="Rating" className="input input-bordered input-success w-full max-w-xs mb-3"/> <br />
                <input name='price' type="text" placeholder="Price" className="input input-bordered input-success w-full max-w-xs mb-3"/> <br />
                    <textarea name='details' className="textarea textarea-success w-96" placeholder="Add Service Details" required></textarea> <br />
                
                         <button className='btn btn-success'>Submit</button>
             
                </form> :
           </div>
    );
};

export default AddServices;