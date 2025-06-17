import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import appletouchicon from "@favicons/apple-touch-icon.png";
import faviconx16 from "@favicons/favicon-16x16.png";
import faviconx32 from "@favicons/favicon-32x32.png";
import safaripinnedtab from "@favicons/safari-pinned-tab.svg";

const SEO = ({
  title,
  description,
  lang = "es",
  meta = [],
  keywords = [],
  url = "",
  image = null,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = site.siteMetadata?.title || "";
  const siteUrl = url || site.siteMetadata.siteUrl || "";
  const metaKeywords = keywords.length
    ? keywords
    : [
        "empresa",
        "Arriendo",
        "rentar",
        "precio",
        "jbc",
        "newholland",
        "servicio",
        "equipos",
        "obras",
        "excavacion",
        "movimiento",
        "tierra",
        "aridos",
        "Reciclaje",
        "industrial",
      ];
  const metaImage = image || faviconx32;

  return (
    <Helmet htmlAttributes={{ lang }} title={title}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      {metaKeywords.length > 0 && (
        <meta name="keywords" content={metaKeywords.join(", ")} />
      )}
      <meta name="author" content={site.siteMetadata.author || "@fmarcosdev"} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href={appletouchicon} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconx32} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconx16} />
      <link rel="mask-icon" href={safaripinnedtab} color="#ff6e40" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata.author || "@fmarcosdev"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Meta adicionales */}
      {meta.map(({ name, content, property }) =>
        property ? (
          <meta key={property} property={property} content={content} />
        ) : (
          <meta key={name} name={name} content={content} />
        )
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
      property: PropTypes.string,
    })
  ),
  keywords: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
