import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service";
// import Experience from "../components/Experience";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Services />
        {/* <Experience /> */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
