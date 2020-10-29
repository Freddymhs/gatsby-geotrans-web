import React, { useContext, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import Maquinarias from "../components/ComponentesSecciones/PageIndex/Maquinarias"
import Portada from "../components/ComponentesSecciones/PageIndex/Portada"
import { SeparadorGrande } from "../components/ComponentesGlobales/Separador"

import appletouchicon from "../favicons/apple-touch-icon.png"
import faviconx32 from "../favicons/favicon-32x32.png"
import faviconx16 from "../favicons/favicon-16x16.png"
import safaripinnedtab from "../favicons/safari-pinned-tab.svg"
import Helmet from "react-helmet"

import { CartContext } from "../context/CartContext"

const IndexPage = props => {
  var imgOptimizedTrucks = props?.data?.allFile?.nodes

  return (
    <Layout>
      <Helmet>
        <meta charset="UTF-8" />
        <html lang="es" />
        {/* etiquetas basicass */}
        <title>GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.. </title>
        <meta
          name="description"
          content="en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros..."
        />
        <meta
          name="keywords"
          content="empresa,Arriendo,rentar,precio,jbc,newholland,servicio,equipos,obras,excavacion,movimiento,tierra,aridos,Reciclaje,industrial"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=no,minimun-scale=1.0, maximun-scale=1.0  "
        />
        {/* info de la pagina  para indexacion general*/}
        <meta name="sitedomain" content="http://localhost:9000/" />
        {/* direccion url */}
        <meta name="organization" content="Geotrans" />
        {/* la organizacion o empresa */}
        <meta name="designer" content="@fmarcosdev" />
        {/*  DISENIADOR web  */}
        <meta name="robots" content="index,follow" />{" "}
        {/* permiso para que la sigan e indexen */}
        <meta name="revisit-after" content="10day" />
        {/* cada cuanto deben revisar mi sitio web */}
        {/* GOOGLE  indexacion*/}
        <meta name="googlebot" content="index,follow" />
        {/*para google*/}
        <meta name="author" content="@fmarcosdev" />
        {/* programador*/}
        {/* iconos  DE https://realfavicongenerator.net/favicon_result?file_id=p1ehvdgu51jaaqk8k0o1uer1hn56#.X1veNXWYX4Q*/}
        {/* <link rel="manifest" href={manifest}/> Manifest.json  ej para PWA  */}
        <link rel="icon" type="image/png" sizes="32x32" href={faviconx32} />
        {/*para web*/}
        <link rel="icon" type="image/png" sizes="16x16" href={faviconx16} />
        {/*para web*/}
        <link rel="apple-touch-icon" sizes="180x180" href={appletouchicon} />
        {/*para apple icon*/}
        <link rel="mask-icon" href={safaripinnedtab} color="#ff6e40" />
        {/*para safari web*/}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#f8f8ff" />
        {/* twitter */}
        <meta name="twitter:card" content="website" />
        {/*como sera compatible con twitter*/}
        <meta
          name="twitter:title"
          content="GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.."
        />{" "}
        {/*titulo twitter*/}
        <meta
          name="twitter:description"
          content="en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros..."
        />{" "}
        {/*descripcion twitter*/}
        <meta name="twitter:site" content="http://localhost:9000/" />
        {/*sitio web twitter*/}
        <meta name="twitter:image" content={faviconx32} />
        {/*imagen icono twitter*/}
        <meta name="twitter:creator" content="@fmarcosdev" />
        {/*creadorcon twitter*/}
        {/* facebook,instragram,linkedin,whatsapp,y demas redes sociales */}
        <meta name="og:type" content="website" />
        {/*como sera compatible con */}
        <meta
          name="og:title"
          content="GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.."
        />{" "}
        {/*titulo twitter*/}
        <meta
          name="og:description"
          content="en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros..."
        />{" "}
        {/*descripcion */}
        <meta name="og:image" content={faviconx32} />
        {/*imagen icono */}
        <meta name="og:creator" content="@fmarcosdev" />
        {/*creadorcon nose si existe esta */}
        <meta name="og:locale" content="es_ES" />
        {/*idioma */}
        <meta name="og:url" content="http://localhost:9000/" />
        {/*sitio web */}
        <link rel="canonical" href="http://localhost:9000/" />
        {/* datos estructurados , una forma de especial como en RECETAS de cocina */}
        <meta
          itemprop="name"
          content="GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.."
        />
        {/*como sera compatible con */}
        <meta
          name="description"
          content="en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros..."
        />{" "}
        {/*titulo twitter*/}
        <meta name="image" content={faviconx32} /> {/*descripcion */}
      </Helmet>

      {/* <SEO title="GEOTRANS Maquinarias Para Construccion y Movimiento de Tierra" /> */}

      <Container fluid className="p-0 m-0 ">
        <Portada />
      </Container>
      <Container fluid className=" px-0 mx-0">
        <Maquinarias imgOptimizedTrucks={imgOptimizedTrucks} />
      </Container>
      <SeparadorGrande />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
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
  }
`
