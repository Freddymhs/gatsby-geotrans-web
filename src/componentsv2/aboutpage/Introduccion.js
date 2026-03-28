import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import logonuestraempresa from "@images/dibujossvg/logonuestraempresa.svg";
import Aricageotrans from "@images/dibujossvg/Aricageotrans.svg";
import seccionpunteado from "@images/dibujossvg/punteado.svg";
import punteadoalt from "@images/dibujossvg/punteadoalt.svg";

import {
  ParrafoColor,
  ParraColorfobold,
  PalabraDestacadaColor,
} from "../shared/Texts";

const Introduccion = () => {
  const { t } = useTranslation();

  return (
    <Styles>
      <Container fluid className="intro-container">
        <Row>
          <Col className="order-1 col-9 col-sm-4 col-md-3 offset-lg-1 col-lg-3 pt-lg-5 pl-lg-5 mt-lg-5">
            <img
              src={logonuestraempresa}
              className="h-100 w-100 mt-lg-5 img-responsive"
              alt="Logo empresa"
            />
          </Col>

          <Col className="order-2 col-12 col-sm-8 col-md-9 col-lg-8">
            <Row>
              <div className="punteado col-12 px-5 pt-sm-5 pb-sm-5 intro-content">
                <ParrafoColor className="text-justify col-10 offset-1 col-md-6 offset-md-3 col-lg-6 text-lg-left">
                  {t("Empresa.text1")}
                </ParrafoColor>

                <ParraColorfobold className="text-justify pt-5 d-none pt-sm-0 col-10 offset-1 d-sm-block offset-md-2 col-lg-5 offset-lg-3 text-lg-center intro-highlight">
                  {t("Empresa.text2")}
                </ParraColorfobold>

                <ParrafoColor className="text-justify pregular d-none col-12 pb-5 pt-md-5 d-sm-block col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-lg-left intro-detail">
                  {t("Empresa.text2a")}
                </ParrafoColor>
              </div>
            </Row>
          </Col>

          <Col className="text-sm-center order-3 col-6 offset-6 col-sm-12 offset-sm-0 col-md-10 offset-md-1 col-lg-6 offset-lg-3 intro-bottom">
            <Row className="d-flex align-items-center">
              <Col className="d-none d-sm-block col-md-4 offset-md-2">
                <PalabraDestacadaColor>
                  {t("Empresa.text3")}
                </PalabraDestacadaColor>
              </Col>
              <Col className="col-md-3 punteadoalt">
                <img
                  src={Aricageotrans}
                  className="img-responsive"
                  alt="GeoTrans"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Introduccion;

const Styles = styled.div`
  width: 100%;
  height: 100%;

  .intro-container {
    padding-top: 3rem;

    @media (min-width: 992px) {
      padding-top: 0;
    }
  }

  .intro-content {
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media (min-width: 992px) {
      padding-top: 8rem;
      padding-bottom: 5rem;
    }
  }

  .intro-highlight {
    margin-top: 2rem;

    @media (min-width: 992px) {
      margin-top: 3rem;
    }
  }

  .intro-detail {
    margin-top: 2rem;
  }

  .intro-bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media (min-width: 992px) {
      padding-top: 4rem;
      padding-bottom: 0;
    }
  }

  img {
    height: 100%;
    width: 100%;
  }

  span {
    color: var(--primary-color);
    font-size: 1.7rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 1px;
  }

  .pregular {
    color: var(--primary-color);
    font-size: 2rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 1px;
  }

  .punteado {
    background: url(${seccionpunteado});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    object-fit: cover;
  }

  .punteadoalt {
    background: url(${punteadoalt});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    object-fit: cover;
  }
`;
