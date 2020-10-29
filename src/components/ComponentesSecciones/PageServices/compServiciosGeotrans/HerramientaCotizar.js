import React, { useEffect, useState } from "react"
import {
  Accordion,
  Button,
  Card,
  CardColumns,
  CardGroup,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap"
import { List, ListItem } from "../../../ComponentesGlobales/ListadoOpciones"
import { BtnFiltro } from "../../../ComponentesGlobales/Misbotones"
import {
  ParrafoListados,
  ParrafoColor,
  ParrafoMenu,
  TextLanguage,
} from "../../../ComponentesGlobales/MisTextos"
import swapFiltro from "../../../../images/iconos/swapFiltro.svg"
import goCotizaSelected from "../../../../images/iconos/goCotizaSelected.svg"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const ActualizaIntereses = (
  llegoesto,
  Intereses,
  setIntereses,
  cart,
  setcart
) => {
  setIntereses([...Intereses, llegoesto])
  setcart([...cart, llegoesto])
}

const GENERADORparaBuscar = (
  ValorLi,
  tipoLi,
  PorSselected,
  setPorSselected
) => {
  return (
    <>
      {(() => {
        switch (ValorLi) {
          case 1:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break
          case 2:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break
          case 3:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break
          case 4:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break
          case 5:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break
          case 6:
            setPorSselected({
              valor: ValorLi,
              tipo: tipoLi,
            })
            break

          default:
            alert("no tengo valor :/")
        }
      })()}
    </>
  )
}
const AREAparaBuscar = (LIvalue, setAREAnueva, AREAselected) => {
  return (
    <>
      {(() => {
        switch (LIvalue) {
          case 1:
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break
          case 2:
            // obtenemos el LI
            console.log(LIvalue)
            // se pasa el LI al usestate
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break

          case 3:
            // obtenemos el LI
            console.log(LIvalue)
            // se pasa el LI al usestate
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break
          case 4:
            // obtenemos el LI
            console.log(LIvalue)
            // se pasa el LI al usestate
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break
          case 5:
            // obtenemos el LI
            console.log(LIvalue)
            // se pasa el LI al usestate
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break
          case 6:
            // obtenemos el LI
            console.log(LIvalue)
            // se pasa el LI al usestate
            setAREAnueva(LIvalue)
            // se pregunta al cuadro resultado cual es el numero del AREAnueva para cargarlo
            break
          default:
            alert("no tengo valor :/")
        }
      })()}
    </>
  )
}
const HerramientaCotizar = props => {
  const { t } = useTranslation()
  const {
    cart,
    setcart,
    Intereses,
    setIntereses,
    PorSselected,
    setPorSselected,
    AREAselected,
    setAREAnueva,
    currentIdioma,
    AreasDeProductosOServicios,
    CambiarFiltro,
    filtro,
    ProductoresYServidores,
    ProductosYServicios,
  } = props

  return (
    <>
      <Container fluid>
        {/* PARTE 1 = FILTRO*/}
        <Row>
          <Col className="col-12   ">
            <Row>
              <Col className="  offset-2 col-6 offset-md-7 col-md-3   d-flex align-items-center justify-content-end">
                <TextLanguage>
                  {filtro == true ? (
                    <>{t("Servicios.primerFiltro")}</>
                  ) : (
                    <>{t("Servicios.segundoFiltro")}</>
                  )}
                </TextLanguage>
              </Col>
              <Col className="col-2  col-md-2 d-flex align-items-center justify-content-center">
                <BtnFiltro onClick={() => CambiarFiltro()}>
                  <img src={swapFiltro}></img>
                </BtnFiltro>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* PARTE 2 = HERRAMIENTA */}
        <Row>
          {/* panel IZQUIERDA */}
          <Col className="col-12 col-md-3 col-lg-2   ">
            <List className="mx-0 px-0">
              {/*FILTRO N1*/} {/*FILTRO N1*/} {/*FILTRO N1*/} {/*FILTRO N1*/}
              {filtro ? (
                <Row className="mx-0 text-center  mx-0 px-0 ">
                  {ProductoresYServidores.map(({ node }, index) => (
                    <Col className="col-6 col-md-12" key={index}>
                      <ListItem
                        value={
                          node.CODPRODUCTORR
                            ? node.CODPRODUCTORR
                            : node.CODSERVIDOR
                        }
                        onClick={
                          node.CODPRODUCTORR
                            ? () => {
                                GENERADORparaBuscar(
                                  node.CODPRODUCTORR,
                                  "productor",
                                  PorSselected,
                                  setPorSselected
                                )
                              }
                            : () => {
                                GENERADORparaBuscar(
                                  node.CODSERVIDOR,
                                  "servidor",
                                  PorSselected,
                                  setPorSselected
                                )
                              }
                        }
                      >
                        <ParrafoMenu>
                          {currentIdioma == "Español"
                            ? node.NAMEESP
                            : node.NAMEENG}
                        </ParrafoMenu>
                      </ListItem>
                    </Col>
                  ))}
                </Row>
              ) : (
                // FILTRO N2  // FILTRO N2  // FILTRO N2  // FILTRO N2  // FILTRO N2
                <Row className="mx-0 text-center  mx-0 px-0 ">
                  {AreasDeProductosOServicios.allMysqlTodasLasAreas.edges.map(
                    ({ node }, index) => (
                      <Col className="col-6 col-md-12" key={index}>
                        <ListItem
                          value={node.CODAREA}
                          onClick={() =>
                            AREAparaBuscar(
                              node.CODAREA,
                              setAREAnueva,
                              AREAselected
                            )
                          }
                        >
                          <ParrafoMenu>
                            {currentIdioma == "Español"
                              ? node.NAMEESP
                              : node.NAMEENG}
                          </ParrafoMenu>
                        </ListItem>
                      </Col>
                    )
                  )}
                </Row>
              )}
            </List>
            {cart != "" ? (
              <div className="d-none d-md-block ">
                <GoSelectoToCotization />
              </div>
            ) : (
              <></>
            )}
          </Col>

          {/* derecha */}
          {/* // solo productos o servicios //  // solo productos o servicios // */}
          <Col className="col-12 col-md-9   col-lg-10">
            <CardColumns>
              {filtro
                ? // para los que provengan de PRDUCTORESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
                  ProductosYServicios.map(
                    ({ node }, index) =>
                      //MOSTRAR LOS PRODUCTOS
                      PorSselected.tipo == "productor" && node.CODPRODUCTORR ? (
                        PorSselected.valor == node.CODPRODUCTO ? (
                          <Styled>
                            <Card
                              onClick={() =>
                                ActualizaIntereses(
                                  node.NAMEESP,
                                  Intereses,
                                  setIntereses,
                                  cart,
                                  setcart
                                )
                              }
                            >
                              {/* generadores -> PRODUCTOS */}
                              <Card.Body>
                                <ParrafoListados className="text-left text-md-center">
                                  {currentIdioma == "Español"
                                    ? node.NAMEESP
                                    : node.NAMEENG}
                                </ParrafoListados>
                              </Card.Body>
                            </Card>
                          </Styled>
                        ) : (
                          <p></p>
                        )
                      ) : //MOSTRAR LOS SERVICIOS
                      PorSselected.tipo == "servidor" && node.CODSERVIDOR ? (
                        PorSselected.valor == node.CODSERVIDOR ? (
                          <Styled>
                            <Card
                              onClick={() =>
                                ActualizaIntereses(
                                  node.NAMEESP,
                                  Intereses,
                                  setIntereses,
                                  cart,
                                  setcart
                                )
                              }
                            >
                              <Card.Body>
                                {/* generadores -> SERVICIOS */}
                                <ParrafoListados>
                                  {currentIdioma == "Español"
                                    ? node.NAMEESP
                                    : node.NAMEENG}
                                </ParrafoListados>

                                {/* <ParrafoColor className="text-left text-md-center">
     
                                  {currentIdioma == "Español"
                                    ? node.NAMEESP
                                    : node.NAMEENG}
     
                                </ParrafoColor> */}
                              </Card.Body>
                            </Card>
                          </Styled>
                        ) : (
                          <></>
                        )
                      ) : //LISTADO
                      ///// CHECKEANDO
                      PorSselected.tipo == "productor" ||
                        PorSselected.tipo == "servidor" ? (
                        //  llegamos aqui cuando ya PICKEAS alguna OPCION en el filtro de productores o servidores
                        <></>
                      ) : (
                        <Styled>
                          <Card
                            onClick={() =>
                              ActualizaIntereses(
                                node.NAMEESP,
                                Intereses,
                                setIntereses,
                                cart,
                                setcart
                              )
                            }
                          >
                            {/* DEFAULT DE PRODUCTORES + SERVIDORES */}
                            <Card.Body>
                              <ParrafoListados className="text-left text-md-center">
                                {currentIdioma == "Español"
                                  ? node.NAMEESP
                                  : node.NAMEENG}
                              </ParrafoListados>
                            </Card.Body>
                          </Card>
                        </Styled>
                      )
                    ////////
                  )
                : // AREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  ProductosYServicios.map(
                    ({ node }, index) =>
                      AREAselected == node.CODAREA ? (
                        <Styled>
                          <Card
                            onClick={() =>
                              ActualizaIntereses(
                                node.NAMEESP,
                                Intereses,
                                setIntereses,
                                cart,
                                setcart
                              )
                            }
                          >
                            {/* AREAS => POR SECCIONES */}
                            <Card.Body>
                              <ParrafoListados className="text-left text-md-center">
                                {currentIdioma == "Español"
                                  ? node.NAMEESP
                                  : node.NAMEENG}
                              </ParrafoListados>
                            </Card.Body>
                          </Card>
                        </Styled>
                      ) : //lo primero en cargarse al buscar X AREAS
                      AREAselected ? (
                        <></>
                      ) : (
                        <Styled>
                          <Card
                            onClick={() =>
                              ActualizaIntereses(
                                node.NAMEESP,
                                Intereses,
                                setIntereses,
                                cart,
                                setcart
                              )
                            }
                          >
                            {/* AREAS => DEFAULT DE TODAS LAS AREAS EXISTENTES  */}
                            <Card.Body>
                              <ParrafoListados className="text-left text-md-center">
                                {currentIdioma == "Español"
                                  ? node.NAMEESP
                                  : node.NAMEENG}
                              </ParrafoListados>
                            </Card.Body>
                          </Card>
                        </Styled>
                      )
                    // x
                  )}
            </CardColumns>
          </Col>
        </Row>
        <Row className="d-block d-md-none">
          <GoSelectoToCotization></GoSelectoToCotization>
        </Row>
      </Container>
    </>
  )
}
export default HerramientaCotizar

