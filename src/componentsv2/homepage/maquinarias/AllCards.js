import React from "react";

import { useState, useCallback, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

const AllCards = ({ ListaMaquinarias }) => {
  const allMachinery = useMemo(() => {
    const categories = [
      { items: ListaMaquinarias.geoAljibe, prefix: "aljibe" },
      { items: ListaMaquinarias.geoBatea, prefix: "batea" },
      { items: ListaMaquinarias.geoPluma, prefix: "pluma" },
      { items: ListaMaquinarias.geoRetros, prefix: "retros" },
      { items: ListaMaquinarias.geoTolvas, prefix: "tolvas" },
      { items: ListaMaquinarias.geoPorter, prefix: "porter" },
    ];

    return categories.flatMap(({ items, prefix }) =>
      items.map((item, index) => ({
        ...item,
        key: `${prefix}-${index}`,
      }))
    );
  }, [ListaMaquinarias]);

  return (
    <Row className="g-3 g-md-4">
      {allMachinery.map((elemento) => (
        <FlipCard key={elemento.key} unobjeto={elemento} />
      ))}
    </Row>
  );
};

export default AllCards;

const FlipCard = ({ unobjeto }) => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    setIsFlipped(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsFlipped(false);
  }, []);

  return (
    <Col sm={12} lg={6} xl={6} xxl={4}>
      <div
        onTouchStart={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <div
          className="flip-card-inner"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3", // mantiene proporción
            transformStyle: "preserve-3d",
            transition:
              "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            borderRadius: "12px",
            boxShadow: isHovering
              ? "0 20px 40px rgba(0, 0, 0, 0.3)"
              : "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* FRENTE DE LA CARD */}
          <div
            className="flip-card-front"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              backgroundColor: "#FF6E40",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Título con efecto glassmorphism */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                zIndex: 10,
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "15px 20px",
                transform: isHovering ? "translateY(-5px)" : "translateY(0)",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
                  fontWeight: "700",
                  color: "#001B27",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {unobjeto.nombre}
              </h3>
            </div>

            {/* Imagen principal */}
            <div style={{ flex: 1, position: "relative" }}>
              <Img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  filter: isHovering
                    ? "brightness(1.1) contrast(1.1)"
                    : "brightness(1)",
                  transition: "filter 0.3s ease",
                }}
                fluid={unobjeto.media}
                alt={unobjeto.nombre}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60px",
                  background:
                    "linear-gradient(transparent, rgba(0, 27, 39, 0.8))",
                }}
              />
            </div>

            {/* Indicador de flip con colores naranjas */}
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                background: "linear-gradient(135deg, #FFA06D, #FF6E40)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#001B27",
                transform: isHovering
                  ? "rotate(180deg) scale(1.1)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              ↻
            </div>
          </div>

          {/* PARTE TRASERA REIMAGINADA COMPLETAMENTE */}
          <div
            className="flip-card-back"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Imagen de fondo de toda la card */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.4) contrast(1.1)",
                }}
                fluid={unobjeto.media}
                alt={unobjeto.nombre}
              />
            </div>

            {/* Overlay principal */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, rgba(0, 27, 39, 0.85) 0%, rgba(255, 160, 109, 0.75) 100%)",
                zIndex: 2,
              }}
            />

            {/* Contenido principal */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                maxWidth: "100%", // que ocupe todo el ancho posible
                minWidth: "280px",
                width: "100%", // que tome todo el ancho del contenedor padre
                boxSizing: "border-box",
                gap: "20px", // espacio uniforme entre secciones
                overflow: "hidden", // evitar scroll innecesario
                maxHeight: "600px", // límite alto para controlar overflow general
              }}
            >
              {/* Header con título */}
              <div
                style={{
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "8px",
                  padding: "12px 10px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#FFA06D",
                    margin: 0,
                    textTransform: "uppercase",
                    wordBreak: "break-word", // para evitar corte raro del texto
                  }}
                >
                  {unobjeto.nombre}
                </h2>
              </div>

              {/* Áreas de aplicación */}
              <div>
                <h5
                  style={{
                    color: "#FFA06D",
                    marginBottom: "10px",
                    fontSize: "1.1rem",
                  }}
                >
                  Áreas:
                </h5>
                <div
                  className="d-flex flex-wrap gap-2"
                  style={{ rowGap: "8px", columnGap: "8px" }}
                >
                  {unobjeto.areas.map((area, index) => (
                    <span
                      key={index}
                      style={{
                        background: "rgba(255, 160, 109, 0.9)",
                        color: "#001B27",
                        padding: "5px 10px",
                        borderRadius: "12px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Servicios en grid compacto */}
              <div
                style={{
                  flex: 1,
                  minHeight: "150px",
                  maxHeight: "220px",
                  overflowY: "auto",
                }}
              >
                <h5
                  style={{
                    color: "#FFA06D",
                    marginBottom: "12px",
                    fontSize: "1.1rem",
                  }}
                >
                  {t("Maquinarias.someservices")}:
                </h5>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(140px, 1fr))", // mínimo más ancho para texto
                    gap: "10px",
                  }}
                >
                  {unobjeto.servicio.map((servicio, index) => (
                    <p
                      key={index}
                      // to="/services/"
                      className="text-decoration-none"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(5px)",
                          color: "#fff",
                          padding: "10px 14px",
                          borderRadius: "6px",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          textAlign: "left",
                          cursor: "pointer",
                          border: "1px solid rgba(255, 160, 109, 0.3)",
                          transition: "all 0.2s ease",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 160, 109, 0.3)";
                          e.currentTarget.style.transform = "translateX(3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.15)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        • {servicio}
                      </div>
                    </p>
                  ))}
                </div>
              </div>

              {/* Descripción compacta */}
              {/* <div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "1.4",
                    color: "#e0e0e0",
                    background: "rgba(0, 0, 0, 0.3)",
                    padding: "10px",
                    borderRadius: "6px",
                    maxHeight: "80px",
                    overflowY: "auto",
                    whiteSpace: "normal",
                  }}
                >
                  {unobjeto.descripccion.join(" ")}
                </div>
              </div> */}

              {/* Botón de acción */}
              {/* <div>
                <Link
                  // to="/services/"
                  className="text-decoration-none"
                  style={{ display: "inline-block", width: "100%" }}
                >
                  <BtnPrimario
                    style={{
                      background: "linear-gradient(45deg, #FFA06D, #FF6E40)",
                      border: "none",
                      borderRadius: "20px",
                      padding: "12px 30px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#001B27",
                      boxShadow: "0 4px 15px rgba(255, 160, 109, 0.4)",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      minWidth: "180px",
                      maxWidth: "100%",
                      textAlign: "center",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    {t("Maquinarias.more")} →
                  </BtnPrimario>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
