import React from "react";
import Slider from "../Components/Slider";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import AllGroup from "./AllGroup";
import Actions from "../Components/Actions";
import { Helmet } from "react-helmet";

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HobbyHub - A Local Hobby Group Organizer</title>
        <link rel="canonical" href="https://b11-a10-papiya.netlify.app/" />
      </Helmet>
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
