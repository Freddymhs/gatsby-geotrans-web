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
    backgroundColor: "var(--ghost-white)",
  };

  const borderPersonalStyles = {
    borderRadius: "8px",
    backgroundColor: "var(--light-gray)",
  };

  const theadStyles = {
    textAlign: "left",
    fontSize: "2.4rem",
    letterSpacing: "0.21em",
    color: "var(--primary-text)",
    fontFamily: "Montserrat",
    paddingBottom: "1rem",
  };

  const tbodyStyles = {
    textAlign: "justify",
    fontSize: "1.6rem",
    lineHeight: "2.8rem",
    color: "var(--text-dark)",
    fontFamily: "Montserrat",
  };

  const linkStyles = {
    textDecoration: "none",
    textAlign: "justify",
    fontSize: "1.6rem",
    lineHeight: "2.8rem",
    color: "var(--text-dark)",
    fontFamily: "Montserrat",
    transition: "color 0.2s ease",
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
    to: "/#MaquinariasGeotrans",
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
    { key: "header.About Us", to: "/nosotros/" },
    { key: "header.Services", to: "/#MaquinariasGeotrans" },
    { key: "header.Contact us", to: "/contacto/" },
    { key: "header.Work with us", to: "/contacto/" },
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

          <Col className="col-12 col-md-6 py-5">
            <table className="w-100">
              <caption style={{ ...theadStyles, captionSide: "top" }}>{t("footer.services")}</caption>
              <tbody style={tbodyStyles}>
                {serviceLinks
                  .reduce((rows, service, i) => {
                    if (i % 2 === 0) rows.push([service]);
                    else rows[rows.length - 1].push(service);
                    return rows;
                  }, [])
                  .map((pair, i) => (
                    <tr key={i}>
                      {pair.map((service, j) => (
                        <td key={j} style={{ width: "50%", paddingRight: "1rem" }}>
                          <Link to={service.to} style={linkStyles}>
                            {t(service.key)}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </Col>

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
