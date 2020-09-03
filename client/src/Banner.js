import React from "react";
import bannerImg from "./clothingBanner.jpg";

const Banner = (props) => {
  return (
    <div>
      <div className="bannerWrap">
        <img className='banner' src={bannerImg}></img>
      </div>
      
    </div>
  );
};

export default Banner;
