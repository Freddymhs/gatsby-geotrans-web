import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";

import areaA from "@images/dibujossvg/areaA.svg";
import areaB from "@images/dibujossvg/areaB.svg";
import styled from "styled-components";

import { PalabraDestacadaBlack } from "../shared/Texts";

const AREAS = [
  { key: "Empresa.text4", bg: "a" },
  { key: "Empresa.text5", bg: "b" },
  { key: "Empresa.text6", bg: "a" },
  { key: "Empresa.text7", bg: "b" },
  { key: "Empresa.text8", bg: "a" },
];

const NuestrasAreas = () => {
  const { t } = useTranslation();

  return (
    <Styles>
      <Container>
        <Row className="justify-content-center g-3 g-md-4">
          {AREAS.map((area) => (
            <Col key={area.key} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
              <div className={`area-card area-card--${area.bg} text-center`}>
                <PalabraDestacadaBlack>{t(area.key)}</PalabraDestacadaBlack>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  width: 100%;

  .area-card {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 5rem 4rem;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    cursor: default;

    &:hover {
      transform: scale(1.05);
    }

    &--a {
      background-image: url(${areaA});
    }

    &--b {
      background-image: url(${areaB});
    }
  }
`;

export default NuestrasAreas;
