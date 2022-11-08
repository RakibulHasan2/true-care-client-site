import React from 'react';
import { Link } from 'react-router-dom';
import { TfiMoreAlt } from 'react-icons/tfi';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    const {name, img, price, details} = service;
    return (
        <div className="card card-compact w-92 bg-base-100 service-body">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{name}</h2>
            <p className='text-xl text-teal-600 font-semibold'>Price: BDT {price}</p>
            <p>{details.slice(0,100)}</p>
            <div className="card-actions justify-end">
                <Link to='/'>
                <button className="btn btn-primary">View Details
                <TfiMoreAlt className='ml-3'></TfiMoreAlt>
                </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;