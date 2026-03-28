import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";

import horario from "@images/iconos/intop/029-clock.svg";
import telefono from "@images/iconos/intop/001-telephone.svg";
import email from "@images/iconos/intop/004-email.svg";
import masredes from "@images/iconos/intop/040-network.svg";

import ContactItems from "./ContactItems";

const HeaderInfo = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: "var(--background-dark)",
        padding: "4px 0",
      }}
    >
      <Container fluid className="px-4">
        <Row className="align-items-center">
          <Col xs={12} md={5} className="d-flex align-items-center">
            <img
              src={horario}
              alt={t("alt.horarioGeotrans")}
              style={{ height: 14, width: 14, filter: "brightness(0) invert(1)", opacity: 0.7 }}
            />
            <span style={infoTextStyle}>
              {t("headertop.dias")} | {t("headertop.horas")}
            </span>
          </Col>

          <Col
            xs={12}
            md={7}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <div className="d-flex gap-3 align-items-center">
              <ContactItems
                href={t("datosgeotrans.emailContact")}
                icon={email}
                alt={t("alt.correoGeotrans")}
                label={t("datosgeotrans.email")}
              />
              <ContactItems
                href={t("datosgeotrans.telefonoContact")}
                icon={telefono}
                alt={t("alt.telefonoGeotrans")}
                label={t("datosgeotrans.telefono")}
              />
              <ContactItems
                href={t("datosgeotrans.facebookContact")}
                icon={masredes}
                alt={t("alt.redSocialGeotrans")}
                label={t("datosgeotrans.social")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const infoTextStyle = {
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1.1rem",
  fontFamily: "Montserrat",
  marginLeft: "6px",
  whiteSpace: "nowrap",
};

export default HeaderInfo;
