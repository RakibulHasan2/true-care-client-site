import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from './../../../context/UserContext';
const SignUp = () => {
    const [error, setError] = useState(null)
    const {createUser,updateUserProfile} = useContext(AuthContext)
    useEffect( ()=>{
        document.title = 'SignUp'
    },[])
    const navigate = useNavigate(); 

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.Confirm.value;
        // console.log(url)
        
        if( password.length < 6 ){
            setError("your password should be 6 character or more")
             return;
         }

        if( password !== confirm){
           setError("Your Password Did Not Match")
            return;
        }

        //creating user
            createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log("after signup",user);
                form.reset();
                navigate('/');
            })
            .catch((error) => {
               console.error(error)
              });

    }
    return (
        <div className='login-container'>
        <h1 className='title'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className='login-form'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id=''  placeholder='Your email address' />
            </div>
         
            <div className='login-form'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id=''  placeholder='Your password' />
            </div>
            <div className='login-form'>
            <label htmlFor="Confirm">Confirm Password</label>
            <input type="password" name='Confirm' id=''  placeholder='Your password' />
            </div>
            <p className='text-error'>{error}</p>
            <button className='submit-button' >Submit</button>
        </form>
        <p className='login-text'>Already Have an account? <Link className='login-text' to='/login'>Login</Link></p>
    </div>
    );
};

export default SignUp;