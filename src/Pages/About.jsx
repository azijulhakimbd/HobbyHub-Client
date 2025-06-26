import React from "react";

const About = () => {
  return (
   <div className="min-h-screen">
     <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        About Us
      </h2>
      <p className="text-lg text-justify leading-relaxed">
        Welcome to <span className="text-primary font-semibold">HobbyHub</span>{" "}
        – your ultimate destination for connecting with like-minded individuals
        and discovering amazing interest-based communities. Whether you're
        passionate about books, gardening, coding, photography, or anything
        else, HobbyHub provides a friendly platform to join, create, and manage
        hobby groups.
      </p>

      <div className="mt-8 grid gap-6 grid-cols-1">
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Our Mission
          </h3>
          <p className="text-lg">
            To inspire people to connect over shared passions and hobbies. We
            believe everyone deserves a space where their interests are valued
            and shared with a supportive community.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-2">
            What We Offer
          </h3>
          <ul className="list-disc list-inside text-lg">
            <li>Create and manage hobby groups</li>
            <li>Join communities that interest you</li>
            <li>Engage in topic discussions</li>
            <li>Discover events and opportunities</li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
