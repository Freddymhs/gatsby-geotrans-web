import React from "react";
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
import {
  CompaniesSection,
  SliderCarousel,
} from "@/componentsv2/contactpage/CompaniesSlider";
import SectionVideo from "@/componentsv2/contactpage/SectionVideo";

const Contacto = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
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

export const Head = () => (
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
);

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
