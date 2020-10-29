import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

// import horario from "../../../images/iconos/intop/036-24-hours.svg"
import horario from "../../../images/iconos/intop/029-clock.svg"
import telefono from "../../../images/iconos/intop/001-telephone.svg"
import email from "../../../images/iconos/intop/004-email.svg"
import masredes from "../../../images/iconos/intop/040-network.svg"
import styled from "styled-components"
import {
  ParrafoMiniListado,
  SmallTextoTOp,
} from "../../ComponentesGlobales/MisTextos"
// import { CustomerChat } from "../../ComponentesGlobales/CustomerChat"

const Headertop = () => {
  const { t } = useTranslation() // necesario

  return (
    <>
     
      <Styled>
        <Container fluid className="  ">
          <Row>
            <Col className="col-6  d-flex align-items-center">
              <img
                style={{ height: "30px", width: "30px" }}
                alt="horario geotrans"
                src={horario}
                className="d-inline-block align-top"
              />
              <span className="ml-1 ">
                <SmallTextoTOp>
                  <p>{t("headertop.dias")}</p>
                </SmallTextoTOp>
                <SmallTextoTOp>
                  <p style={{ whiteSpace: "nowrap" }}>{t("headertop.horas")}</p>
                </SmallTextoTOp>
              </span>
            </Col>

            <Col className="col-6  d-flex align-items-center ">
              <Col>
                <a className="ml-auto" href={t("datosgeotrans.emailContact")}>
                  <Col className=" d-flex align-items-end justify-content-center">
                    <img
                      alt="correo geotrans"
                      src={email}
                      className="d-inline-block align-top"
                    />

                    <span className="ml-2 d-none  d-lg-block">
                      <SmallTextoTOp>{t("datosgeotrans.email")}</SmallTextoTOp>
                    </span>
                  </Col>
                </a>
              </Col>
              <Col>
                <a href={t("datosgeotrans.telefonoContact")}>
                  <Col className=" d-flex align-items-end justify-content-center">
                    <img
                      alt="telefono geotrans"
                      src={telefono}
                      className="d-inline-block align-top"
                    />
                    <span className="ml-2 d-none  d-lg-block">
                      <SmallTextoTOp>
                        {t("datosgeotrans.telefono")}
                      </SmallTextoTOp>
                    </span>
                  </Col>
                </a>
              </Col>
              <Col>
                <a href={t("datosgeotrans.facebookContact")} target="_blank">
                  <Col className=" d-flex align-items-end justify-content-center">
                    <img
                      alt="red social geotrans"
                      src={masredes}
                      className="d-inline-block align-top"
                    />

                    <span className="ml-2 d-none d-lg-block ">
                      <SmallTextoTOp>{t("datosgeotrans.social")}</SmallTextoTOp>
                    </span>
                  </Col>
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
      </Styled>
    </>
  )
}

export default Headertop

const Styled = styled.div`
  span {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }
  img {
    height: 30px;
    width: 30px;
  }
  * {
    color: #001b27;
    text-decoration: none !important;
  }
  .container-fluid {
    background-color: #f8f8ff;
  }
`
