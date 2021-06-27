import React from "react";
import Heart from "../assets/heart.png";
import Instagram from "../assets/instagram.png";
import Gmail from "../assets/gmail.png";
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
      <div className="footer__center">
      <img className="logo" src={Instagram} alt="Instagram-Logo" />
      <img className="logo" src={Gmail} alt="Gmail-Logo" />
      </div>
      <hr />
      <div className="footer__down">
      2021 &copy; Sanjeevni
      </div>
    </div>
  );
};

export default Footer;
