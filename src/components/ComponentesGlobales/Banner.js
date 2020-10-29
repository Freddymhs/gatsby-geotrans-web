import React from "react"
import ReactDOM from "react-dom"
import Slider from "react-styled-carousel"
import styled from "styled-components"

import bitmux from "../../images/empresas/BITUMIX.svg"
import cfv from "../../images/empresas/CFV.svg"
import conpax from "../../images/empresas/CONPAX.svg"
import kmass from "../../images/empresas/KmasS.svg"
import quiborax from "../../images/empresas/QUIBORAX.svg"
import sanfelipe from "../../images/empresas/SAN FELIPE.svg"
import vecchiola from "../../images/empresas/VECCHIOLA.svg"

export const BtnPrimario = styled.button`
  color: red;
`

export const SliderCarousel = () => {
  return (
    <Slider
      className=" w-100 px-0 mx-0"
      // className="d-flex align-items-end justify-content-around"
      //   reponsive={{ breakPoint: 1280, cardsToShow: 1 }}

      showArrows={false}
      showDots={true}
      infinite={true}
      cardsToShow={1}
      autoSlide={2700}
      pauseOnMouseOver={false}
    >
      <img src={bitmux} class="img-fluid  " alt="Empresa BITUMIX" />
      <img src={cfv} class="img-fluid  " alt="Empresa CFV" />
      <img src={conpax} class="img-fluid  " alt="Empresa COMPAX" />
      <img src={kmass} class="img-fluid  " alt="Empresa K+S" />
      <img src={quiborax} class="img-fluid  " alt="Empresa QUIBORAX" />
      <img src={sanfelipe} class="img-fluid  " alt="Empresa SAN FELIPE" />
      <img src={vecchiola} class="img-fluid  " alt="Empresa  VECCHIOLA" />
    </Slider>
  )
}

export default SliderCarousel
