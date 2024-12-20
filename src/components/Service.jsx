import React from "react";

const Service = () => {
  return (
    <>
      <div className="relative bg-service-pattern bg-cover bg-center h-96 w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold">Services</h1>
      </div>
      <div className="bg-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="b order-2 border-black bg-slate-400 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">NEPSE Share Services</h2>
            <ul className="list-disc pl-5">
              <li>
                I guide you to understand the NEPSE share market and make smart
                and confident investment decisions.
              </li>
              <li>
                I help you analyze market trends, identify profitable
                opportunities, and reduce risks.
              </li>
              <li>
                I create a customized share portfolio for you, focusing on your
                financial goals and risk tolerance.
              </li>
            </ul>
          </div>
          <div className="border-2 border-black bg-slate-400 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Insurance Services</h2>
            <ul className="list-disc pl-5">
              <li>
                I assist you in choosing the right insurance policies to protect
                your future and your family.
              </li>
              <li>
                I provide detailed explanations of policies, claims processes,
                and help you find affordable options.
              </li>
              <li>
                My goal is to ensure your long-term security and peace of mind
                through proper insurance planning.
              </li>
            </ul>
          </div>
          <div className="border-2 border-black bg-slate-400 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              Leadership Coaching Services
            </h2>
            <ul className="list-disc pl-5">
              <li>
                I help leaders enhance their leadership skills by focusing on
                authenticity and building strong connections.
              </li>
              <li>
                I provide practical tools to improve decision-making, effective
                communication, and problem-solving.
              </li>
              <li>
                My coaching aims to help leaders build motivated teams and
                inspire growth within their organizations.
              </li>
            </ul>
          </div>
          <div className="border-2 border-black bg-slate-400 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              Financial Planning Services
            </h2>
            <ul className="list-disc pl-5">
              <li>
                I help you plan and manage your money effectively to achieve
                long-term financial stability.
              </li>
              <li>
                I provide guidance on saving, budgeting, investment, and
                retirement planning tailored to your needs.
              </li>
              <li>
                My focus is on improving your overall financial health, managing
                debts, and building wealth for a secure future.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
