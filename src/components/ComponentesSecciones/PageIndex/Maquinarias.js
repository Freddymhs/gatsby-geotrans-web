import React, { useState } from "react"
import retroexcavadora from "../../../images/retroexcavadora.jpg"
import tolvas from "../../../images/tolvas.jpg"
import pala from "../../../images/pala.jpg"
import batea from "../../../images/batea.jpg"
import Carousel from "react-multi-carousel" // MMMMMM
import "react-multi-carousel/lib/styles.css" // sirve pero no usado

import { Modal, Button, Row, Col, Container } from "react-bootstrap"
import hexiRetroexcavadora from "../../../images/hexiRetroexcavadora.jpg"
import videocards from "../../../videos/maquinariasvideo.mp4"

import t1 from "../../../videos/working/bateaworking.mp4"
import t2 from "../../../videos/working/plumaworking.mp4"
import t3 from "../../../videos/working/porterworking.mp4"
import t4 from "../../../videos/working/retroworking.mp4"
import t5 from "../../../videos/working/tolvaworking.mp4"
// import imgPluma from "../../../images/MaquinariasYTransportes/ServiciosPluma.jpg"
// import imgBatea from "../../../images/MaquinariasYTransportes/ServiciosBatea.jpg"
// import imgTolva from "../../../images/MaquinariasYTransportes/ServiciosTolva.jpg"
// import imgPorter from "../../../images/MaquinariasYTransportes/Servicios34.jpg"
// import imgAljibe from "../../../images/MaquinariasYTransportes/ServiciosAljibe.jpg"
// import imgRetro from "../../../images/MaquinariasYTransportes/ServiciosRetro.jpg"

import CardsWorking from "../../ComponentesSecciones/PageIndex/contenidoMaquinarias/CardsWorking"
import { clsMaquinarias } from "../../../clases/ClasesPageGlobal"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps
import { Separador, SeparadorGrande } from "../../ComponentesGlobales/Separador"

import {
  TextoEncuadrado,
  TituloDePagina,
  PresentacionPagina,
} from "../../ComponentesGlobales/MisTextos"

