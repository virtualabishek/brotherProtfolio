import React from "react";
import sajhaLogo from "/sajha.png";
import nicLogo from "/nic.png";
const Experience = () => {
  return (
    <>
      <div id="experience" className="container mx-auto p-4">
        <h1 className="text-4xl text-center pt-28 mb-12">Experience</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 mb-8 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">Sajha Yatayat</h1>
              <img
                src={sajhaLogo}
                alt="Sajha Yatayat Logo"
                className="w-32 h-32 mx-auto mb-4"
              />
              <p className="text-gray-700">
                I am a hardworking professional with experience in both
                transportation and banking. I started my career at Sajha
                Yatayat, where I learned about managing operations and ensuring
                smooth service. This role helped me understand teamwork,
                organization, and the importance of providing good service to
                people. It was a great experience that built my foundation for
                future challenges.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">NIC ASIA Bank</h1>
              <img
                src={nicLogo}
                alt="NIC ASIA Bank Logo"
                className="w-32 h-32 mx-auto mb-4"
              />
              <p className="text-gray-700">
                I am a hardworking professional with experience in both
                transportation and banking. I started my career at Sajha
                Yatayat, where I learned about managing operations and ensuring
                smooth service. This role helped me understand teamwork,
                organization, and the importance of providing good service to
                people. It was a great experience that built my foundation for
                future challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
