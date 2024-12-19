import React from "react";
import mainPic from "../assets/images/brother.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col md:flex-row justify-center items-center h-screen bg-white"
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-lg m-4 w-full md:w-1/2">
          <h1 className="font-bold text-4xl pb-5">Ainash Neupane</h1>
          <p>
            I am a dedicated banking professional with a Bachelor's degree in
            Business Studies (BBS) from Tribhuvan University and over 4 years of
            experience as an Experience Manager at NIC Asia Bank, Besishar
            Tanahun. My role involves handling customer needs, offering
            personalized financial solutions, and ensuring the smooth
            functioning of the branch operations.
          </p>{" "}
          <p className="pt-4">
            I actively participate in meetings, training programs, and workshops
            to enhance my skills and stay updated with the latest trends in the
            banking industry. By focusing on customer satisfaction, I build
            strong relationships based on trust and reliability.
          </p>
          <p className="pt-4">
            {" "}
            I believe in continuous learning, teamwork, and hard work as the
            foundation for personal and professional growth. My goal is not only
            to help customers achieve their financial success but also to
            contribute to the development of the organization and my team.
          </p>
        </div>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg m-4 w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">Profile</h1>
          <img src={mainPic} alt="Profile Picture" className="" />
          <div className="flex flex-row gap-20 mt-4">
            <div>
              <a
                className="border-2 border-black bg-slate-600 p-2 m-2 hover:bg-yellow-500"
                href="#experience"
              >
                Experience
              </a>
            </div>
            <div>
              <a
                className="border-2 border-black bg-slate-600 p-2 m-2 hover:bg-yellow-500"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
