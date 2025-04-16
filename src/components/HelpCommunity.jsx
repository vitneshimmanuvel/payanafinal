import React from "react";
import "./HelpCommunity.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const HelpCommunity = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <h1 className="left-heading">need help?</h1>
        <form className="help-form">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />

          <label>Phone:</label>
          <input type="number" placeholder="Enter your phone" />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>DOB:</label>
          <input type="date" />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="right-panel">
        <h2 className="right-heading">Join Our Community</h2>
        <p className="subtext">
          Connect with students, alumni, and experts via WhatsApp.
        </p>

        <button className="whatsapp-button">
          <FaWhatsapp size={20} />
          <span>Join WhatsApp App</span>
        </button>
          
      </div>
    </div>
  );
};

export default HelpCommunity;
