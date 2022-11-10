import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='container flex error-body'>
        <div>
          <h2 className='error'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='page'>
           <span className='oops'>Ooopppps</span>, This page is not found !!
          </p>
          <Link to='/'> <button className='btn-lg btn my-5'>Back To Home</button> </Link>
        </div>
  </div>
    );
};

export default ErrorPage;