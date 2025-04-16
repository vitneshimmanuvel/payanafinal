import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const openMap = () => {
    window.open("https://maps.app.goo.gl/szEzTTpaWrLQduQC8", "_blank");
  };

  const sections = [
    {
      title: "Contact",
      email: "payanaoverseas@gmail.com",
      phone: "+91 9003619777",
    },
    {
      title: "Study",
      email: "study@payana.com",
      phone: "+91 9876543210",
    },
    {
      title: "Work",
      email: "work@payana.com",
      phone: "+91 9123456780",
    },
    {
      title: "About Us",
      email: "info@payana.com",
      phone: "+91 9090909090",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-left-group">
        {sections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h3>{section.title}</h3>
            <p>
              <FaEnvelope className="icon" /> {section.email}
            </p>
            <p>
              <FaPhone className="icon" /> {section.phone}
            </p>
          </div>
        ))}

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className="footer-right" onClick={openMap}>
        <img
          className="map-image"
          src="/Screenshot 2025-04-15 152311.png"
          alt="Map Location"
        />
      </div>
    </footer>
  );
};

export default Footer;
