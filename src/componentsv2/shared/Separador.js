import React from "react";
import styled from "styled-components";

export const Separador = styled.div`
  height: 6rem;
  width: 100%;

  @media (min-width: 768px) {
    height: 8rem;
  }
`;
export const SeparadorGrande = styled.div`
  height: 8rem;
  width: 100%;

  @media (min-width: 768px) {
    height: 12rem;
  }
`;

export default Separador;
