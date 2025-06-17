import React, { useState } from "react";
import styled from "styled-components";
import videox from "@videos/escribiendo.mp4";

// Estilos del video
export const MiWraperVideo = styled.div`
  min-height: 66vh; /* Altura mínima controlada */
  max-height: 66vh; /* Altura mínima controlada */
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    height: 50vh;
    min-height: 400px;
  }
`;

export const KzVideo = styled.video.attrs({
  controlsList: "nodownload nofullscreen noremoteplayback",
  muted: true,
  autoPlay: true,
  loop: true,
  controls: false,
  playsInline: true,
  disablePictureInPicture: true,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-color: #29434e;
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;
  /* Ocultar controles completamente */
  &::-webkit-media-controls {
    display: none !important;
  }

  &::-webkit-media-controls-panel {
    display: none !important;
  }

  &::-webkit-media-controls-play-button {
    display: none !important;
  }

  &::-webkit-media-controls-start-playback-button {
    display: none !important;
  }

  &::-webkit-media-controls-timeline {
    display: none !important;
  }

  &::-webkit-media-controls-current-time-display {
    display: none !important;
  }

  &::-webkit-media-controls-time-remaining-display {
    display: none !important;
  }

  &::-webkit-media-controls-mute-button {
    display: none !important;
  }

  &::-webkit-media-controls-volume-slider {
    display: none !important;
  }

  &::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }

  /* Firefox */
  &::-moz-media-controls {
    display: none !important;
  }

  /* Edge/IE */
  &::-ms-media-controls {
    display: none !important;
  }
`;

export const AreaContenido = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  padding: 1rem;
`;

export const Overlaypersonalizado = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 27, 39, 0.7),
    rgba(0, 27, 39, 0.5)
  );
  z-index: 2;
  height: 100%;
  width: 100%;
`;

export const OverlaySecundario = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    135deg,
    rgba(255, 110, 64, 0.3),
    rgba(255, 110, 64, 0.1)
  );
  z-index: 3;
  height: 100%;
  width: 100%;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Componente del video de fondo
const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <KzVideo
        src={videox}
        onLoadedData={handleVideoLoad}
        onCanPlayThrough={handleVideoLoad}
      />
      {!videoLoaded && (
        <div
          style={{
            backgroundColor: "#29434e",
            zIndex: 1,
          }}
        />
      )}
    </>
  );
};

// Componente principal de la sección de video
const SectionVideo = ({ title = "", subtitle = "" }) => {
  return (
    <MiWraperVideo>
      <VideoBackground />
      <Overlaypersonalizado />
      <OverlaySecundario />
      <AreaContenido>
        <HeroContent>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </HeroContent>
      </AreaContenido>
    </MiWraperVideo>
  );
};

export default SectionVideo;
