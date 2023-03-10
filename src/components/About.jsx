import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-150 bg-gradient-to-b from-gray-800 to-black text-white pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl pb-3 mt-15">
Basically, I being a Bachelor of Computer Application graduate, with a mere knowledge in HTML, I started developing my interest in Web developing field and acquired knowledge in few front end technologies, frameworks and libraries like HTML, CSS, JavaScript, Bootstrap, ReactJS and built up few responsive web pages and apps from the ground up.
        </p>
        <p className="text-xl pb-3 mt-2">Also to become a full stack developer with my own interest and passion developed a skill set in backend technologies like NodeJS, ExpressJS and database of MongoDB.</p>
      </div>
    </div>
  );
};

export default About;