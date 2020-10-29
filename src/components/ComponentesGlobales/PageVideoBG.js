import React from "react"
import styled from "styled-components"

export const MiWraperVideo = styled.div`
 
  height: 100%; /* mismo que video */
  min-height: 100%; /* mismo que video */
  width: auto;
  position: relative;
  overflow: hidden;
  /* background-color: #001c26; */
 
  
`

export const KzVideo = styled.video.attrs({
  controlsList: "nodownload",
  muted: "true",
  autoPlay: "true",
  loop: "true",
  controls: "false",
})`
  transition-delay: 2s;
  width: 100px;
  z-index: 1;
  object-position: top right;
  min-width: 100%;
  object-fit: fill;
  background-color: #29434e;
  height: 100%; /* mismo que wraper */
  min-height: 100vh; /* mismo que wraper */
  width: auto;
`

export const AreaContenido = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
`

export const Overlaypersonalizado = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 27, 39, 0.53),
    rgba(0, 27, 39, 0.53)
  );

  z-index: 2;
  height: 100%;
  width: 100%;
`
export const OverlaySecundario = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 110, 64, 0.77),
    rgba(255, 110, 64, 1)
  );
  clip-path: polygon(
    0 100%,
    29% 100%,
    100% 100%,
    100% 39%,
    0 80%,
    0 100%,
    0 100%,
    0 100%
  );
  z-index: 3;
  height: 100%;
  width: 100%;
`

export default MiWraperVideo
