import React from "react";
import styled from "styled-components";

// =============================================================================
// COLORES PRINCIPALES
// =============================================================================
const COLORS = {
  primary: "#ff6e40",
  primaryLight: "#ffa06d",
  primaryDark: "#c53d13",
  dark: "#27424f",
  darkBlue: "#001b27",
  gray: "#526d7b",
  white: "#fafafa",
  ghostWhite: "#f8f8ff",
  lightGray: "#ccc",
};

// =============================================================================
// MIXINS COMUNES
// =============================================================================
const letterSpacingMixin = (spacing = "1px") => `
  -webkit-letter-spacing: ${spacing};
  -moz-letter-spacing: ${spacing};
  -ms-letter-spacing: ${spacing};
  letter-spacing: ${spacing};
`;

const textShadowComplex = `
  text-shadow: 1px 0px 1px ${COLORS.ghostWhite}, 0px 1px 1px ${COLORS.lightGray}, 
    2px 1px 1px ${COLORS.ghostWhite}, 1px 2px 1px ${COLORS.lightGray}, 
    3px 2px 1px ${COLORS.ghostWhite}, 2px 3px 1px ${COLORS.lightGray}, 
    4px 3px 1px ${COLORS.ghostWhite}, 3px 4px 1px ${COLORS.lightGray}, 
    5px 4px 1px ${COLORS.ghostWhite}, 4px 5px 1px ${COLORS.lightGray}, 
    6px 5px 1px ${COLORS.ghostWhite}, 5px 6px 1px ${COLORS.lightGray}, 
    7px 6px 1px ${COLORS.ghostWhite};
`;

// =============================================================================
// TÍTULOS PRINCIPALES
// =============================================================================
export const TituloDePagina = styled.h1`
  font-size: 3.9rem;
  font-family: Montserrat;
  text-transform: capitalize;
  font-weight: 600;
  color: ${COLORS.primary};
  ${letterSpacingMixin("0.3rem")}
  ${textShadowComplex}
`;

export const PresentacionPagina = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: Montserrat;
  line-height: 3.1rem;
  margin-bottom: 6rem;
  color: ${COLORS.dark};
  ${letterSpacingMixin()}
`;

// =============================================================================
// SUBTÍTULOS
// =============================================================================
const SubtituloBase = styled.h2`
  font-size: 1.4rem;
  font-family: Montserrat;
  ${letterSpacingMixin()}
`;

export const SubtituloSimple = styled(SubtituloBase)`
  color: black;
`;

export const SubtituloSimpleALT = styled(SubtituloBase)`
  color: white;
`;

// =============================================================================
// PÁRRAFOS PRINCIPALES
// =============================================================================
const ParrafoBase = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  line-height: 2.2rem;
  font-size: 2.1rem;
  ${letterSpacingMixin()}
`;

export const ParrafoBlack = styled(ParrafoBase)`
  color: ${COLORS.dark};
  text-decoration: underline;
`;

export const ParrafoColor = styled(ParrafoBase)`
  font-weight: 500;
  color: ${COLORS.darkBlue};
`;

// =============================================================================
// PÁRRAFOS ESPECIALIZADOS
// =============================================================================
export const TextoEncuadrado = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  font-family: Montserrat;
  line-height: 3.5rem;
  color: ${COLORS.primaryDark};
  ${letterSpacingMixin("5px")}
`;

export const ParrafoMenu = styled.p`
  color: ${COLORS.dark} !important;
  font-size: 2.13rem !important;
  line-height: 1.88rem;
  font-weight: 700 !important;
  font-family: Montserrat;
  ${letterSpacingMixin()}

  :hover {
    color: ${COLORS.white} !important;
  }
`;

// =============================================================================
// PÁRRAFOS DE LISTADOS (TAMAÑOS DIFERENTES)
// =============================================================================
const ListadoBase = styled.p`
  color: ${COLORS.dark} !important;
  font-weight: 500 !important;
  font-family: Montserrat;
  ${letterSpacingMixin()}
`;

export const ParrafoListados = styled(ListadoBase)`
  font-size: 1.74rem !important;
  line-height: 1.74rem;
`;

export const ParrafoMiniListado = styled(ListadoBase)`
  font-size: 1.33rem !important;
  line-height: 1.33rem;
`;

export const SmallTextoTOp = styled(ListadoBase)`
  font-size: 1.2rem !important;
  line-height: 1.2rem;
  font-weight: 400 !important;
  white-space: nowrap;
`;

// =============================================================================
// TEXTO DESTACADO
// =============================================================================
export const ParraColorfobold = styled.p`
  color: ${COLORS.primary};
  font-size: 3rem;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 3.5rem;
  ${letterSpacingMixin("4px")}
`;

export const PalabraDestacadaColor = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  line-height: 4.6rem;
  color: ${COLORS.primary};
  font-size: 3.4rem;
  ${letterSpacingMixin()}
`;

export const PalabraDestacadaBlack = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  line-height: 4.6rem;
  font-size: 2.4rem;
  color: ${COLORS.dark};
  ${letterSpacingMixin("3px")}
`;

export const Medallones = styled.p`
  color: ${COLORS.primaryLight};
  font-size: 2.9rem;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 4rem;
`;

// =============================================================================
// TEXTO DE PORTADA
// =============================================================================
const TextoPortadaBase = styled.span`
  user-select: none;
  font-family: Montserrat;
  font-weight: bold;
  line-height: 0px;
`;

export const TextoGrande = styled(TextoPortadaBase)`
  font-size: 2.8rem;
  color: #f5f5f5;
`;

export const TextoGrandeBold = styled(TextoPortadaBase)`
  font-size: 4rem;
  color: ${COLORS.white};
`;

export const TextoGrandeBoldColor = styled(TextoPortadaBase)`
  color: ${COLORS.primary};
  font-size: 4.4rem;
  line-height: 4.4rem;
  white-space: nowrap;
`;

// =============================================================================
// HEADER
// =============================================================================
export const Titulowebv1 = styled.span`
  margin: 0;
  padding: 0;
  font-size: 4.71rem;
  line-height: 4.71rem;
  font-family: Blader;
  font-weight: 100;
  color: ${COLORS.primary};
  ${letterSpacingMixin("0.3rem")}
`;

export const Subtitulowebv1 = styled.span`
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 0px;
  color: ${COLORS.darkBlue};
`;

export const TextMenu = styled.span`
  color: ${COLORS.dark} !important;
  font-size: 2.13rem !important;
  font-weight: 700 !important;
  font-family: Montserrat-Bold;
  ${letterSpacingMixin()}
`;

export const TextLanguage = styled.span`
  color: ${COLORS.gray} !important;
`;

// =============================================================================
// FOOTER
// =============================================================================
const FooterTextBase = styled.span`
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  color: ${COLORS.ghostWhite};
`;

export const TItulofooter = styled(FooterTextBase)`
  font-size: 6.6rem;
  line-height: 6.6rem;
  font-family: Blader;
  font-weight: 100;
  ${letterSpacingMixin("0.3rem")}
`;

export const SubtitloFooter = styled(FooterTextBase)`
  font-size: 2.26rem;
  line-height: 0rem;
  font-weight: 500;
`;

export const Subtitulofooter2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-family: Montserrat;
  color: ${COLORS.ghostWhite};
  text-transform: uppercase;
`;

export default TituloDePagina;
