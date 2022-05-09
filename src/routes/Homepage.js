import React from "react";
import CryptoTop from "../components/CryptoTop/CryptoTop";
import Stats from "../components/Stats/Stats";

const Homepage = () => {
  return (
    <div className="home-container">
      <Stats />
      <CryptoTop />
    </div>
  );
};

export default Homepage;
