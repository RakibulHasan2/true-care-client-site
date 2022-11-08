import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import logo from '../../../Images/pngwing.com (3).png'
import './Header.css'
const Header = () => {
  const {user, logOut} = useContext(AuthContext)
    return (
    <div className="navbar bg-stone-100 container mb-2">
     <div className="navbar-start logo">
       <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        {
          user?.uid?
          <>
          <li><a>Add Services</a></li>
          <li><a>My Reviews</a></li>
          </>: <p></p>
        }
        <li><Link to='/blog'>Blogs</Link></li>
      </ul>
    </div>
    <img src={logo} className="ml-6" alt="" />
    <a className=" ml-6 text-4xl font-bold nav-title">True <span className=' text-teal-600'> Care</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-bold">
        <li><Link to='/'>Home</Link></li>
        {
          user?.uid?
          <>
          <li><a>Add Services</a></li>
          <li><a>My Reviews</a></li>
          </>: <p></p>
        }
        <li><Link to='/blog'>Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end mr-6 login">
               {
                user?.uid ?
                <div className='logout'>
                 <button className='btn bg-teal-600' onClick={logOut}>Log Out</button>
                </div>
                :
                <>
                <Link to="/login"> <button className='btn bg-teal-600 '>Login</button></Link>
                </>
                }
  </div>
</div>
    );
};

export default Header;