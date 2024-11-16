import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-900 text-white flex justify-between items-center'>
            <div>
                <h1 className='text-4xl font-extrabold ml-4'>TEETH WIZARD</h1>
            </div>
            <div>
                <NavLink to="/"
                // className={({ isActive }) => isActive ? "text-red-500" : ""}
                >Home</NavLink>
                <NavLink to="/allTreatments" className="ml-4">All Treatment</NavLink>
                <NavLink to="/myAppoinments" className="ml-4">My Appointment</NavLink>
                <NavLink to="/profile" className="ml-4">Profile</NavLink>
            </div>
            <div>
                <button className='btn mr-4 btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;Navbar