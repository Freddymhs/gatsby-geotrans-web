import React from "react";
import { graphql } from "gatsby";
import { Container, Nav } from "react-bootstrap";
import Layout from "../componentsv2/layout/layout";
import Maquinarias from "../componentsv2/homepage/maquinarias";
import Portada from "../componentsv2/homepage/portada";
import SEO from "@/componentsv2/shared/seo";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

const IndexPage = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const { t } = useTranslation();
  const imgOptimizedTrucks = nodes;
  return (
    <Layout>
      <SEO
        title="Geotrans Arica"
        description="Expertos en arriendo de maquinarias y servicios de construcción en Arica. Contáctanos para tus proyectos."
        url="/"
        keywords={[
          "construcción",
          "arriendo",
          "maquinarias",
          "Geotrans",
          "Arica",
        ]}
      />
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
