import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="h-screen w-full bg-hero-pattern bg-cover bg-center flex items-center justify-start"
      >
        <div className="text-white max-w-lg md:ml-10 m-2 p-2">
          <div className="text-5xl font-bold md:mb-5 ">
            Authenticity at Work
          </div>

          <div className="text-lg leading-relaxed mt-10">
            I help people and teams grow by building trust and good
            relationships. As an experienced bank manager, I listen to
            customers, understand their needs, and give the best financial
            solutions. My goal is to provide great service and make customers
            happy.
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
