import React from "react"
import styled from "styled-components"

// const BtnPrimario = styled.button`
//   background: #f6f6f6;
//   border: 4px solid #ff6e40;
//   border-radius: 0px;
//   box-shadow: 1px 1px #444444;
//   padding: 20px 45px;
//   color: #29434e;
//   display: inline-block;
//   font: normal bold 26px/1 "Lato", sans-serif;
//   text-align: center;
//   text-shadow: 1px 1px #000000;
//   &:hover {
//     background: #ff6e40;
//     color: #ffffff;
//   }
// `

export const BtnPrimario = styled.button`
  width: 100%;
  background: #ff6e40;
  border: 4px solid #f6f6f6;
  border-radius: 0px;
  box-shadow: 1px 1px #444444;
  padding: 15px 45px;
  color: #ffffff;
  display: inline-block;
  font: normal bold 2.4rem/1 "Montserrat", sans-serif;
  letter-spacing: 3px;
  text-align: center;
  line-height: 2.4rem;
  text-shadow: -1px 1px #001b27;
  transition: 0.4s;
  a {
    color: #f6f6f6;
    text-decoration: none !important;
  }
  &:hover {
    background: #fafafa;
    color: #ff6e40;
    border: 4px solid #ff6e40;

    opacity: 1;

    a {
      color: #ff6e40;
      text-decoration: none !important;
    }
  }
`
export const BtnSecundario = styled.button`
  width: 100%;
  background: #ffa06d;
  border: 4px solid #f6f6f6;
  border-radius: 0px;
  box-shadow: 1px 1px #444444;
  padding: 15px 45px;
  color: #ffffff;
  display: inline-block;
  font: normal bold 2.4rem/1 "Montserrat", sans-serif;
  letter-spacing: 3px;
  text-align: center;
  line-height: 2.4rem;
  text-shadow: -1px 1px #001b27;
  transition: 0.4s;
  a {
    color: #f6f6f6;
    text-decoration: none !important;
  }
  &:hover {
    background: #fafafa;
    color: #ffa06d;
    border: 4px solid #ffa06d;

    opacity: 1;

    a {
      color: #ffa06d;
      text-decoration: none !important;
    }
  }
`

export const BtnTerciario = styled.button`
  width: 100%;
  background: #27424f;
  border: 4px solid #f6f6f6;
  border-radius: 0px;
  box-shadow: 1px 1px #444444;
  padding: 15px 45px;
  color: #ffffff;
  display: inline-block;
  font: normal bold 2.4rem/1 "Montserrat", sans-serif;
  letter-spacing: 3px;
  text-align: center;
  line-height: 2.4rem;
  text-shadow: -1px 1px #001b27;
  transition: 0.4s;
  a {
    color: #f6f6f6;
    text-decoration: none !important;
  }
  &:hover {
    background: #fafafa;
    color: #27424f;
    border: 4px solid #27424f;

    opacity: 1;

    a {
      color: #27424f;
      text-decoration: none !important;
    }
  }
`

export const BtnFiltro = styled.button`
  background: #f8f8ff;
  border: 0px;
  border-radius: 9px;

  padding: 5px;

  letter-spacing: 3px;
  text-align: center;
  line-height: 2rem;
  text-shadow: -1px 1px #001b27;
  transition: 0.4s;
  a {
    color: #f6f6f6;
    text-decoration: none !important;
  }
  &:hover {
    background: #29434e;
    color: #27424f;

    opacity: 1;

    a {
      color: #27424f;
      text-decoration: none !important;
    }
  }
`

export default BtnPrimario
