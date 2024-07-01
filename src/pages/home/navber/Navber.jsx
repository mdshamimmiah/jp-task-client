import { useContext } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';
import './style.css';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('User logged out successfully');
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  const navlinks = (
    <ul className='flex flex-col lg:flex-row lg:gap-2'>
      <li className="nav-item">
        <NavLink to="/">Home Page</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/colleges'>Colleges</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/admission'>Admission</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/myCollege'>My College</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/asi'>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/register'>Register</NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Education</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navlinks}
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-sm rounded-full bg-blue-400 text-white shadow-[#f72e05] shadow-2xl mr-2">LogOut</button>
            <div className="">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </label>
            </div>
          </>
        ) : (
          <Link to='/login' className="shadow-[#f72e05] shadow-2xl bg-black text-white btn btn-sm rounded-full">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
