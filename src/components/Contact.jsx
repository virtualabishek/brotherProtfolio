import React from "react";
import customerService from "/cutomerService.png";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container mx-auto p-4">
        <h1 className="text-4xl text-center pt-28 mb-12">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="basis-1/4 mb-8 md:mb-0">
            <img
              className="opacity-70 w-full h-auto rounded-lg shadow-lg"
              src={customerService}
              alt="Customer Service"
            />
          </div>
          <div className="basis-1/2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We are here to help you. Please reach out to us for any inquiries
              or support.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
