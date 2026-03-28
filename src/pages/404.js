import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../componentsv2/layout/layout";
import { Seo } from "@/componentsv2/shared/Seo";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div
        style={{
          color: "#fff",
          backgroundColor: "#000",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
          {t("notFound.message")}
        </p>
        <Link
          to="/"
          style={{
            color: "#000",
            backgroundColor: "#fff",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  const { t } = useTranslation();
  return (
    <Seo
      title={t("seo.notFound.title")}
      description={t("seo.notFound.description")}
    />
  );
};

export const query = graphql`
  query NotFoundPageQuery($language: String!) {
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
