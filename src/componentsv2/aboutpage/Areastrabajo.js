import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";

import areaA from "@images/dibujossvg/areaA.svg";
import areaB from "@images/dibujossvg/areaB.svg";
import styled from "styled-components";

import { PalabraDestacadaBlack } from "../shared/Texts";

const NuestrasAreas = () => {
  const { t } = useTranslation(); // necesario

  return (
    <Styles>
      <Container>
        <Row>
          <div
            className="card-body imgtipobtns2 text-center
            col-12 col-sm-6 
            col-lg-3 offset-lg-1
            pb-lg-5
            
            "
          >
            <PalabraDestacadaBlack>{t("Empresa.text4")}</PalabraDestacadaBlack>
          </div>

          <div
            className="card-body imgtipobtns1 text-center
             col-12 col-sm-6 
             col-lg-4 offset-lg-3
             mt-lg-5  
 
             
            "
          >
            <PalabraDestacadaBlack>{t("Empresa.text5")}</PalabraDestacadaBlack>
          </div>
          <div
            className="card-body imgtipobtns1 text-center
             col-12 col-sm-6 
             col-lg-3 offset-lg-4
             mt-lg-5
            "
          >
            <PalabraDestacadaBlack>{t("Empresa.text6")}</PalabraDestacadaBlack>
          </div>
          <div className="col-5  d-none d-lg-block"> &nbsp;</div>
          <div
            className="card-body imgtipobtns2 text-center
            offset-lg-0 col-12 col-sm-6 
            mt-lg-5
            "
          >
            <PalabraDestacadaBlack>{t("Empresa.text7")}</PalabraDestacadaBlack>
          </div>
          <div
            className="card-body imgtipobtns2 text-center
             col-12 col-sm-6 
             col-lg-3 offset-lg-2
             
            "
          >
            <PalabraDestacadaBlack>{t("Empresa.text8")}</PalabraDestacadaBlack>
          </div>
        </Row>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  width: 100%;
  height: 100%;
  
  .imgtipobtns1 {
    background: url(${areaA});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 6rem !important;
    font-size: 2rem;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 1px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  .imgtipobtns2 {
    background: url(${areaB});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 6rem !important;
    font-size: 2rem;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 1px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }`;

export default NuestrasAreas;
