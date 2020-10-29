import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps

import f from "../../../images/iconos/inbot/fotFace.svg"
import i from "../../../images/iconos/inbot/fotInsta.svg"
import l from "../../../images/iconos/inbot/fotLink.svg"
import w from "../../../images/iconos/inbot/fotWhats.svg"
import y from "../../../images/iconos/inbot/fotYoutube.svg"
import foto from "../../../images/maquinageotrans.jpg"

import { ParallaxFooter } from "../../ComponentesGlobales/FullParallax"
// import { CustomerChat } from "../../ComponentesGlobales/CustomerChat"
const Footegeotrans = () => {
  const { t } = useTranslation()
  return (
    <>
      {/* <CustomerChat /> */}
      <Styled>
        <Container style={{ backgroundColor: "#f5f5f5" }}></Container>

        <ParallaxFooter foto={foto} />
        {/* <ParallaxFooter foto={foto} /> */}

        <Container fluid className=" ">
          <Row>
            <Col className=" d-flex justify-content-center  col-12 col-sm-6 col-md-4 py-5">
              <table className=" w-50">
                <thead className="">
                  <tr className="">
                    <th>{t("footer.contact")}</th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr className=" ">
                    <td colspan="1">
                      <a href={t("datosgeotrans.telefonoContact")}>
                        {t("datosgeotrans.telefono")}
                      </a>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td colspan="1">
                      <a href={t("datosgeotrans.emailContact")} target="_blank">
                        {t("datosgeotrans.email")}
                      </a>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td colspan="1">
                      <a
                        href={t("datosgeotrans.facebookContact")}
                        target="_blank"
                      >
                        {t("datosgeotrans.social")}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col className=" d-flex justify-content-center  col-12 col-sm-6 col-md-4 py-5">
              <table className=" w-50">
                <thead className="">
                  <tr className="">
                    <th>{t("footer.location")}</th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr>
                    <td>{t("datosgeotrans.ubicacion")}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col className=" d-flex justify-content-center  col-12  col-md-4  py-5">
              <table className=" w-50">
                <thead className="">
                  <tr className="">
                    <th>{t("footer.cotizar")}</th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr className=" ">
                    <td colspan="1">
                      <Link to="/contactus/">{t("header.Contact us")}</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col className="bordepersonal d-flex justify-content-center  col-12  py-5">
              <table className=" w-50">
                <thead className="">
                  <tr className="">
                    <th>{t("footer.redes")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" d-flex align-items-center justify-content-around">
                      {/* <Link to="/">
                      <img src={i} alt="instagram geotrans"></img>
                    </Link> */}
                      <a
                        href={t("datosgeotrans.linkedinContact")}
                        target="_blank"
                      >
                        <img src={l} alt="linkedin geotrans"></img>
                      </a>

                      <a
                        href={t("datosgeotrans.facebookContact")}
                        target="_blank"
                      >
                        <img src={f} alt="facebook geotrans"></img>
                      </a>

                      <a
                        href={t("datosgeotrans.whatsapContact")}
                        target="_blank"
                      >
                        <img src={w} alt="whatsapp geotrans"></img>
                      </a>
                      {/* <Link to="/">
                      <img src={y} alt="youtube geotrans"></img>
                    </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col className=" d-flex justify-content-center  col-12 col-md-6 py-5">
              <table className=" w-50">
                <thead className="">
                  <tr className="">
                    <th>{t("footer.services")}</th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.1.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.2.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.3.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.4.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.5.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.6.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.7.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.8.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.9.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.10.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.11.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.12.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.13.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.14.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.15.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.16.nombre")}
                      </Link>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td>
                      <Link to="/services/">
                        {t("serviciosGeotrans.17.nombre")}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col
              className=" col-12 col-md-6  2en1 sin
           rows 
          py-5"
            >
              <Col className=" d-flex justify-content-center  col-12 px-0 mx-0">
                <table className=" w-50">
                  <thead className="">
                    <tr className="">
                      <th>{t("footer.machines")}</th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    <tr className=" ">
                      <td>
                        <Link to="/#MaquinariasGeotrans">
                          {t("aljibes.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/#MaquinariasGeotrans">
                          {t("plumas.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="#MaquinariasGeotrans">
                          {t("bateas.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="#MaquinariasGeotrans">
                          {t("tolvas.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="#MaquinariasGeotrans">
                          {t("porters.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="#MaquinariasGeotrans">
                          {t("retroexcavadoras.patente1.nombre")}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>

              <Col className=" d-flex justify-content-center  col-12 px-0 mx-0">
                <table className=" w-50">
                  <thead className="">
                    <tr className="">
                      <th>{t("footer.nav")}</th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    <tr className=" ">
                      <td>
                        <Link to="/">{t("header.Home")}</Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/us/">{t("header.About Us")}</Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/services/">{t("header.Services")}</Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/contactus/">{t("header.Contact us")}</Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/contactus/">{t("header.Work with us")}</Link>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td>
                        <Link to="/news/">{t("header.News")}</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Col>
          </Row>
        </Container>
      </Styled>
    </>
  )
}
// F5F5F5
// FF6E40
// 29434E
const Styled = styled.div`
  background-color: #f8f8ff;
  .bordepersonal {
    border-radius: 5px;
    background-color: #e6e6e6;
  }
  /* width: 100%;
  height: 100%; */
  /* .col {
    height: 20vh;
  } */
  thead {
    text-align: left;
    font-size: 2.4rem;
    letter-spacing: 0.21em;
    color: #ff6e40;
    font-family: Lato;
  }
  tbody {
    text-align: justify;
    font-size: 2.4rem;
    font-family: Lato;
    font-size: 24px;
    line-height: 28px;
    color: #29434e;
    & a {
      text-decoration: none !important;
      text-align: justify;
      font-size: 2.4rem;
      font-family: Lato;
      font-size: 24px;
      line-height: 28px;
      color: #29434e;
    }
  }
`

export default Footegeotrans
