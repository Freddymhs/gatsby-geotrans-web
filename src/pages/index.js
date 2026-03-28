import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../componentsv2/layout/layout";
import Maquinarias from "../componentsv2/homepage/maquinarias";
import Portada from "../componentsv2/homepage/portada";
import { Seo } from "@/componentsv2/shared/Seo";

const IndexPage = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const imgOptimizedTrucks = nodes;

  return (
    <Layout>
      <Container fluid className="p-0 m-0 ">
        <Portada />
      </Container>
      <Container>
        <Maquinarias imgOptimizedTrucks={imgOptimizedTrucks} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Inicio"
    description="Expertos en arriendo de maquinarias y servicios de construcción en Arica. Contáctanos para tus proyectos."
    keywords={[
      "arriendo",
      "excavación",
      "JCB",
      "retroexcavadora",
      "construcción",
      "maquinarias",
      "Geotrans",
      "Arica",
    ]}
    image="/favicon-32x32.png"
  />
);
export const query = graphql`
  query IndexPageQuery($language: String!) {
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