const SwapTipoFiltroDeServicios = ({ CambiarFiltro, filtro }) => {
  const { t } = useTranslation()

  return (
    <Row>
      <Col className="  offset-2 col-6 offset-md-7 col-md-3   d-flex align-items-center justify-content-end">
        <TextLanguage></TextLanguage>
      </Col>
      <Col className="col-2  col-md-2 d-flex align-items-center justify-content-center">
        <BtnFiltro onClick={() => CambiarFiltro()}>
          <img src={swapFiltro}></img>
        </BtnFiltro>
      </Col>
    </Row>
  )
}

const GoSelectoToCotization = () => {
  const { t } = useTranslation()
  return (
    <Row
      className="
    d-flex 
    align-items-center 
    justify-content-center  
     text-center"
    >
      <Col className=" d-flex align-items-center justify-content-end">
        <TextLanguage>{t("Servicios.cotizarlo")}</TextLanguage>
      </Col>
      <Col className=" d-flex align-items-center justify-content-md-center justify-content-start">
        <a href="#listadoCotizar">
          <BtnFiltro>
            <img src={goCotizaSelected}></img>
          </BtnFiltro>
        </a>
      </Col>
    </Row>
  )
}

const Styled = styled.div`
  .card:hover {
    cursor: pointer;
    border-radius: 9px;
    background-color: #f8f8ff;
    color: #ff6e40;
    transition: 0.19s;
  }
  .card-body {
    :hover {
      transition: 0.44s;
      -moz-box-shadow: 7px 6px 9px 0px #ff6e40;
      -webkit-box-shadow: 7px 6px 9px 0px #ff6e40;
      box-shadow: 7px 6px 9px 0px #ff6e40;
    }
  }
`
