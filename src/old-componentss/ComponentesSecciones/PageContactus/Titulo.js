import React from "react";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"; //en todos los comps

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {
  TituloDePagina,
  TextoEncuadrado,
} from "../../../componentsv2/shared/Texts";

const TituloM = () => {
  const { t } = useTranslation(); // necesario

  return (
    <Styles>
      <Container fluid>
        <Row>
          {/* <Col className="  col-12 col-sm-6 col-md-6 text-justify "></Col> */}
          <Col
            className="
          col-12 col-md-6
          text-center text-md-justify "
          >
            <TextoEncuadrado>{t("Contacto.subtitle")}</TextoEncuadrado>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  height: 100%;
  width: 100%;
`;

export default TituloM;
