import React from "react"
import styled from "styled-components"

//contenido web
export const TituloDePagina = styled.h1`
  font-size: 3.9rem;
  font-family: Montserrat, sans-serif;
  text-transform: capitalize;
  font-style: normal;
  letter-spacing: 0.3rem;
  font-weight: 600;
  color: #ff6e40;
  text-shadow: 1px 0px 1px #f8f8ff, 0px 1px 1px #ccc, 2px 1px 1px #f8f8ff,
    1px 2px 1px #ccc, 3px 2px 1px #f8f8ff, 2px 3px 1px #ccc, 4px 3px 1px #f8f8ff,
    3px 4px 1px #ccc, 5px 4px 1px #f8f8ff, 4px 5px 1px #ccc, 6px 5px 1px #f8f8ff,
    5px 6px 1px #ccc, 7px 6px 1px #f8f8ff;
`
export const SubtituloSimple = styled.h2`
  font-size: 1.4rem;
  font-family: Montserrat, sans-serif;
  color: black;
  letter-spacing: 1px;
`
export const SubtituloSimpleALT = styled.h2`
  font-size: 1.4rem;
  font-family: Montserrat, sans-serif;
  color: white;
  letter-spacing: 1px;
`
export const PresentacionPagina = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: Montserrat;
  letter-spacing: 1px;
  line-height: 3.1rem;
  margin-bottom: 6rem;
  color: #27424f;
`
export const TextoEncuadrado = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 2.6rem;
  font-family: Lato;
  letter-spacing: 5px;
  line-height: 3.5rem;
  color: #c53d13;
`
export const ParrafoBlack = styled.p`
  font-family: Lato;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 2.1rem;
  color: #27424f;
  text-decoration: underline;
  /* text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
  font-family: latoBold;
  letter-spacing: 3px;
  line-height: 3.1rem;
  border-radius: 20px 20px 20px 20px; */
`
export const ParrafoMenu = styled.p`
  color: #27424f !important;
  font-size: 2.13rem !important;
  line-height: 1.88rem;
  font-weight: 700 !important;
  font-family: Lato;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  :hover {
    color: #fafafa !important;
  }
`
export const ParrafoListados = styled.p`
  color: #27424f !important;
  font-size: 1.74rem !important;
  line-height: 1.74rem;
  font-weight: 500 !important;
  font-family: Montserrat !important;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
`
export const ParrafoMiniListado = styled.p`
  color: #27424f !important;
  font-size: 1.33rem !important;
  line-height: 1.33rem;
  font-weight: 500 !important;
  font-family: Montserrat !important;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
`
export const SmallTextoTOp = styled.p`
  color: #27424f !important;
  font-size: 1.2rem !important;
  line-height: 1.2rem;
  font-weight: 400 !important;
  font-family: Montserrat !important;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  white-space: nowrap;
`

export const ParrafoColor = styled.p`
  font-family: Lato;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 2.1rem;
  color: #001b27;
  /* text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
  font-family: latoBold;
  letter-spacing: 3px;
  line-height: 3.1rem;
  border-radius: 20px 20px 20px 20px; */
`
export const ParraColorfobold = styled.p`
  color: #ff6e40;
  font-size: 3rem;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 3.5rem;
  letter-spacing: 4px;
`
export const PalabraDestacadaColor = styled.p`
  font-family: Lato;
  font-weight: 700;
  line-height: 4.6rem;
  letter-spacing: 1px;
  color: #ff6e40;
  font-size: 3.4rem;
`
export const PalabraDestacadaBlack = styled.p`
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: 1px;

  font-size: 2.4rem;

  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 3px;
  color: #27424f;
`
export const Medallones = styled.p`
  color: #ffa06d;
  font-size: 2.9rem;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 4rem;
`

//texto de portada montserrat
export const TextoGrande = styled.span`
  user-select: none;
  font-size: 2.8rem;
  line-height: 0px;
  font-family: Montserrat;
  font-weight: bold;
  color: #f5f5f5;
`
export const TextoGrandeBold = styled.span`
  user-select: none;
  color: #fafafa;
  font-family: Montserrat;
  color: white;
  font-size: 4rem;
  line-height: 0px;
  font-weight: bold;
`
export const TextoGrandeBoldColor = styled.span`
  user-select: none;
  color: #ff6e40;
  white-space: nowrap;
  font-size: 4.4rem;
  line-height: 4.4rem;
  font-family: Montserrat;
  font-weight: bold;
`

// HEADER texto
export const Titulowebv1 = styled.span`
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 4.71rem;
  line-height: 4.71rem;
  font-family: Blader;
  letter-spacing: 0.3rem;
  color: #ff6e40;
  font-weight: 100;
`
export const Subtitulowebv1 = styled.span`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 0px;
  color: #001b27;
`
export const TextMenu = styled.span`
  /* // 27424F 526D7B 001B27 FF6E40 FFA06D C53D13 */
  /* color: #29434f !important; */
  color: #27424f !important;
  font-size: 2.13rem !important;
  font-weight: 700 !important;
  font-family: Montserrat;
  letter-spacing: 1px;
`
export const TextLanguage = styled.span`
  color: #526d7b !important;
  font-size: 1.4rem !important;
  font-weight: 800 !important;
  font-family: Montserrat;
  letter-spacing: 2px;
`

// Parallax  del FOOTER
export const TItulofooter = styled.span`
  line-height: 6.6rem;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 6.6rem;
  font-family: Blader;
  letter-spacing: 0.3rem;
  color: #f8f8ff;
  font-weight: 100;
`
export const SubtitloFooter = styled.span`
  line-height: 0rem;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 2.26rem;
  font-family: Montserrat;
  color: #f8f8ff;
  font-weight: 500;
`
export const Subtitulofooter2 = styled.h2`
  line-height: 1.6rem;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 1.6rem;
  font-family: Montserrat;
  color: #f8f8ff;
  text-transform: uppercase;
`

export default TituloDePagina
