require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false, // ayuda a evitar inconsistencias en desarrollo
  },
  siteMetadata: {
    title: `GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.. `,
    description: `en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros...`,
    author: `@fmarcosdev`,
    siteUrl: `http://localhost:8000`, // Movido aquí desde el plugin
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assetsv2/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`, // Cambiado de 'locales' a 'locale' para coincidir con localeJsonSourceName
        path: `${__dirname}/src/locales`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "geotrans",
        short_name: "GEOTRANS",
        theme_color: "#f8f8ff",
        background_color: "#f8f8ff",
        display: "fullscreen",
        start_url: `/`,
        icon: "src/assetsv2/favicons/android-chrome-192x192.png",
      },
    },
    // gatsby-plugin-offline debe ir después de gatsby-plugin-react-i18next
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // Debe coincidir con el name del filesystem
        languages: [`es`, `en`], // Español como primer idioma (por defecto)
        defaultLanguage: `es`,
        generateDefaultLanguagePage: true, // Genera páginas para el idioma por defecto
        redirect: true, // Redirecciona automáticamente según el navegador
        siteUrl: `http://localhost:8000`, // Para producción cambia esto
        trailingSlash: "always",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: ".", // Habilitamos separador de claves para valores anidados
          nsSeparator: ":", // Separador de namespace (opcional)
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
          },
        ],
      },
    },
    `gatsby-plugin-offline`, // Movido después del plugin i18n
    {
      resolve: `gatsby-source-sqlite`,
      options: {
        fileName: `${__dirname}/src/data/geotransbd.sqlite`,
        queries: [
          {
            statement: "SELECT * FROM area",
            idFieldName: "codarea",
            name: "SqliteMysqlTodasLasAreas",
          },
          {
            statement: "SELECT * FROM generadorproducto",
            idFieldName: "codproductorr",
            name: "SqliteMysqlTodosLosProductores",
          },
          {
            statement: "SELECT * FROM generadorservicio",
            idFieldName: "codservidor",
            name: "SqliteMysqlTodosLosServidores",
          },
          {
            statement: "SELECT * FROM producto",
            idFieldName: "codproducto",
            name: "SqliteMysqlTodosLosProductos",
          },
          {
            statement: "SELECT * FROM servicio",
            idFieldName: "codservicio",
            name: "SqliteMysqlTodosLosServicios",
          },
        ],
      },
    },
  ],
};
