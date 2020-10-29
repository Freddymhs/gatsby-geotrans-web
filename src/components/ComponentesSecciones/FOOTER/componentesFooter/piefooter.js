import React from "react"
import { Col, Row } from "react-bootstrap"

const Piefooter = ({ useTranslation, Link }) => {
  const { t } = useTranslation() // necesario

  return (
    <Row className="pt-5 mt-5 ">
      <Col
        xs={12}
        md={7}
        className="d-flex justify-content-center   d-flex align-items-center
          
          "
        style={{ fontSize: "1.5rem" }}
      >
        <div className="d-block d-md-none ">
          <p
            className=" text-center m-0 p-0
          "
            style={{ color: "white" }}
          >
            {t("footer.Copyr1")}
          </p>
          <p className=" text-center m-0 p-0" style={{ color: "white" }}>
            {t("footer.Copyr2")}
          </p>
          <p className=" text-center m-0 p-0" style={{ color: "white" }}>
            {t("footer.Copyr3")}
          </p>
        </div>

        <div className="d-none d-md-block">
          <pre
            className=" text-center m-0 p-0"
            style={{ color: "white" }}
          >
            <span> {t("footer.Copyr1")}</span>
            <span>&nbsp;</span>
            <span>
              <a className="linksencillo" href="www.geotrans.cl"> {t("footer.Copyr2")}</a>
            </span>
            <span>&nbsp;</span>
            <span> {t("footer.Copyr3")}</span>
          </pre>
        </div>
      </Col>

      <Col
        xs={12}
        md={5}
        className="d-flex justify-content-center  d-flex align-items-end"
        style={{ fontSize: "1.5rem" }}
      >
        <p
          className="    
         text-center m-0 p-0"
          style={{ color: "white" }}
        >
          {t("footer.Developed")}
        </p>
        <p
          className="
        
         text-center m-0 p-0 "
          style={{ color: "white" }}
        >
          <a className="linksencillo" href="www.farcosdev.com">{t("footer.By")}</a>
        </p>
      </Col>
    </Row>
  )
}

export default Piefooter
