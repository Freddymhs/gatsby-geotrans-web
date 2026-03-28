import React from "react";

const ContactItems = ({ href, icon, alt, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none d-flex align-items-center"
    style={{ gap: "5px" }}
  >
    <img
      src={icon}
      alt={alt}
      style={{
        height: 13,
        width: 13,
        filter: "brightness(0) invert(1)",
        opacity: 0.7,
      }}
    />
    <span style={labelStyle} className="d-none d-lg-inline">
      {label}
    </span>
  </a>
);

const labelStyle = {
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1.1rem",
  fontFamily: "Montserrat",
  fontWeight: 400,
  transition: "color 0.2s ease",
  whiteSpace: "nowrap",
};

export default ContactItems;
