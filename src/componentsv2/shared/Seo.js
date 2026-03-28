import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { useTranslation } from "react-i18next";

const LANGUAGES = ["es", "en"];

export const Seo = ({ title, description, keywords = [], image }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "es";
  const { pathname } = useLocation();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDesc,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDesc,
    image: image
      ? `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`
      : `${siteUrl}/favicon-32x32.png`,
    url: `${siteUrl}${pathname}`,
    keywords: keywords.join(", "),
  };

  const pathWithoutLang = pathname.replace(/^\/(es|en)\//, "/");
  const canonicalUrl = `${siteUrl}/${lang}${pathWithoutLang}`;

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {LANGUAGES.map((hrefLang) => (
        <link
          key={hrefLang}
          rel="alternate"
          hrefLang={hrefLang}
          href={`${siteUrl}/${hrefLang}${pathWithoutLang}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}/es${pathWithoutLang}`}
      />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "es" ? "es_CL" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  );
};
