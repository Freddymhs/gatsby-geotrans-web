import React, { useContext, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps
import Titulo from "../components/ComponentesSecciones/PageServices/Titulo"
import TituloMini from "../components/ComponentesSecciones/PageServices/TituloMini"

import imagen1 from "../images/parallax1.png"
import imagen2 from "../images/parallax2.png"
import { Col, ListGroup, Row } from "react-bootstrap"
import { ParallaxGral } from "../components/ComponentesGlobales/FullParallax"
import {
  Separador,
  SeparadorGrande,
} from "../components/ComponentesGlobales/Separador"

import { graphql } from "gatsby"

import HerramientaCotizar from "../components/ComponentesSecciones/PageServices/compServiciosGeotrans/HerramientaCotizar"
import RevisionCotizacionSend from "../components/ComponentesSecciones/PageServices/compServiciosGeotrans/RevisionCotizacionSend"

//
import {
  BtnPrimario,
  BtnSecundario,
  BtnTerciario,
  BtnFiltro,
} from "../components/ComponentesGlobales/Misbotones"

import imgdelete from "../images/iconos/delete.svg"

// para usar context de layout// para usar context de layout
import { CartContext } from "../context/CartContext"
// para usar context de layout// para usar context de layout
const Services = ({ data }) => {
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT
  const [cart, setcart] = useContext(CartContext)
  // REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT// REACT CONTEXT
  const { t } = useTranslation()
  /////////////////////////////////////////////////////////////seccion de herramienta cotizacion
  // para actualizar traduccion manualmente
  const currentIdioma = t("elidioma")
  // 6 areas
  const AreasDeProductosOServicios = data
  // 7 generadores
  const ProductoresYServidores = data.allMysqlTodosLosProductores.edges.concat(
    data.allMysqlTodosLosServidores.edges
  )
  //  26 para venta
  const ProductosYServicios = data.allMysqlTodosLosServicios.edges.concat(
    data.allMysqlTodosLosProductos.edges
  )
  // state para buscar por (AREA  O  GENERADOR?)
  const [filtro, setFiltro] = useState(false)
  const CambiarFiltro = () => {
    setFiltro(!filtro)
  }
  //en caso de AREA
  const [AREAselected, setAREAnueva] = useState()
  //en caso de GENERADOR
  const [PorSselected, setPorSselected] = useState({ valor: 0, tipo: "" })
  //////////////////////////////////////////////////////////////////seccion de revision cotizar
  const [Intereses, setIntereses] = useState([])

  const BorrarAlgunInteres = idCapturado => {
    // alert(
    //   "borrando unosssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    // )
    // console.log("seleccionado el")
    // console.log(palabra)

    const nuevocart = cart.filter(words => words != idCapturado)
    setcart(nuevocart)
    // console.log(cart)
    // console.log("---------------")
  }
  const BorrarTodosLosInteres = () => {
    setcart([])
  }

  return (
    <Layout>
      <SEO title="Nuestros Servicios" />
      <Separador />
      <Titulo />
      <HerramientaCotizar
        cart={cart}
        setcart={setcart}
        Intereses={Intereses}
        setIntereses={setIntereses}
        PorSselected={PorSselected}
        setPorSselected={setPorSselected}
        AREAselected={AREAselected}
        setAREAnueva={setAREAnueva}
        currentIdioma={currentIdioma}
        filtro={filtro}
        CambiarFiltro={CambiarFiltro}
        AreasDeProductosOServicios={AreasDeProductosOServicios}
        ProductoresYServidores={ProductoresYServidores}
        ProductosYServicios={ProductosYServicios}
      />
      <Separador /> <Separador id="listadoCotizar" />
      <Separador />
      <TituloMini />
      <RevisionCotizacionSend
        cart={cart}
        BorrarAlgunInteres={BorrarAlgunInteres}
        BorrarTodosLosInteres={BorrarTodosLosInteres}
        imgdelete={imgdelete}
      />
      {/* <RevisionCotizacionSend/> */}
      {/* <ParallaxGral frase={frase1} foto={imagen1} /> */}
      {/* <ParallaxGral frase={frase2} frasealt={frasealt} foto={imagen2} /> */}
      <SeparadorGrande />
    </Layout>
  )
}

export default Services
export const query = graphql`
  query {
    allSqliteSqliteMysqlTodosLosProductos {
      edges {
        node {
          NAMEESP
          NAMEENG
          DESCRIPCIONESP
          DESCRIPCIONENG
          CODPRODUCTORR
          CODAREA
        }
      }
    }
    allSqliteSqliteMysqlTodosLosServicios {
      edges {
        node {
          CODAREA
          CODSERVIDOR
          DESCRIPCIONENG
          DESCRIPCIONESP
          NAMEENG
          NAMEESP
          PRECIO
        }
      }
    }
    allSqliteSqliteMysqlTodasLasAreas {
      edges {
        node {
          NAMEENG
          NAMEESP
        }
      }
    }
    allSqliteSqliteMysqlTodosLosProductores {
      edges {
        node {
          NAMEESP
          NAMEENG
        }
      }
    }
    allSqliteSqliteMysqlTodosLosServidores {
      edges {
        node {
          NAMEENG
          NAMEESP
        }
      }
    }
  }
`
