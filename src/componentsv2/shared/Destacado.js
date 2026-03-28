import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Container } from "react-bootstrap";

import Nclientes from "@images/iconos/Nclientes.svg";
import Nproyectos from "@images/iconos/Nproyectos.svg";
import Nmaquinarias from "@images/iconos/Nmaquinarias.svg";
import { Medallones } from "./Texts";

const STATS = [
  { value: "+ 19", labelKey: "Contacto.plus1", icon: Nclientes, altKey: "alt.clientesGeotrans" },
  { value: "+ 8", labelKey: "Contacto.plus3", icon: Nmaquinarias, altKey: "alt.maquinariasGeotrans" },
  { value: "+ 45", labelKey: "Contacto.plus2", icon: Nproyectos, altKey: "alt.proyectosGeotrans" },
];

const Destacado = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        {STATS.map((stat) => (
          <Col key={stat.labelKey} xs={12} md={4} className="text-center mb-4">
            <Medallones>{stat.value}</Medallones>
            <Medallones>{t(stat.labelKey)}</Medallones>
            <img className="img-fluid mt-2" alt={t(stat.altKey)} src={stat.icon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destacado;
