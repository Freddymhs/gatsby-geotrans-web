import React, { useEffect } from "react"

import { Container, Row, Col, Badge, Button } from "react-bootstrap"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

import { BtnPrimario } from "../../../ComponentesGlobales/Misbotones"

import { PalabraDestacadaBlack } from "../../../ComponentesGlobales/MisTextos"
import Img from "gatsby-image"
const CardsWorking = ({ ListaMaquinarias }) => {
  return (
    <Row className="">
      {ListaMaquinarias.geoAljibe.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoAljibe[index]}
            />
          </>
        )
      })}
      {ListaMaquinarias.geoBatea.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoBatea[index]}
            />
          </>
        )
      })}
      {ListaMaquinarias.geoPluma.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoPluma[index]}
            />
          </>
        )
      })}
      {ListaMaquinarias.geoRetros.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoRetros[index]}
            />
          </>
        )
      })}
      {ListaMaquinarias.geoTolvas.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoTolvas[index]}
            />
          </>
        )
      })}
      {ListaMaquinarias.geoPorter.map((elemento, index) => {
        return (
          <>
            <Tarjeta
              estiloscard={estiloscard}
              unobjecto={ListaMaquinarias.geoPorter[index]}
            />
          </>
        )
      })}
    </Row>
  )
}

const Tarjeta = ({ estiloscard, unobjecto }) => {
  const { t } = useTranslation()
  return (
    <>
      <div
        class=" 
        image-flip col-12 col-md-6 col-xl-6 pb-2  p-0 m-0"
        ontouchstart="this.classList.toggle('hover');"
      >
        {/* aca dentro  todo mis 2 cars*/}
        <div class="mainflip    w-100 h-100">
          {/* frente */}
          <div class="frontside  w-100 h-100 ">
            <div
              class="card text-center h-100 w-100"
              style={estiloscard.ajusteFront}
            >
              <div id="wrap-trasparent" className="w-100">
                <span>
                  <p
                    style={{
                      position: "absolute",
                      width: "100%",
                      zIndex: "8",
                      fontSize: "3.8rem",
                      letterSpacing: "0px",
                      textTransform: "uppercase",
                      top: "0px",
                    }}
                    class="transparent-text"
                  >
                    {unobjecto.nombre}
                  </p>
                </span>
              </div>

              {/* <img
                alt={unobjecto.nombre}
                style={{
                  clipPath:
                    "polygon(65% 0, 100% 50%, 65% 100%, 0 100%, 25% 50%, 0 0)",
                  height: "100%",
                  width: "100%",
                }}
                src={unobjecto.media}
              ></img> */}

              <Img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  clipPath:
                    "polygon(65% 0, 100% 50%, 65% 100%, 0 100%, 25% 50%, 0 0)",
                }}
                fluid={unobjecto.media}
              ></Img>

              {/* <video
                  style={{
                    height: "100%",
                    width: "100%",
                    clipPath:
                      "polygon(55% 0, 40% 48%, 55% 100%, 15% 100%, 0% 50%, 15% 0)",
                    objectFit: "fill",
                    objectPosition: "0 0",
                  }}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src={videocards} type="video/mp4" />
                </video> */}
            </div>
          </div>

          {/* frente */}

          {/* atras */}
          <div class="backside   w-100 h-100 text-white ">
            <div
              class="card text-center w-100 h-100"
              style={estiloscard.ajusteBack}
            >
              <Container fluid className="h-100 ">
                <Row className="h-100">
                  <Col
                    className="col-12 d-none d-md-block col-md-6"
                    style={{
                      backgroundColor: "#001B27",
                      fontSize: "1.7rem",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      lineHeight: "2.2rem",
                      letterSpacing: "1px",
                    }}
                  >
                    <Row className=" " style={{ height: "100%" }}>
                      <Col>
                        <h1> {unobjecto.nombre}</h1>
                        {unobjecto.areas.map(currenITEM => {
                          return (
                            <label class="btn btn-dark py-auto my-auto text-center">
                              <p
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Tooltip on top"
                                style={{ fontSize: "1.7rem" }}
                              >
                                {currenITEM}
                              </p>
                            </label>
                          )
                        })}
                      </Col>

                      <Col className=" col-12">
                        {unobjecto.descripccion.map(currentItem => {
                          return (
                            <Col className="col-12  pt-5 text-justify ">
                              {currentItem}
                            </Col>
                          )
                        })}
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    className="col-12  col-md-6"
                    style={{
                      backgroundColor: "#001B27",
                      fontSize: "1.7rem",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      lineHeight: "2.2rem",
                      letterSpacing: "1px",
                    }}
                  >
                    <Row
                      className=" "
                      style={{
                        backgroundColor: "#FFA06D",
                        height: "100%",
                      }}
                    >
                      <Col>
                        {/* <h1> {unobjecto.nombre}</h1> */}
                        {/* <h1 > Algunos Servicios </h1> */}

                        <PalabraDestacadaBlack>
                          {t("Maquinarias.someservices")}
                        </PalabraDestacadaBlack>
                      </Col>

                      <Col className="px-0 mx-0 w-100  col-12">
                        {unobjecto.servicio.map(currentItem => {
                          return (
                            <Link
                              to="/services/"
                              className="w-100 btnincard"
                              style={{ textDecoration: "none !important" }}
                            >
                              <button
                                type="button"
                                className=" text-justify 
                          btn btn-dark
                           btn-block  
                           w-100
                           rounded-0
                           
                           "
                                style={{
                                  color: "#FFA06D",
                                  fontSize: "2.3rem",
                                  fontFamily: "Lato",
                                  fontWeight: "400",
                                  lineHeight: "2.4rem",
                                  letterSpacing: "2px",
                                  textDecoration: "none !important",
                                }}
                              >
                                {currentItem}
                              </button>
                            </Link>
                          )
                        })}
                      </Col>
                      <Col className="col-12">
                        {/* Ver Todos los Servicios */}
                        <Link to="/services/">
                          <BtnPrimario>{t("Maquinarias.more")}</BtnPrimario>
                        </Link>
                        {/* Ver Todos los Servicios */}
                      </Col>
                    </Row>
                  </Col>
                  {/* <Col
                    className="col-12 col-md-6 px-0 py-0 w-100
                    d-flex align-items-center justify-content-center flex-column"
                    style={{
                      backgroundColor: "#FFA06D",
                    }}
                  >
                    <h1>Servicios</h1>
                    {unobjecto.servicio.map(currentItem => {
                      return (
                        <Link
                          to="/services/"
                          className="w-100 btnincard"
                          style={{ textDecoration: "none !important" }}
                        >
                          <button
                            type="button"
                            className=" text-justify 
                          btn btn-dark
                           btn-block  
                           w-100
                           rounded-0
                           
                           "
                            style={{
                              color: "#FFA06D",
                              fontSize: "2.3rem",
                              fontFamily: "Lato",
                              fontWeight: "400",
                              lineHeight: "2.4rem",
                              letterSpacing: "2px",
                              textDecoration: "none !important",
                            }}
                          >
                            {currentItem}
                          </button>
                        </Link>
                      )
                    })}
                  </Col> */}
                </Row>
              </Container>

              {/* xxxxxxxxxx */}
            </div>
          </div>
          {/* atras */}
        </div>
        {/* aca dentro  todo mis 2 cars*/}
      </div>
      {/* areahover */}
    </>
  )
}

export default CardsWorking

const estiloscard = {
  ajusteFront: {
    backgroundColor: "#FF6E40",
  },
  ajusteBack: {
    backgroundColor: "#f5f5f5",
    boxShadow: "-2px 2px #FF6E40",
  },
}
