import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <div className='px-2 pb-2'><Navbar></Navbar></div>
            <div className='mx-2 lg:mx-8'><Outlet></Outlet></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Root;