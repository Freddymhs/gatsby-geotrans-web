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
      {[...Array(4)].map((_, i) => (
        <div key={`space-top-${i}`} className="w-100 d-block d-lg-none">
          &nbsp;
        </div>
      ))}

      <Container fluid>
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
              {[...Array(3)].map((_, i) => (
                <div key={`esp-mob-${i}`} className="w-100 d-block d-lg-none">
                  &nbsp;
                </div>
              ))}

              <div className="punteado col-12 px-5 pt-sm-5 pb-sm-5">
                {/* Espacios antes del texto */}
                {[...Array(4)].map((_, i) => (
                  <div key={`top-mob-${i}`} className="w-100 d-block d-lg-none">
                    &nbsp;
                  </div>
                ))}

                {[...Array(20)].map((_, i) => (
                  <div key={`top-lg-${i}`} className="w-100 d-none d-lg-block">
                    &nbsp;
                  </div>
                ))}

                {[...Array(5)].map((_, i) => (
                  <div key={`top-md-${i}`} className="w-100 d-none d-md-block">
                    &nbsp;
                  </div>
                ))}

                <div className="w-100 d-block d-lg-none">&nbsp;</div>

                <ParrafoColor className="text-justify col-10 offset-1 col-md-6 offset-md-3 col-lg-6 text-lg-left">
                  {t("Empresa.text1")}
                </ParrafoColor>

                {[...Array(7)].map((_, i) => (
                  <div key={`mid-lg-${i}`} className="w-100 d-none d-lg-block">
                    &nbsp;
                  </div>
                ))}
                {[...Array(3)].map((_, i) => (
                  <div key={`mid-mob-${i}`} className="w-100 d-block d-lg-none">
                    &nbsp;
                  </div>
                ))}

                <ParraColorfobold className="text-justify pt-5 d-none pt-sm-0 col-10 offset-1 d-sm-block offset-md-2 col-lg-5 offset-lg-3 text-lg-center">
                  {t("Empresa.text2")}
                </ParraColorfobold>

                <br />
                <br />
                <br />
                <br />

                <ParrafoColor className="text-justify pregular d-none col-12 pb-5 pt-md-5 d-sm-block col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-lg-left">
                  {t("Empresa.text2a")}
                </ParrafoColor>

                {[...Array(5)].map((_, i) => (
                  <div key={`bot-md-${i}`} className="w-100 d-none d-md-block">
                    &nbsp;
                  </div>
                ))}
                {[...Array(7)].map((_, i) => (
                  <div key={`bot-lg-${i}`} className="w-100 d-none d-lg-block">
                    &nbsp;
                  </div>
                ))}
              </div>
            </Row>
          </Col>

          <Col className="text-sm-center order-3 col-6 offset-6 col-sm-12 offset-sm-0 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {[...Array(9)].map((_, i) => (
              <div key={`bottom-lg-${i}`} className="w-100 d-none d-lg-block">
                &nbsp;
              </div>
            ))}
            {[...Array(2)].map((_, i) => (
              <div key={`bottom-mob-${i}`} className="w-100 d-block d-lg-none">
                &nbsp;
              </div>
            ))}

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

            {[...Array(5)].map((_, i) => (
              <div key={`final-space-${i}`} className="w-100 d-block d-lg-none">
                &nbsp;
              </div>
            ))}
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

  img {
    height: 100%;
    width: 100%;
  }

  .imgfondo {
    align-self: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  span {
    color: #ff6e40;
    font-size: 1.7rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 1px;
  }

  .pllamativo {
    color: #ff6e40;
    font-size: 3rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 3.2rem;
    letter-spacing: 3px;
  }

  .pregular {
    color: #ff6e40;
    font-size: 2rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 1px;
  }

  .alfredotext {
    font-family: Montserrat;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 1px;
    color: #ff6e40;
    font-size: 2rem;
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
