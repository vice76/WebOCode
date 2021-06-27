import React from "react";
import Heart from "../assets/heart.png";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__row">
        <p >
          Made With Love <img src={Heart} alt="heart" style={{width:"15%"}}/>
        </p>
        <p>Contact Us</p>
      </div>
      <hr />
      <div className="footer__center">
        
      </div>
    </div>
  );
};

export default Footer;
