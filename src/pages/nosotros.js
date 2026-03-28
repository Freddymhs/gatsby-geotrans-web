import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "@/componentsv2/layout/layout";
import { Seo } from "@/componentsv2/shared/Seo";
import Separador from "@/componentsv2/shared/Separador";
import Titulo from "@/componentsv2/aboutpage/Titulo";
import Introduccion from "@/componentsv2/aboutpage/Introduccion";
import NuestrasAreas from "@/componentsv2/aboutpage/Areastrabajo";
import ServiciosTagCloud from "@/componentsv2/aboutpage/ServiciosTagCloud";
import Destacado from "@/componentsv2/shared/Destacado";

const Nosotros = () => {
  return (
    <Layout>
      <Separador />

      <Titulo />
      <Introduccion />
      <Separador />
      <NuestrasAreas />
      <Separador />
      <ServiciosTagCloud />
      <Separador />
      <Destacado />
      <Separador />
    </Layout>
  );
};

export default Nosotros;

export const Head = () => {
  const { t } = useTranslation();
  return (
    <Seo
      title={t("seo.about.title")}
      description={t("seo.about.description")}
      keywords={["nosotros", "empresa", "Geotrans", "experiencia", "maquinarias", "Arica", "movimiento de tierra"]}
    />
  );
};
export const query = graphql`
  query NosotrosPageQuery($language: String!) {
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
