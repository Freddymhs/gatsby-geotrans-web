import React from "react"
import { Col, Button, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

import {
  BtnPrimario,
  BtnSecundario,
} from "../../ComponentesGlobales/Misbotones"

const Contactactofast = () => {
  const { t } = useTranslation() // necesario

  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col className="text-center  col-12 col-md-6">
            <Link to="/services/">
              <BtnPrimario>{t("Empresa.btnServices")}</BtnPrimario>
              {/* <BtnPrimario></BtnPrimario> */}
            </Link>
          </Col>
          <Col className="text-center  col-md-6">
            <Link to="/contactus/">
              <BtnSecundario>{t("Empresa.btnContact")}</BtnSecundario>
            </Link>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}

export default Contactactofast

const Styles = styled.div`
  width: 100%;
  height: 100%;
  }`
