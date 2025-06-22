import React from "react";
import PropTypes from "prop-types";
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

  return <></>;
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
