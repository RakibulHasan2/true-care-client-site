import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import './AllServices.css'
const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        document.title = 'All Services'
        fetch('https://true-care-server.vercel.app/allServices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
        <div className='text-center mb-4'>
            <h2 className="text-4xl font-bold mb-5">My Service Area</h2>
            <p className='mb-8'> Get All Results from Across the Web. 99% Match on Dental Clinic True Care. <br /> Completely Secure. Always Facts. Results & Answers.</p>
        </div>
        <div className='grid gap-6 service grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
    );
};

export default AllServices;