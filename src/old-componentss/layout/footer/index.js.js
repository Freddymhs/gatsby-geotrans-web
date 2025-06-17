import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import f from "@images/iconos/inbot/fotFace.svg";
import l from "@images/iconos/inbot/fotLink.svg";
import w from "@images/iconos/inbot/fotWhats.svg";
import foto from "@images/maquinageotrans.jpg";

import { ParallaxFooter } from "../../ComponentesGlobales/FullParallax";
import { SeparadorGrande } from "@/componentsv2/shared/Separador";

const Footer = () => {
  const { t } = useTranslation();

  const footerStyles = {
    backgroundColor: "#f8f8ff",
  };

  const borderPersonalStyles = {
    borderRadius: "5px",
    backgroundColor: "#e6e6e6",
  };

  const theadStyles = {
    textAlign: "left",
    fontSize: "2.4rem",
    letterSpacing: "0.21em",
    color: "#ff6e40",
    fontFamily: "Montserrat",
  };

  const tbodyStyles = {
    textAlign: "justify",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#29434e",
    fontFamily: "Montserrat",
  };

  const linkStyles = {
    textDecoration: "none",
    textAlign: "justify",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#29434e",
    fontFamily: "Montserrat",
  };

  const contactLinks = [
    {
      href: t("datosgeotrans.telefonoContact"),
      text: t("datosgeotrans.telefono"),
    },
    {
      href: t("datosgeotrans.emailContact"),
      text: t("datosgeotrans.email"),
      target: "_blank",
    },
  ];

  const socialLinks = [
    {
      href: t("datosgeotrans.linkedinContact"),
      icon: l,
      alt: "linkedin geotrans",
    },
    {
      href: t("datosgeotrans.facebookContact"),
      icon: f,
      alt: "facebook geotrans",
    },
    {
      href: t("datosgeotrans.whatsapContact"),
      icon: w,
      alt: "whatsapp geotrans",
    },
  ];

  const serviceLinks = Array.from({ length: 17 }, (_, i) => ({
    key: `serviciosGeotrans.${i + 1}.nombre`,
    to: "/services/",
  }));

  const machineLinks = [
    { key: "aljibes.patente1.nombre", to: "/#MaquinariasGeotrans" },
    { key: "plumas.patente1.nombre", to: "/#MaquinariasGeotrans" },
    { key: "bateas.patente1.nombre", to: "#MaquinariasGeotrans" },
    { key: "tolvas.patente1.nombre", to: "#MaquinariasGeotrans" },
    { key: "porters.patente1.nombre", to: "#MaquinariasGeotrans" },
    { key: "retroexcavadoras.patente1.nombre", to: "#MaquinariasGeotrans" },
  ];

  const navLinks = [
    { key: "header.Home", to: "/" },
    { key: "header.About Us", to: "/us/" },
    { key: "header.Services", to: "/services/" },
    { key: "header.Contact us", to: "/contacto/" },
    { key: "header.Work with us", to: "/contacto/" },
    { key: "header.News", to: "/news/" },
  ];

  const FooterSection = ({
    title,
    children,
    className = "",
    customStyle = {},
  }) => (
    <Col
      className={`d-flex justify-content-center col-12 py-5 ${className}`}
      style={customStyle}
    >
      <table>
        <thead>
          <tr>
            <th style={theadStyles}>{title}</th>
          </tr>
        </thead>
        <tbody style={tbodyStyles}>{children}</tbody>
      </table>
    </Col>
  );

  return (
    <div style={footerStyles}>
      <SeparadorGrande />
      <ParallaxFooter foto={foto} />

      <Container fluid>
        <Row className="d-flex justify-content-center">
          <FooterSection
            title={t("footer.contact")}
            className="col-sm-6 col-md-4"
          >
            {contactLinks.map((link, index) => (
              <tr key={index}>
                <td>
                  <a href={link.href} target={link.target} style={linkStyles}>
                    {link.text}
                  </a>
                </td>
              </tr>
            ))}
          </FooterSection>

          <FooterSection
            title={t("footer.location")}
            className="col-sm-6 col-md-4"
          >
            <tr>
              <td>{t("datosgeotrans.ubicacion")}</td>
            </tr>
          </FooterSection>
          {/* 
          <FooterSection title={t("footer.cotizar")} className="col-md-4">
            <tr>
              <td>
                <Link to="/contacto/" style={linkStyles}>
                  {t("header.Contact us")}
                </Link>
              </td>
            </tr>
          </FooterSection> */}

          <FooterSection
            title={t("footer.redes")}
            className="bordepersonal"
            customStyle={borderPersonalStyles}
          >
            <tr>
              <td className="d-flex align-items-center justify-content-around">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon} alt={social.alt} />
                  </a>
                ))}
              </td>
            </tr>
          </FooterSection>

          <FooterSection title={t("footer.services")} className="col-md-6">
            {serviceLinks.map((service, index) => (
              <tr key={index}>
                <td>
                  <Link to={service.to} style={linkStyles}>
                    {t(service.key)}
                  </Link>
                </td>
              </tr>
            ))}
          </FooterSection>

          <Col className="col-12 col-md-6 2en1 sin rows py-5">
            <FooterSection title={t("footer.machines")} className="px-0 mx-0">
              {machineLinks.map((machine, index) => (
                <tr key={index}>
                  <td>
                    <Link to={machine.to} style={linkStyles}>
                      {t(machine.key)}
                    </Link>
                  </td>
                </tr>
              ))}
            </FooterSection>

            <FooterSection title={t("footer.nav")} className="px-0 mx-0">
              {navLinks.map((nav, index) => (
                <tr key={index}>
                  <td>
                    <Link to={nav.to} style={linkStyles}>
                      {t(nav.key)}
                    </Link>
                  </td>
                </tr>
              ))}
            </FooterSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