const Maquinarias = ({ imgOptimizedTrucks }) => {
  const imgBatea = imgOptimizedTrucks[0].childImageSharp.fluid
  const imgAljibe = imgOptimizedTrucks[1].childImageSharp.fluid
  const imgPorter = imgOptimizedTrucks[2].childImageSharp.fluid
  const imgPluma = imgOptimizedTrucks[3].childImageSharp.fluid
  const imgTolva = imgOptimizedTrucks[4].childImageSharp.fluid
  const imgRetro = imgOptimizedTrucks[5].childImageSharp.fluid

  const { t } = useTranslation() // necesario
  const aljibe = new clsMaquinarias(
    t("aljibes.patente1.nombre"),
    // imgAljibe,

    imgAljibe,

    [
      t("aljibes.patente1.descripciones.basico"),
      t("aljibes.patente1.descripciones.basico2"),
    ],
    [
      t("aljibes.patente1.areastrabajo.area1"),
      t("aljibes.patente1.areastrabajo.area2"),
    ],
    [
      t("aljibes.patente1.serviciosentregados.s1.nombre"),
      t("aljibes.patente1.serviciosentregados.s2.nombre"),
      t("aljibes.patente1.serviciosentregados.s3.nombre"),
      t("aljibes.patente1.serviciosentregados.s4.nombre"),
    ]
  )
  const pluma = new clsMaquinarias(
    t("plumas.patente1.nombre"),
    imgPluma,
    [
      t("plumas.patente1.descripciones.basico"),
      t("plumas.patente1.descripciones.basico2"),
    ],
    [
      t("plumas.patente1.areastrabajo.area1"),
      t("plumas.patente1.areastrabajo.area2"),
    ],
    [
      t("plumas.patente1.serviciosentregados.s1.nombre"),
      t("plumas.patente1.serviciosentregados.s2.nombre"),
      t("plumas.patente1.serviciosentregados.s3.nombre"),
      t("plumas.patente1.serviciosentregados.s4.nombre"),
      t("plumas.patente1.serviciosentregados.s5.nombre"),
    ]
  )
  const batea = new clsMaquinarias(
    t("bateas.patente1.nombre"),
    imgBatea,
    [
      t("bateas.patente1.descripciones.basico"),
      t("bateas.patente1.descripciones.basico2"),
    ],
    [
      t("bateas.patente1.areastrabajo.area1"),
      t("bateas.patente1.areastrabajo.area2"),
      t("bateas.patente1.areastrabajo.area3"),
    ],
    [
      t("bateas.patente1.serviciosentregados.s1.nombre"),
      t("bateas.patente1.serviciosentregados.s2.nombre"),
      t("bateas.patente1.serviciosentregados.s3.nombre"),
    ]
  )

  const tolva = new clsMaquinarias(
    t("tolvas.patente1.nombre"),
    imgTolva,
    [
      t("tolvas.patente1.descripciones.basico"),
      t("tolvas.patente1.descripciones.basico2"),
    ],
    [
      t("tolvas.patente1.areastrabajo.area1"),
      t("tolvas.patente1.areastrabajo.area2"),
    ],
    [
      t("tolvas.patente1.serviciosentregados.s1.nombre"),
      t("tolvas.patente1.serviciosentregados.s2.nombre"),
      t("tolvas.patente1.serviciosentregados.s3.nombre"),
    ]
  )
  const porter = new clsMaquinarias(
    t("porters.patente1.nombre"),
    imgPorter,
    [
      t("porters.patente1.descripciones.basico"),
      t("porters.patente1.descripciones.basico2"),
    ],
    [
      t("porters.patente1.areastrabajo.area1"),
      t("porters.patente1.areastrabajo.area2"),
    ],
    [t("porters.patente1.serviciosentregados.s1.nombre")]
  )
  const retroexcavadora = new clsMaquinarias(
    t("retroexcavadoras.patente1.nombre"),
    imgRetro,
    [
      t("retroexcavadoras.patente1.descripciones.basico"),
      t("retroexcavadoras.patente1.descripciones.basico2"),
    ],
    [t("retroexcavadoras.patente1.areastrabajo.area1")],
    [
      t("retroexcavadoras.patente1.serviciosentregados.s1.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s2.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s3.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s4.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s5.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s6.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s7.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s8.nombre"),
    ]
  )

  const ListaMaquinarias = []
  var ListaPluma = []
  var ListaBatea = []
  var ListaTolvas = []
  var ListaPorter = []
  var ListaRetros = []
  var ListaAljibe = []

  ListaPluma.push(pluma)
  ListaBatea.push(batea)
  ListaTolvas.push(tolva)
  ListaPorter.push(porter)
  ListaRetros.push(retroexcavadora)
  ListaAljibe.push(aljibe)

  //para mandar o mostrar en componente tarjeta
  ListaMaquinarias.geoPluma = ListaPluma
  ListaMaquinarias.geoBatea = ListaBatea
  ListaMaquinarias.geoTolvas = ListaTolvas
  ListaMaquinarias.geoPorter = ListaPorter
  ListaMaquinarias.geoRetros = ListaRetros
  ListaMaquinarias.geoAljibe = ListaAljibe

  return (
    <>
      <div className="container-fluid   h-100 w-100">
        <Separador />
        <Container fluid>
          <Maquinariastop />
        </Container>
        <SeparadorGrande />
        <Container fluid>
          <CardsWorking ListaMaquinarias={ListaMaquinarias} />
        </Container>
      </div>
    </>
  )
}

const Maquinariastop = () => {
  const { t } = useTranslation() // necesario

  return (
    <>
      <Row className=" pb-5">
        <Col className=" col-12 col-md-3       ">
          <TextoEncuadrado>{t("Maquinarias.lemaA")}</TextoEncuadrado>
        </Col>

        <Col
          className=" 
                    offset-md-1
                     my-auto text-center 
          "
        >
          <TituloDePagina>{t("Maquinarias.tituloA")}</TituloDePagina>
        </Col>
      </Row>
      <Row>
        <Col
          className=" 
          col-12
          col-md-8 offset-md-4
         "
        >
          <PresentacionPagina> {t("Maquinarias.lemaB")}</PresentacionPagina>
        </Col>
      </Row>
    </>
  )
}

export default Maquinarias

const Mimodal = () => {
  // modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered
      animation={true}
      autoFocus={true}
      keyboard={"esc"}
    >
      <Modal.Header closeButton>
        <Modal.Title>Rodillo Neumático Hamm GRW15, Año 2006</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Caracteristicas del vehiculos
        <ul>
          <li>tipo de vehiculo</li>
          <li>marca</li>

          <li>modelo</li>

          <li>anio</li>

          <li>estado</li>
        </ul>
        <ul>
          <li>Serv1</li>
          <li>serv2</li>
          <li>serv3</li>
          <li>serv4</li>
          <li>srv5</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Agregar a mi consulta
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
