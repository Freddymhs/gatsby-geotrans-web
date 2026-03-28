import React from "react";
import Slider from "react-styled-carousel";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import bitmux from "@images/empresas/BITUMIX.svg";
import cfv from "@images/empresas/CFV.svg";
import conpax from "@images/empresas/CONPAX.svg";
import kmass from "@images/empresas/KmasS.svg";
import quiborax from "@images/empresas/QUIBORAX.svg";
import sanfelipe from "@images/empresas/SAN FELIPE.svg";
import vecchiola from "@images/empresas/VECCHIOLA.svg";

const COMPANIES = [
  { src: bitmux, name: "BITUMIX" },
  { src: cfv, name: "CFV" },
  { src: conpax, name: "CONPAX" },
  { src: kmass, name: "K+S" },
  { src: quiborax, name: "QUIBORAX" },
  { src: sanfelipe, name: "SAN FELIPE" },
  { src: vecchiola, name: "VECCHIOLA" },
];

export const CompaniesSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--background-dark);
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

export const SliderCarousel = () => {
  const { t } = useTranslation();

  return (
    <Slider
      className="w-100 px-0 mx-0"
      showArrows={false}
      showDots={true}
      infinite={true}
      cardsToShow={1}
      autoSlide={2700}
      pauseOnMouseOver={false}
    >
      {COMPANIES.map((company) => (
        <img
          key={company.name}
          src={company.src}
          className="img-fluid"
          alt={`${t("alt.company")} ${company.name}`}
        />
      ))}
    </Slider>
  );
};
