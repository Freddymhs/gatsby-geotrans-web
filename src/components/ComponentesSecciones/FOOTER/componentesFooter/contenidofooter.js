import React from "react"
import { Row, Col } from "react-bootstrap"

const Contenidofooter = ({
  useTranslation,
  Link,
  logofootergeotrans,
  estilos,
  iconosSociales,
  iconosContactoPersonalizado,
}) => {
  const { t } = useTranslation() // necesario

  return (
    <Row>
      <Col xs={12} md={3} lg={2} xl={2} className=" text-center ">
        <img
          alt="logo geotrans arica maquinaria y transportes"
          className="mt-5 m-0 p-0  img img-fluid"
          src={logofootergeotrans}
        ></img>
      </Col>
      <Col
        xs={12}
        md={3}
        lg={3}
        xl={2}
        className="d-flex justify-content-center  borderless "
      >
        <table border={1} className="mt-5 borderless">
          <tr className=" my-0 py-0 ">
            <td colSpan={4} className="text-center my-0 py-0 ">
              <p className=" m-0 p-0 " style={estilos.footerTitleSociales}>
                {t("header.title")}
              </p>
            </td>
          </tr>
          <tr className="borderless">
            <td className="text-center ">
              {/* <img style={IconosContactos.s3} src={youtubePersonalizado}></img> */}
            </td>
            <td className="text-center ">
              <a href="www.linkedin/geotrans.com">
                <img
                  style={estilos.IconosContactos.s3}
                  src={iconosSociales[1]}
                />
              </a>
            </td>
          </tr>
        </table>
      </Col>
      <Col
        xs={12}
        md={3}
        lg={2}
        xl={2}
        className="d-flex justify-content-center borderless "
      >
        <table border={1} className="mt-5 borderless">
          <tr>
            <td className="text-center  d-flex">
              <img
                className=""
                style={estilos.IconosContactos.s2}
                src={iconosSociales[0]}
              ></img>
            </td>
            <td>
              <p className="" style={estilos.IconSociales.ubicacion}>
                Arica,Chile
              </p>
            </td>
          </tr>
        </table>
      </Col>
      <Col
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className="d-flex justify-content-center justify-content-md-end    "
      >
        <table border={1} className="mt-4 borderless ">
          <tr className="h-100 w-100 m-0 p-0">
            <td className="pr-3">
              <img
                style={estilos.IconosContactos.s2}
                src={iconosContactoPersonalizado[2]}
              ></img>
            </td>
            <td className="h-100 d-flex align-items-center  justify-content-start  m-0 p-0">
              <p className="p-0 m-0" style={estilos.IconSociales.linkscontacto}>
                <a className="linksimple" href="tel:56 997050288">
                  {" "}
                  {t("footer.contactoTelefono")}
                </a>
              </p>
            </td>
          </tr>
          <tr className="h-100 w-100 m-0 p-0">
            <td>
              <img
                style={estilos.IconosContactos.s1}
                src={iconosContactoPersonalizado[0]}
              ></img>
            </td>
            <td className="h-100 d-flex align-items-center justify-content-start  m-0 p-0">
              <p className="p-0 m-0" style={estilos.IconSociales.linkscontacto}>
                <a className="linksimple" href="mailto:fmarcosdev@gmail.com">
                  {t("footer.contactoEMAIL")}
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                style={estilos.IconosContactos.s2}
                src={iconosContactoPersonalizado[1]}
              ></img>
            </td>

            <td className="h-100  d-flex align-items-center justify-content-start  m-0 p-0">
              <p className="p-0 m-0" style={estilos.IconSociales.linkscontacto}>
                <a
                  className="linksimple"
                  target="_blank"
                  href="http://www.facebook.com/YOURUSERNAMEHERE"
                >
                  {t("footer.contactoFB")}
                </a>
              </p>
            </td>
          </tr>
        </table>
      </Col>
    </Row>
  )
}

export default Contenidofooter
