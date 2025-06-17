import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";

import horario from "@images/iconos/intop/029-clock.svg";
import telefono from "@images/iconos/intop/001-telephone.svg";
import email from "@images/iconos/intop/004-email.svg";
import masredes from "@images/iconos/intop/040-network.svg";

import { SmallTextoTOp } from "../../../componentsv2/shared/Texts";
import ContactItems from "./ContactItems";

const HeaderInfo = () => {
  const { t } = useTranslation();

  return (
    <Container fluid>
      <div className="bg-light py-2">
        <Container fluid>
          <Row className="align-items-center">
            {/* Horario */}
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center mb-2 mb-md-0"
            >
              <img
                src={horario}
                alt="horario geotrans"
                style={{ height: 21, width: 21 }}
              />
              <div className="ms-2">
                <SmallTextoTOp className="mb-0">
                  {t("headertop.dias")}
                </SmallTextoTOp>
                <SmallTextoTOp
                  className="mb-0"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {t("headertop.horas")}
                </SmallTextoTOp>
              </div>
            </Col>

            {/* Contactos */}
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center justify-content-md-end"
            >
              <div className="d-flex flex-wrap gap-3">
                <ContactItems
                  href={t("datosgeotrans.emailContact")}
                  icon={email}
                  alt="correo geotrans"
                  label={t("datosgeotrans.email")}
                />
                <ContactItems
                  href={t("datosgeotrans.telefonoContact")}
                  icon={telefono}
                  alt="teléfono geotrans"
                  label={t("datosgeotrans.telefono")}
                />
                <ContactItems
                  href={t("datosgeotrans.facebookContact")}
                  icon={masredes}
                  alt="red social geotrans"
                  label={t("datosgeotrans.social")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default HeaderInfo;
