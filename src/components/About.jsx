import React from "react";
import mainPic from "/brother.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4"
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg m-4 w-full md:w-1/2">
          <h1 className="font-bold text-4xl pb-5 text-center md:text-left">
            Ainash Neupane
          </h1>
          <p className="text-gray-700">
            I am a dedicated banking professional with a Bachelor's degree in
            Business Studies (BBS) from Tribhuvan University and over 4 years of
            experience as an Experience Manager at NIC Asia Bank, Besishar
            Tanahun. My role involves handling customer needs, offering
            personalized financial solutions, and ensuring the smooth
            functioning of the branch operations.
          </p>
          <p className="pt-4 text-gray-700">
            I actively participate in meetings, training programs, and workshops
            to enhance my skills and stay updated with the latest trends in the
            banking industry. By focusing on customer satisfaction, I build
            strong relationships based on trust and reliability.
          </p>
          <p className="pt-4 text-gray-700">
            I believe in continuous learning, teamwork, and hard work as the
            foundation for personal and professional growth. My goal is not only
            to help customers achieve their financial success but also to
            contribute to the development of the organization and my team.
          </p>
        </div>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg m-4 w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-4">Profile</h1>
          <img
            src={mainPic}
            alt="Profile Picture"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full justify-center">
            <a
              className="border-2 border-black bg-slate-600 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-300 text-center w-full md:w-auto"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="border-2 border-black bg-slate-600 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-300 text-center w-full md:w-auto"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
