import React from 'react';
import Slider from '../Components/Slider';
import Contact from '../Components/Contact';

const HomeLayout = () => {
    return (
        <div>
           {/* Slider */}
           <Slider></Slider>
           {/* Contact */}
           <Contact></Contact>
        </div>
    );
};

export default HomeLayout;