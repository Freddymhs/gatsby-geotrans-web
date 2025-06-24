import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "@/componentsv2/layout/layout";
import { Seo } from "@/componentsv2/shared/Seo";
import Separador from "@/componentsv2/shared/Separador";
import Titulo from "@/componentsv2/aboutpage/Titulo";
import Introduccion from "@/componentsv2/aboutpage/Introduccion";
import NuestrasAreas from "@/componentsv2/aboutpage/Areastrabajo";
import Destacado from "@/componentsv2/shared/Destacado";

const Nosotros = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title="Nosotros | Geotrans Arica"
        description="Conoce a Geotrans Arica: años de experiencia en arriendo de maquinaria pesada, movimiento de tierra y soluciones para la construcción."
        keywords={[
          "nosotros",
          "empresa",
          "Geotrans",
          "experiencia",
          "maquinarias",
          "Arica",
          "movimiento de tierra",
        ]}
      />
      <Separador />

      <Titulo />
      <Introduccion />
      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>
      <NuestrasAreas />
      <div style={{ width: "100%", height: "21vh" }} className="d-block">
        &nbsp;
      </div>
      <Destacado />
      <div style={{ width: "100%", height: "17vh" }} className="d-block">
        &nbsp;
      </div>
    </Layout>
  );
};

export default Nosotros;
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
