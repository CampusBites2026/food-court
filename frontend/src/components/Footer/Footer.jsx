import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=bitescampus27@gmail.com&su=Campus%20Bites%20Support",
      "_blank"
    );
  };

  return (
    <div className="footer" id="footer">

      <div className="footer-top">

        <img
          src={assets.logo}
          alt="Campus Bites"
          className="footer-logo"
        />

        <h2>Campus Bites</h2>

        <p>
          Fresh food, quick delivery and a better
          campus dining experience.
        </p>

      </div>

      <div className="footer-contact">

        <div
          className="contact-card"
          onClick={openGmail}
          style={{ cursor: "pointer" }}
        >
          📧 bitescampus27@gmail.com
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Campus Bites
      </div>

    </div>
  );
};

export default Footer;
