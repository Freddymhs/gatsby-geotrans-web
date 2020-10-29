import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

import Titulo from "../components/ComponentesSecciones/PageUs/Titulo"
import Introduccion from "../components/ComponentesSecciones/PageUs/Introduccion"
import Areastrabajo from "../components/ComponentesSecciones/PageUs/Areastrabajo"

import NuestrasAreas from "../components/ComponentesSecciones/PageUs/Areastrabajo"
import Los3puntos from "../components/ComponentesGlobales/Los3puntos"
import Contactactofast from "../components/ComponentesSecciones/PageUs/Contactactofast"

import { Separador } from "../components/ComponentesGlobales/Separador"
// import { CustomerChat } from "../components/ComponentesGlobales/CustomerChat"

const Us = () => {
  return (
    <Layout>
      <Separador />
      <SEO title="Nuestra Empresa" />
      {/* <CustomerChat /> */}
      <Titulo />
      <Introduccion />
      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>
      <NuestrasAreas />
      <div style={{ width: "100%", height: "21vh" }} className="d-block">
        &nbsp;
      </div>
      <Los3puntos />
      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>
      <Contactactofast />
      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>
    </Layout>
  )
}

export default Us
