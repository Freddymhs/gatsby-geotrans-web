import React from "react"
import { Parallax, Background } from "react-parallax"
import { Overlaypersonalizado, OverlaySecundario } from "./PageVideoBG"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import {
  TItulofooter,
  SubtitloFooter,
  Subtitulofooter2,
} from "./MisTextos"

export const ParallaxFooter = ({ foto }) => {
  const { t } = useTranslation()
  return (
    <Parallax
      style={{ fontFamily: "Montserrat", textAlign: "center" }}
      bgImage={foto}
      strength={2600}
      bgImageAlt="Cargador Frontal"
    >
      <div style={{ height: "400px" }}>
        <OverlayF1 />
        <OverlayF2 />
        <div
          style={{
            zIndex: "4",
            width: "100%",
            // width: "87vw",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "0",
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className="text-white"
        >
          <Container className=" mx-0 px-0 w-100" fluid>
            <Row
              className="d-flex align-items-center 
        "
            >
              <Col className="col-12 col-md-6">
                <table className="w-100">
                  <tr>
                    <td>
                      <TItulofooter>{t("header.title")}</TItulofooter>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SubtitloFooter>{t("header.subtitle")}</SubtitloFooter>
                    </td>
                  </tr>
                </table>
              </Col>
              <Col className="col-12 col-md-6">
                <table className=" text-center w-100">
                  <tr>
                    <td>
                      <Subtitulofooter2>
                        {t("datosgeotrans.pagina")}
                      </Subtitulofooter2>
                    </td>
                  </tr>
                </table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Parallax>
  )
}
export const ParallaxGral = ({ foto, frase, frasealt }) => {
  return (
    <Parallax
      style={{ fontFamily: "sans-serif", textAlign: "center" }}
      bgImage={foto}
      strength={300}
      bgImageAlt="Arica Servicios y Arriendos"
    >
      <div style={{ height: 300, background: "rgba(41, 67, 78, 0.77)" }}>
        <div
          style={{
            width: "87vw",
            fontWeight: "bold",
            fontSize: "18px",
            padding: 22,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className="text-white"
        >
          <p>{frase}</p>
          <p>{typeof frasealt == "undefined" ? <p>&nbsp;</p> : frasealt}</p>
        </div>
      </div>
    </Parallax>
  )
}


export const Overlaybasico = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 27, 39, 0.53),
    rgba(0, 27, 39, 0.53)
  );

  z-index: 2;
  height: 100%;
  width: 100%;
`
export const Overlayefecto1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 27, 39, 0.1),
    rgba(0, 27, 39, 0.3)
  );

  z-index: 2;
  height: 100%;
  width: 100%;
`
export const Overlayefecto2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 110, 64, 0.77),
    rgba(255, 110, 64, 1)
  );
  clip-path: polygon(
    0 100%,
    29% 100%,
    100% 100%,
    100% 39%,
    0 80%,
    0 100%,
    0 100%,
    0 100%
  );
  z-index: 3;
  height: 100%;
  width: 100%;
`
export const OverlayF1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 110, 64, 1),
    rgba(255, 110, 64, 0.7)
  );
  clip-path: polygon(0 0, 25% 0, 60% 100%, 0% 100%);
  z-index: 3;
  height: 100%;
  width: 100%;
`
export const OverlayF2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to left,
    rgba(41, 67, 78, 1),
    rgba(41, 67, 78, 0.3)
  );
  clip-path: polygon(100% 0, 25% 0, 60% 100%, 100% 100%);

  z-index: 3;
  height: 100%;
  width: 100%;
`

export default ParallaxFooter
