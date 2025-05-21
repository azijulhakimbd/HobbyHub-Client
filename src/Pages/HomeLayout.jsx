import React from 'react';
import Slider from '../Components/Slider';
import Contact from '../Components/Contact';
import OurTeam from '../Components/OurTeam';

const HomeLayout = () => {
    return (
        <div>
           {/* Slider */}
           <Slider></Slider>
           {/* Our Team */}
           <OurTeam></OurTeam>
           {/* Contact */}
           <Contact></Contact>
        </div>
    );
};

export default HomeLayout;