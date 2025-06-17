import React from "react";
import somos from "@videos/somos.mp4";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";
import poster from "@images/prevideo/preload.png";
import {
  TextoGrandeBoldColor,
  TextoGrandeBold,
  TextoGrande,
} from "../shared/Texts";

const Portada = () => (
  <div
    className="position-relative overflow-hidden"
    style={{ height: "89vh", backgroundColor: "#001c26" }}
  >
    <VideoPortada />
    <Overlay />
    <Contenido />
    <style>{rotateKeyframes}</style>
  </div>
);

export default Portada;

const VideoPortada = () => (
  <video
    poster={poster}
    src={somos}
    loop
    muted
    autoPlay
    controls={false}
    className="position-absolute w-100 h-100"
    style={{
      zIndex: 1,
      objectFit: "cover",
      objectPosition: "center",
      backgroundColor: "#29434e",
    }}
  />
);

const Overlay = () => (
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(to right, rgba(0, 28, 38, 0.77), rgba(0, 28, 38, 0.77))",
      zIndex: 2,
    }}
  />
);

const Contenido = () => {
  const { t } = useTranslation();

  const textoStyle = {
    fontSize: "3.4rem",
    fontFamily: "MontserratBold",
  };

  return (
    <Container
      fluid
      id="elementoarriba"
      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 3 }}
    >
      <Row className="text-center w-100">
        {[
          { key: "paragraph1", comp: TextoGrande },
          {
            key: "paragraph2",
            comp: TextoGrande,
            extra: (
              <TextoGrandeBoldColor>
                {t("portada.paragraph2b")}
              </TextoGrandeBoldColor>
            ),
          },
          { key: "paragraph3", comp: TextoGrandeBold },
        ].map(({ key, comp: Comp, extra }, i) => (
          <Col key={key} xs={12} className="py-2">
            <div style={textoStyle}>
              <Comp>{t(`portada.${key}`)}</Comp>
              {extra}
            </div>
          </Col>
        ))}

        <Col xs={12} className="py-2">
          <div
            className="position-relative d-inline-flex w-100 justify-content-center"
            style={{ height: "4rem" }}
          >
            {[0, 3, 6].map((delay, idx) => (
              <span
                key={idx}
                className="position-absolute"
                style={{
                  opacity: 0,
                  overflow: "hidden",
                  animation: `rotateWord 9s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                <TextoGrandeBoldColor>
                  {t(`portada.paragraph${String.fromCharCode(65 + idx)}`)}
                </TextoGrandeBoldColor>
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const rotateKeyframes = `
@keyframes rotateWord {
  0%, 80%, 100% { opacity: 0; }
  2% { opacity: 0; transform: translateY(-30px); }
  5%, 17% { opacity: 1; transform: translateY(0px); }
  20% { opacity: 0; transform: translateY(30px); }
}
`;
