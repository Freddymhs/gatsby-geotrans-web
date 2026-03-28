import React from "react";
import Slider from "react-styled-carousel";
import styled from "styled-components";

import bitmux from "@images/empresas/BITUMIX.svg";
import cfv from "@images/empresas/CFV.svg";
import conpax from "@images/empresas/CONPAX.svg";
import kmass from "@images/empresas/KmasS.svg";
import quiborax from "@images/empresas/QUIBORAX.svg";
import sanfelipe from "@images/empresas/SAN FELIPE.svg";
import vecchiola from "@images/empresas/VECCHIOLA.svg";

export const CompaniesSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  h3 {
    color: #001b27;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

export const SliderCarousel = () => (
  <Slider
    className="w-100 px-0 mx-0"
    showArrows={false}
    showDots={true}
    infinite={true}
    cardsToShow={1}
    autoSlide={2700}
    pauseOnMouseOver={false}
  >
    <img src={bitmux} className="img-fluid" alt="Empresa BITUMIX" />
    <img src={cfv} className="img-fluid" alt="Empresa CFV" />
    <img src={conpax} className="img-fluid" alt="Empresa COMPAX" />
    <img src={kmass} className="img-fluid" alt="Empresa K+S" />
    <img src={quiborax} className="img-fluid" alt="Empresa QUIBORAX" />
    <img src={sanfelipe} className="img-fluid" alt="Empresa SAN FELIPE" />
    <img src={vecchiola} className="img-fluid" alt="Empresa VECCHIOLA" />
  </Slider>
);
