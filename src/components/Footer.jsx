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
    window.open(
      "https://www.google.com/maps/place/Payana+Overseas+Solutions/@11.3373413,77.7094131,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f1e295f1439:0x270c72cecda7d00b!8m2!3d11.3373361!4d77.711988!16s%2Fg%2F11rw8zmhkc?entry=ttu",
      "_blank"
    );
  };

  const sections = [
    {
      title: "Contact",
      email: "payanaoverseas@gmail.com",
      phone: "+91 90036 19777",
    },
    {
      title: "Study",
      email: "study@payana.com",
      phone: "+91 70108 38005",
    },
    {
      title: "Work",
      email: "work@payana.com",
      phone: "+91 70108 38005",
    },
    {
      title: "About Us",
      email: "",
      phone: "",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-left-group">
        {sections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h3>{section.title}</h3>
            {section.email && (
              <p>
                <FaEnvelope className="icon" /> {section.email}
              </p>
            )}
            {section.phone && (
              <p>
                <FaPhone className="icon" /> {section.phone}
              </p>
            )}
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
          src="Screenshot 2025-04-15 152311.png"
          alt="Map Location"
        />
      </div>
    </footer>
  );
};

export default Footer;
