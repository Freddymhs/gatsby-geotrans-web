// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import logoweb from "../../../images/logo/geotransLogo.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Brandheader from "./componentesHeader/Brandheader" // componente brand
import Togglee from "./componentesHeader/Togglee" //btn mostrar menu
import ContenidoHeader from "./componentesHeader/ContenidoHeader" // componente de contenidos
import { StaticQuery, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import SwitchLang from "../../ComponentesGlobales/switchLang" // btn cambiar lenguaje
import {
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Card,
} from "react-bootstrap"
import styled from "styled-components"

import Img from "gatsby-image"
const Styled = styled.div``
// const StyledBrand = styled.div`
//   img {
//     height: 80px;
//     width: 80px;
//   }
// `

const Header = data => {
  const { t } = useTranslation() // necesario

  return (
    <StaticQuery
      query={graphql`
        query {
          file(
            relativeDirectory: { glob: "logo" }
            name: { eq: "geotransLogo" }
          ) {
            childImageSharp {
              fixed(
                background: "#f8f8ff"
                width: 68
                height: 68
                fit: CONTAIN
              ) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <Navbar
          style={{
            backgroundColor: "#f8f8ff",
          }}
          sticky="top"
          // style={estilos.ajusteNav}
          expand="lg"
          className="d-flex flex-row
          justify-content-around align-items-center mx-0 px-0

          py-0"
        >
          <Brandheader
            logoweb={data.file.childImageSharp.fixed}
            estilos={estilos}
          />
          <Togglee estilos={estilos} />
          <ContenidoHeader estilos={estilos} SwitchLang={SwitchLang} />
        </Navbar>
      )}
    />
  )
}

const estilos = {
  // brandTitle: {
  //   lineHeight: "1",
  //   marginTop: "0",
  //   paddingTop: "0",
  //   marginBottom: "0",
  //   paddingBottom: "0",
  //   fontSize: "4.8rem",
  //   fontFamily: "Blader",
  //   color: "#29434f",
  // },
  // brandSubt: {
  //   lineHeight: "1",
  //   marginTop: "0",
  //   paddingTop: "0",
  //   marginBottom: "0",
  //   paddingBottom: "0",
  //   fontSize: "2.1rem",
  //   fontFamily: "MontserratBold",
  //   color: "#29434f",
  // },
  // toggle: {
  //   colortoggle: { backgroundColor: "#29434e", minHeight: "39px" },
  //   textoToggle: { color: "#fafafa", fontSize: "2rem" },
  // },
  // menugral: {
  //   color: "#29434f",
  //   fontSize: "2.1rem",
  //   fontWeight: "bold",
  // },
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
