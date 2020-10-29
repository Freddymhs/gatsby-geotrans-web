import { Link } from "gatsby"
import React, { useContext } from "react"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import BtnPrimario, {
  BtnFiltro,
  BtnSecundario,
  BtnTerciario,
} from "../../../ComponentesGlobales/Misbotones"

// para usar context de layout// para usar context de layout
import { CartContext } from "../../../../context/CartContext"
import { useTranslation } from "react-i18next"
import {
  ParrafoMiniListado,
  ParrafoBlack,
  ParrafoListados,
} from "../../../ComponentesGlobales/MisTextos"
import TituloMini from "../TituloMini"

// para usar context de layout// para usar context de layout
const RevisionCotizacionSend = ({
  BorrarAlgunInteres,
  imgdelete,
  BorrarTodosLosInteres,
}) => {
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT
  const [cart, setcart] = useContext(CartContext)
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT
  const { t } = useTranslation()
  var kz = 1

  const p1 = t("Servicios.contact1")
  const p2 = t("Servicios.contact2")

  return (
    <>
      
      <Container>
        <Row className="">
          <Col className="col-12 col-md-6  ">
            <ListGroup className=" w-100 h-100">
              {cart != "" ? (
                cart.map(function (x) {
                  console.log(x)
                  return x ? (
                    <Row
                      className=" 
                    
                      d-flex
                      justify-content-end
                      align-items-end 
                      "
                    >
                      <Col
                        className="col-9
                       
                       d-flex
                      justify-content-start
                      align-items-end 
                      w-100 h-100"
                      >
                        {/* listadosssssssssssssssssssssssssssssssssssssssssssss */}
                        <ListGroup.Item
                          className="text-center col-12 w-100 h-100
                        d-flex align-items-center justify-content-center
                        "
                        >
                          <ParrafoMiniListado>{x}</ParrafoMiniListado>
                        </ListGroup.Item>
                        {/* x */}
                      </Col>
                      <Col className="col-3  d-flex  justify-content-center">
                        <p onClick={e => BorrarAlgunInteres(e.target.id)}>
                          <BtnFiltro>
                            <img
                              id={x}
                              className="img fluid"
                              src={imgdelete}
                            ></img>
                          </BtnFiltro>
                        </p>
                      </Col>
                    </Row>
                  ) : (
                    <p>no tengo elementos</p>
                  )
                })
              ) : (
                // xd
                <p
                  className="
              text-center p-5 my-5  h-100 w-100 d-flex align-items-center justify-content-center p-0 m-0"
                >
                  <ParrafoBlack>{t("Servicios.msgnalert")}</ParrafoBlack>
                </p>
              )}
            </ListGroup>
          </Col>

          <Col className="col-12 col-md-6 ">
            <Row>
              {/* xd */}
              {cart == "" ? (
                <Link to="/contactus/" className="col">
                  <BtnSecundario
                    onClick={() => {
                      BorrarTodosLosInteres()
                    }}
                  >
                    {/* xd */}
                    {t("Servicios.contact2")}
                  </BtnSecundario>
                </Link>
              ) : (
                <Link to="/contactus/" className="col">
                  <BtnPrimario
                    onClick={() => {
                      BorrarAlgunInteres()
                    }}
                  >
                    {/* xd */}
                    {t("Servicios.contact1")}
                  </BtnPrimario>
                </Link>
              )}
            </Row>
            <a
              className=""
              // href={t("datosgeotrans.facebookContact")}
              target="_blank"
            >
              <Link href={t("datosgeotrans.facebookContact")} target="_blank">
                <BtnTerciario>{t("datosgeotrans.txtFacebook")}</BtnTerciario>
              </Link>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RevisionCotizacionSend
