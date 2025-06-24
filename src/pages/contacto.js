import React from "react";
import Slider from "react-styled-carousel";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../componentsv2/layout/layout";
import { Seo } from "@/componentsv2/shared/Seo";
import { useTranslation } from "react-i18next";
import Separador from "@/componentsv2/shared/Separador";
import TituloM from "@/old-componentss/ComponentesSecciones/PageContactus/Titulo";
import { Card, Col, Row } from "react-bootstrap/esm";
import ContactForm from "@/componentsv2/contactpage/contactForm";
import Destacado from "@/componentsv2/shared/Destacado";
import styled from "styled-components";
// Importaciones de imágenes
import bitmux from "@images/empresas/BITUMIX.svg";
import cfv from "@images/empresas/CFV.svg";
import conpax from "@images/empresas/CONPAX.svg";
import kmass from "@images/empresas/KmasS.svg";
import quiborax from "@images/empresas/QUIBORAX.svg";
import sanfelipe from "@images/empresas/SAN FELIPE.svg";
import vecchiola from "@images/empresas/VECCHIOLA.svg";
import SectionVideo from "@/componentsv2/contactpage/SectionVideo";

// Sección de empresas más elegante
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

export const SliderCarousel = () => {
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
      <img src={bitmux} className="img-fluid" alt="Empresa BITUMIX" />
      <img src={cfv} className="img-fluid" alt="Empresa CFV" />
      <img src={conpax} className="img-fluid" alt="Empresa COMPAX" />
      <img src={kmass} className="img-fluid" alt="Empresa K+S" />
      <img src={quiborax} className="img-fluid" alt="Empresa QUIBORAX" />
      <img src={sanfelipe} className="img-fluid" alt="Empresa SAN FELIPE" />
      <img src={vecchiola} className="img-fluid" alt="Empresa VECCHIOLA" />
    </Slider>
  );
};

const Contacto = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title="Contacto"
        description="¿Necesitas maquinaria o servicios de movimiento de tierra en Arica? Contáctanos hoy mismo y solicita tu cotización sin compromiso."
        keywords={[
          "contacto",
          "Geotrans",
          "maquinaria",
          "cotización",
          "excavadora",
          "retroexcavadora",
          "Arica",
        ]}
      />

      <Separador />

      <TituloM />
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12} className="mb-4 d-flex align-items-stretch">
            <div className="w-100">
              <ContactForm />
            </div>
          </Col>

          <Col lg={5} md={12}>
            <div className="mb-4">
              <Card className="bg-transparent border-0">
                <Destacado />
              </Card>
            </div>

            <CompaniesSection>
              <h3>{t("Contacto.trustedCompany")}</h3>
              <SliderCarousel />
            </CompaniesSection>
          </Col>
        </Row>
      </Container>

      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>

      {/* Aquí usamos el nuevo componente SectionVideo */}
      <SectionVideo
        title={t("Contacto.workTogether")}
        subtitle={t("Contacto.transform")}
      />
      <div style={{ width: "100%", height: "21vh" }} className="d-block">
        &nbsp;
      </div>
    </Layout>
  );
};

export default Contacto;

export const query = graphql`
  query ContacqtPageQuery($language: String!) {
    allFile(filter: { relativeDirectory: { eq: "MaquinariasYTransportes" } }) {
      nodes {
        name
        relativePath
        childImageSharp {
          fluid(
            maxWidth: 1920
            maxHeight: 1080
            quality: 90
            fit: INSIDE
            cropFocus: ENTROPY
          ) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }

    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
