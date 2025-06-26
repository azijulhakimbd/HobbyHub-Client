import React from "react";
import Slider from "../Components/Slider";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import AllGroup from "./AllGroup";
import Actions from "../Components/Actions";


const HomeLayout = () => {
  return (
    <div>

      {/* Slider */}
      <Slider></Slider>
      {/* Features Group */}
      <AllGroup></AllGroup>
      {/* Actions */}
      <Actions></Actions>
      {/* Our Team */}
      <OurTeam></OurTeam>
      {/* Contact */}
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
