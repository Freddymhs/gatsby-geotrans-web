import React from "react"
import somos from "../../../videos/somos.mp4"

import { Row, Col, Container } from "react-bootstrap"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps
import {
  TextoGrandeBoldColor,
  TextoGrandeBold,
  TextoGrande,
} from "../../ComponentesGlobales/MisTextos"
// import { CustomerChat } from "../../ComponentesGlobales/CustomerChat"
const Portada = () => {
  return (
    <>
      {/* <CustomerChat /> */}
      <div style={videowrap}>
        <VideoPortada />
        <Overlay />
        <Contenido />
      </div>
    </>
  )
}
export default Portada

const VideoPortada = () => {
  return (
    <video
      src={somos}
      loop={true}
      muted={true}
      autoPlay={true}
      controls={false}
      style={videosfondo}
      src={somos}
    />
  )
}

const Overlay = () => {
  return <div style={overlayefecto} />
}
const Contenido = () => {
  const { t } = useTranslation() // necesario
  return (
    <Container
      fluid
      id="elementoarriba"
      className=" 
      w-100 h-100 
      d-flex 
      flex-column
      justify-content-center"
      style={areadecontenidos}
    >
      <table
        className="w-100     table less text-center"
        style={{ fontSize: "3.4rem", fontFamily: "MontserratBold" }}
      >
        <tr className="">
          <td className="py-0 my-0 ">
            <TextoGrande> {t("portada.paragraph1")}</TextoGrande>
          </td>
        </tr>
        <tr>
          <td className="py-0 my-0 ">
            <TextoGrande>{t("portada.paragraph2")}</TextoGrande>

            <TextoGrandeBoldColor>
              {t("portada.paragraph2b")}
            </TextoGrandeBoldColor>
          </td>
        </tr>
        <tr>
          <td className="">
            <Col>
              <TextoGrandeBold>{t("portada.paragraph3")}</TextoGrandeBold>
            </Col>
          </td>
        </tr>
        <tr className="  ">
          <td>
            <div
              class="  rw-words rw-words-1   
            d-flex align-items-center justify-content-center
            "
            >
              <TextoGrandeBoldColor className="    ">
                {t("portada.paragraphA")}
              </TextoGrandeBoldColor>
              <TextoGrandeBoldColor className="   ">
                {t("portada.paragraphB")}
              </TextoGrandeBoldColor>
              <TextoGrandeBoldColor className="    ">
                {t("portada.paragraphC")}
              </TextoGrandeBoldColor>
            </div>
          </td>
        </tr>
      </table>
    </Container>
  )
}

///////////////////////////maquetacion del sitio//////////////////////////////////
const videowrap = {
  height: "89vh ",
  width: "auto ",
  position: "relative ",
  overflow: "hidden ",
  backgroundColor: "#001c26",
}

const videosfondo = {
  zIndex: "1",
  objectPosition: "top right",
  // width: "100%", height: "100vh",

  objectFit: "fill",
  backgroundColor: "#29434e",

  width: "auto",
  minWidth: "100%",
  // height: "89vh",   NO CUADRABA BIEN EN EDGE :/
}

const overlayefecto = {
  position: "absolute",
  top: "0",
  left: "0",
  backgroundImage:
    "linear-gradient(to right,rgba(0, 28, 38, 0.77),rgba(0, 28, 38, 0.77))",
  backgroundSize: "7px 9px",
  zIndex: "2",
  height: "120vh",
  width: "100%",
  minWidth: "100%",
  //  backgroundImage: "linear-gradient(to top,rgba(0, 0, 0, 0.73) 50%,rgba(0, 28, 38, 0.77) 50%)"
}

const areadecontenidos = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  zIndex: "3",
}
