import React from "react";
import { SmallTextoTOp } from "../../../componentsv2/shared/Texts";

const ContactItems = ({ href, icon, alt, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none text-dark d-flex align-items-center mx-2"
  >
    <div className="d-flex align-items-center">
      <img
        src={icon}
        alt={alt}
        style={{
          height: 18,
          width: 18,
          alignSelf: "center", // Aseguramos alineación vertical
        }}
        className="me-2"
      />
      <SmallTextoTOp className="d-none d-lg-block mb-0">{label}</SmallTextoTOp>
    </div>
  </a>
);
export default ContactItems;
