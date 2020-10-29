import React, { useContext, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Modal, Card } from "react-bootstrap"
import styled from "styled-components"
import FormularioPersonalizado from "../components/ComponentesSecciones/PageContactus/FormularioPersonalizado"
import videox from "../videos/escribiendo.mp4"
import { Mih1, Mih2alt } from "../components/ComponentesGlobales/MisTextos"
import { useTranslation } from "react-i18next"
import { SliderCarousel } from "../components/ComponentesGlobales/Banner"
import Los3puntos from "../components/ComponentesGlobales/Los3puntos"
import {
  MiWraperVideo,
  KzVideo,
  AreaContenido,
  Overlaypersonalizado,
  OverlaySecundario,
} from "../components/ComponentesGlobales/PageVideoBG"

import { Separador } from "../components/ComponentesGlobales/Separador"
import Titulo from "../components/ComponentesSecciones/PageContactus/Titulo"

import { CartContext } from "../context/CartContext"
import { Link } from "gatsby"

const Contactus = props => {
  //lamandolo desde el context
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT
  const [cart, setcart] = useContext(CartContext)
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT

  return (
    <>
      {/* show={show} onHide={handleClose} */}
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>
            Aun no ah seleccionado ningun elemento para Cotizar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Desea Agregar Algun elemento especifico para enviarlo en su cotizacion
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Link className="col-6">
              {/* <Button variant="secondary" onClick={handleClose}>
                No gracias , Deseo crear una cotizacion simplificada.
              </Button> */}
            </Link>
            <Link href="/services/" className="col-6">
              {/* <Button variant="primary" onClick={handleClose}>
                Si , Quiero especifcar detalles para mi cotizacion.
              </Button> */}
            </Link>
          </Row>
        </Modal.Footer>
      </Modal>

      <Layout>
        <SEO title="Contactenos" />
        <Separador />
        <Titulo />

        <MiWraperVideo>
          <KzVideo src={videox}></KzVideo>
          <Overlaypersonalizado />
          <OverlaySecundario />
          <AreaContenido className=" ">
            <Container fluid className=" ">
              <Row className=" ">
                <Col className=" col-12 col-md-5 mx-auto   ">
                  <br />
                  <br />
                  <br />
                  {/* aqui esta el alert para validar si el carro esta vacio */}
                  <FormularioPersonalizado cart={cart} />
                </Col>
                <Col className="   col-12 col-md-5  mx-auto  ">
                  <div
                    className="d-none d-md-block"
                    id="comportamientodiferente"
                  >
                    <br />
                    <br />
                    <br />
                    <Card className="bg-transparent">
                      <Los3puntos />
                    </Card>
                  </div>
                  <SliderCarousel />
                </Col>
              </Row>
            </Container>
          </AreaContenido>
        </MiWraperVideo>
      </Layout>
    </>
  )
}

export default Contactus
