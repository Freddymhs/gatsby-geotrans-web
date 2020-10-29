module.exports = {
  siteMetadata: {
    title: `GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.. `,
    description: `en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros...`,
    author: `@fmarcosdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        // display: "minimal-ui'",
        start_url: `/`,
        icon: "src/favicons/android-chrome-192x192.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`es`, `en`],
        defaultLanguage: `es`,

        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: ".",
          nsSeparator: false,
        },

        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["es"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-sqlite`,
      options: {
        fileName: `${__dirname}/data/geotransbd.sqlite`,
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

    // {
    //   resolve: `gatsby-source-sqlite`,
    //   options: {
    //     // Ruta a tu archivo SQLite (cambia la ruta si es diferente)
    //     fileName: `${__dirname}/data/geotransbd.sqlite`,
    //     // Queries para extraer datos
    //     queries: [
    //       {
    //         statement: "SELECT * FROM area",
    //         idFieldName: "codarea",
    //         name: "TodasLasAreas",
    //       },
    //       {
    //         statement: "SELECT * FROM generadorproducto",
    //         idFieldName: "codproductorr",
    //         name: "TodosLosProductores",
    //       },
    //       {
    //         statement: "SELECT * FROM generadorservicio",
    //         idFieldName: "codservidor",
    //         name: "TodosLosServidores",
    //       },
    //       {
    //         statement: "SELECT * FROM producto",
    //         idFieldName: "codproducto",
    //         name: "TodosLosProductos",
    //       },
    //       {
    //         statement: "SELECT * FROM servicio",
    //         idFieldName: "codservicio",
    //         name: "TodosLosServicios",
    //       },
    //     ],
    //   },
    // },

    // {
    //   resolve: `gatsby-source-mysql2`,
    //   options: {
    //     connectionDetails: {
    //       host: "localhost",
    //       user: "root",
    //       password: "password",
    //       database: "geotransbd",
    //     },
    //     queries: [
    //       {
    //         statement: "SELECT * FROM area",
    //         idFieldName: "CODAREA",
    //         name: "TodasLasAreas",
    //       },
    //       {
    //         statement: "SELECT * FROM generadorproducto",
    //         idFieldName: "CODPRODUCTORR",
    //         name: "TodosLosProductores",
    //       },
    //       {
    //         statement: "SELECT * FROM generadorservicio",
    //         idFieldName: "CODSERVIDOR",
    //         name: "TodosLosServidores",
    //       },
    //       {
    //         statement: "SELECT * from producto",
    //         idFieldName: "CODPRODUCTO",
    //         name: "TodosLosProductos",
    //       },
    //       {
    //         statement: "SELECT * from servicio",
    //         idFieldName: "CODSERVICIO",
    //         name: "TodosLosServicios",
    //       },
    //     ],
    //   },
    // },

    // test
  ],
}

// {
//   statement: "SELECT * FROM select * from generadorservicio UNION SELECT * FROM generadorproducto",
//   idFieldName: "allServiciosYProductos",
//   name: "allServiciosYProductos",
// },

// Dar un servicio integral de excelencia a lo largo de Chile, buscando la ... Proveemos el servicio de arriendo y transporte de maquinaria, movimiento de tierras
// Servicios , Arriendo de equipos en Obras, Limpiezas, Demoliciones, Transportes, Mineria con equipos excavacion , carga entre otros
// Realizamos Servicios ,Ventas, Arriendos a diferentes Precios segun area como Minera,Obras,Construccion, Aridos ,Movimiento Tierra, Izajes ,Lmpieza en otros para Arica.

//precio ,  empresa,renta,arriendo,
//jbc , newholland , grande , usadas ,
// servicio ,equipos para obras, para excavacion
//  ,maquinaria,carga,,obra,construccion,,minera, materiales aridos,
// excavacion,retroexcavadora,
// movimiento de tierra,  carga tierra,
//cargador frontal

// Realizamos Servicios de Obras y Transporte con nuestras Maquinarias Aljibe,
//  Batea,Pluma, Retroexcavadora,Tolva etc. Tambien se realiza servicios en Áridos
//  y Reciclaje Industrial.

// GEOTRANS Servicios ,Ventas,Arriendos de equipos para obras,limpieza,Transporte,Mineria.
// Equipos de Excavacion , Movimiento de Tierra, produccion de Aridos , carga y reciclaje.
//
//GEOTRANS Servicios, Arriendos, Transportes , equipos para Obras ,limpieza

//consultas graphql de tipo mysql
// query {
//   allMysqlTodos{
//     edges {
//       node {
//         asdaaa

//       }
//     }
//   }
// }

// consultas de graphql para mysql

// {
//   allMysqlCountry {
//     edges {
//       nodes {
//         cosas
//       }
//     }
//   }

//
// //
// // aca
// module.exports = {
//   siteMetadata: {
//     title: `GEOTRANS - Retroexcavadora, Tolva, Aljibe, Batea, Pluma...`,
//     description: `En ARICA, Servicios, Ventas, Arriendos a diferentes Precios según área: Minera, Obras, Construcción, Áridos, Movimiento Tierra, Izajes, Limpieza, y otros...`,
//     author: `@fmarcosdev`,
//   },
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `locales`,
//         path: `${__dirname}/locales`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: "geotrans",
//         short_name: "GEOTRANS",
//         theme_color: "#f8f8ff",
//         background_color: "#f8f8ff",
//         display: "fullscreen",
//         start_url: `/`,
//         icon: "src/favicons/android-chrome-192x192.png", // This path is relative to the root of the site.
//       },
//     },
//     `gatsby-plugin-offline`,
//     {
//       resolve: `gatsby-plugin-react-i18next`,
//       options: {
//         languages: [`es`, `en`],
//         defaultLanguage: `es`,
//         i18nextOptions: {
//           interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//           },
//           keySeparator: ".",
//           nsSeparator: false,
//         },
//         pages: [
//           {
//             matchPath: "/:lang?/blog/:uid",
//             getLanguageFromPath: true,
//             excludeLanguages: ["es"],
//           },
//           {
//             matchPath: "/preview",
//             languages: ["es"],
//           },
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-source-sqlite`,
//       options: {
//         fileName: `${__dirname}/data/mydb.sqlite`,
//         queries: [
//           {
//             statement: "SELECT * FROM area",
//             idFieldName: "CODAREA",
//             name: "TodasLasAreas",
//           },
//           {
//             statement: "SELECT * FROM generadorproducto",
//             idFieldName: "CODPRODUCTORR",
//             name: "TodosLosProductores",
//           },
//           {
//             statement: "SELECT * FROM generadorservicio",
//             idFieldName: "CODSERVIDOR",
//             name: "TodosLosServidores",
//           },
//           {
//             statement: "SELECT * FROM producto",
//             idFieldName: "CODPRODUCTO",
//             name: "TodosLosProductos",
//           },
//           {
//             statement: "SELECT * FROM servicio",
//             idFieldName: "CODSERVICIO",
//             name: "TodosLosServicios",
//           },
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-facebook-customer-chat`,
//       options: {
//         sdk: {
//           appId: "775159989996689",
//         },
//         chat: {
//           pageId: "106572004521097",
//           loggedInGreeting: "Hi! How can I help you?",
//           loggedOutGreeting: "Hi! How can I help you?",
//         },
//       },
//     },
//   ],
// }
