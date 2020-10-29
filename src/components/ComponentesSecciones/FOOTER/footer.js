import React from "react"
import { Container, Row, Col, Navbar, Card } from "react-bootstrap"
import logofootergeotrans from "../../../images/logo/logofootergeotrans.svg"
import youtubePersonalizado from "../../../images/redessociales/youtubePersonalizado.svg"
import linkedingPersonalizado from "../../../images/redessociales/linkedingPersonalizado.svg"
import gpsPersonalizado from "../../../images/iconos/gpsPersonalizado.svg"

import c1 from "../../../images/iconos/emailPersonalizado.svg"
import c2 from "../../../images/iconos/likePersonalizado.svg"
import c3 from "../../../images/iconos/telefonoPersonalizado.svg"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

import Contenidofooter from "./componentesFooter/contenidofooter"
import Piefooter from "./componentesFooter/piefooter"

const iconosSociales = [
  gpsPersonalizado,
  linkedingPersonalizado,
  youtubePersonalizado,
]
const iconosContactoPersonalizado = [c1, c2, c3]
const Footer = () => {
  return (
    <Container
      fluid
      sticky="bottom"
      className="d-flex flex-column justify-content-end"
      style={{
        backgroundColor: "#001C26",
        width: "100%",
        minHeight: "88vh",
        border: "3px solid black",
        // x
      }}
    >
      <Contenidofooter
        useTranslation={useTranslation}
        Link={Link}
        estilos={estilos}
        logofootergeotrans={logofootergeotrans}
        iconosContactoPersonalizado={iconosContactoPersonalizado}
        iconosSociales={iconosSociales}
      />

      <Piefooter useTranslation={useTranslation} />
    </Container>
  )
}

export default Footer

const estilos = {
  footerTitleSociales: {
    color: "white",
    fontSize: "4.8rem",
    fontFamily: "Blader",
  },
  IconSociales: {
    linkscontacto: { color: "white", fontSize: "2rem", fontFamily: "LatoBold" },
    ubicacion: { color: "white", fontSize: "2rem", fontFamily: "LatoBold" },
  },
  IconosContactos: {
    s1: { height: "2rem" },
    s2: { height: "3rem" },
    s3: { height: "4rem" },
  },
}
