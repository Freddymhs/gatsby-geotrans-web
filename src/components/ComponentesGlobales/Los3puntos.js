import React from "react"
import { useTranslation } from "react-i18next"
import { Col, Row, Container } from "react-bootstrap"

import Nclientes from "../../images/iconos/Nclientes.svg"
import Nproyectos from "../../images/iconos/Nproyectos.svg"
import Nmaquinarias from "../../images/iconos/Nmaquinarias.svg"
import { Medallones } from "../ComponentesGlobales/MisTextos"
const Los3puntos = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container className="">
        <Row className="">
          <Col
            className="col-12 
            col-md-4
            
          "
          >
            <Row className="">
              <Col className=" text-center                col-12">
                <Row>
                  <Col className="col-12   "></Col>
                  <Col className="col-12    ">
                    <Medallones>+ 19</Medallones>
                    <Medallones>{t("Contacto.plus1")}</Medallones>
                  </Col>
                </Row>
              </Col>

              <Col className="  text-center    col-12  ">
                <img
                  class="img-fluid"
                  alt="Clientes Geotrans Arica"
                  src={Nclientes}
                />
              </Col>
            </Row>
          </Col>

          <Col
            className="
            
            col-12 
            col-md-4
          "
          >
            <Row className="">
              <Col
                className=" text-center
              col-12
             
             
              "
              >
                <Row>
                  <Col
                    className="col-12   "
                    // style={{
                    //   color: "#FFA06D",
                    //   fontSize: "4.4rem",
                    //   fontFamily: "Lato",
                    //   fontWeight: "700",
                    //   lineHeight: "4rem",
                    // }}
                  ></Col>
                  <Col className="col-12  ">
                    <Medallones> + 8</Medallones>
                    <Medallones> {t("Contacto.plus3")}</Medallones>
                  </Col>
                </Row>
              </Col>
              <Col
                className="  text-center
              col-12             
            
              "
              >
                <img
                  class="img-fluid"
                  alt="Maquinarias Geotrans Arica"
                  src={Nmaquinarias}
                />
              </Col>
            </Row>
          </Col>

          <Col
            className=" 
            
            col-12 
            col-md-4         "
          >
            <Row className="">
              <Col
                className=" text-center
              col-12
              
               
              "
              >
                <Row>
                  <Col className="col-12  ">
                    <Medallones>+ 45</Medallones>
                    <Medallones>{t("Contacto.plus2")}</Medallones>
                  </Col>
                </Row>
              </Col>
              <Col
                className="  text-center
              col-12             
             
              "
              >
                <img
                  class="img-fluid"
                  alt="Proyectos y Obras Geotrans Arica"
                  src={Nproyectos}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Los3puntos
