import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import SwitchLang from "./switchLang";
// import {

// } from "@componentsv2/layout/herlpers/Texts";

import menuicon from "@images/iconos/menu.svg";
import {
  Titulowebv1,
  Subtitulowebv1,
  TextMenu,
} from "../../../componentsv2/shared/Texts";

const MainNavigation = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(
            relativeDirectory: { glob: "logo" }
            name: { eq: "geotransLogo" }
          ) {
            childImageSharp {
              fixed(
                width: 68
                height: 68
                fit: CONTAIN
                background: "#f8f8ff"
              ) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <Navbar
          expand="lg"
          sticky="top"
          className="py-0  my-0 md-py-3 px-4 shadow-sm"
          style={{
            backgroundColor: "var(--white-background)",
          }}
        >
          <BrandLogo image={data.file.childImageSharp.fixed} />
          <MobileMenuToggle />
          <NavigationLinks />
        </Navbar>
      )}
    />
  );
};

const BrandLogo = ({ image }) => {
  const { t } = useTranslation();

  return (
    <Link to="/" className="text-decoration-none">
      <Navbar.Brand className="d-flex align-items-center me-auto">
        <div>
          <Img
            fixed={image}
            alt="Logo Geotrans"
            className={"me-3"}
            style={{
              maxHeight: 68,
              maxWidth: 68,
              margin: 0,
              padding: 0,
              userSelect: "none",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-start">
          <Titulowebv1>{t("header.title")}</Titulowebv1>
          <div className="d-none d-md-block">
            <Subtitulowebv1>{t("header.subtitle")}</Subtitulowebv1>
          </div>
        </div>
      </Navbar.Brand>
    </Link>
  );
};

const NavigationLinks = () => {
  const { t } = useTranslation();

  return (
    <Navbar.Collapse id="main-nav">
      <Nav className="ms-auto text-center d-flex align-items-center">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/"
            className="px-3 py-2 text-decoration-none"
            style={{
              transition: "color 0.3s ease",
              color: "#007b5e",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6e40")}
            onMouseLeave={(e) => (e.target.style.color = "#007b5e")}
          >
            <TextMenu>{t("header.Home")}</TextMenu>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/nosotros"
            className="px-3 py-2 text-decoration-none"
            style={{
              transition: "color 0.3s ease",
              color: "#007b5e",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6e40")}
            onMouseLeave={(e) => (e.target.style.color = "#007b5e")}
          >
            <TextMenu>{t("header.About Us")}</TextMenu>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/contacto"
            className="px-3 py-2 text-decoration-none"
            style={{
              transition: "color 0.3s ease",
              color: "#007b5e",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6e40")}
            onMouseLeave={(e) => (e.target.style.color = "#007b5e")}
          >
            <TextMenu>{t("header.Contact")}</TextMenu>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="ms-3">
          <SwitchLang />
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  );
};

const MobileMenuToggle = () => (
  <Navbar.Toggle
    className="d-lg-none border-0 p-2"
    style={{
      backgroundColor: "var(--primary-color)",
      borderRadius: "4px",
      boxShadow: "none",
      outline: "none",
    }}
    aria-controls="main-nav"
  >
    <img
      src={menuicon}
      alt="Menu geotrans"
      style={{
        height: "24px",
        width: "24px",
        filter: "brightness(0) invert(1)",
      }}
    />
  </Navbar.Toggle>
);

export default MainNavigation;
