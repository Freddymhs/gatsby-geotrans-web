import React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import {
  TituloDePagina,
  SubtituloSimple,
} from "../../ComponentesGlobales/MisTextos"

const Titulo = () => {
  const { t } = useTranslation() // necesario

  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col className="  col-12 col-sm-6 col-md-6 col-lg-8    text-justify ">
            <TituloDePagina>{t("Empresa.titulo")}</TituloDePagina>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}

const Styles = styled.div`
  height: 100%;
  width: 100%;
`

export default Titulo
