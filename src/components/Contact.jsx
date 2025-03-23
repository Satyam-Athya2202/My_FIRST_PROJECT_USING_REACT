import React from "react";
import Header from "./Header";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contactUsPage">
   
      <p>These are my socials you can contact me here</p>

      <div className="mySocials">
        
        <a className="insta" href="#"><FaInstagram /></a>
        <a className="twitter" href="#"><FaTwitter /></a>
        <a className="linkedin" href="#"><FaWhatsapp /></a>
        <a className="linkedin" href="#"><FaLinkedin /></a>

      </div>
    </div>
  );
};

export default Contact;
