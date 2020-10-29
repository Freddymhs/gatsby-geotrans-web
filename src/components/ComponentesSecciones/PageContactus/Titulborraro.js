import React from "react"
import { Col, Card, Row } from "react-bootstrap"
import {
  TituloDePagina,
  SubtituloSimple,
  TextoEncuadrado,
} from "../../ComponentesGlobales/MisTextos"
import { useTranslation } from "react-i18next"

const Titulo = () => {
  const { t } = useTranslation()
  return (
    <>
      <Card>
        <Row>
          <Col className="border">
            <TituloDePagina>{t("Contacto.titulo")}</TituloDePagina>
          </Col>
          <Col>
            <TextoEncuadrado>{t("Contacto.subtitle")}</TextoEncuadrado>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Titulo
