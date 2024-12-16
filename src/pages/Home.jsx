import React from "react";
import mainPic from "../assets/images/brother.jpg";
const Home = () => {
  return (
    <>
      <div className="flex">
        <h1 className="flex-auto text-lg text-balance">
          Hi! I am Abinash Neupane.
        </h1>
        <img
          src={mainPic}
          alt="Profile Picture"
          className="flex-auto items-end"
        />
      </div>
    </>
  );
};

export default Home;
