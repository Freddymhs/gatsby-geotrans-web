import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { Card, Col, Container, Navbar, Row } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

import {
  Titulowebv1,
  Subtitulowebv1,
  Subtitulo2,
} from "../../../ComponentesGlobales/MisTextos"

const Brand = props => {
  const { logoweb, estilos, data } = props
  const { t } = useTranslation()

  return (
    <StyledBrand>
      <Container>
        <Row>
          <Col>
            <Card>
              <Img fixed={logoweb} className="w-100 h-100" />
            </Card>
          </Col>
        </Row>
      </Container>

      <Link to="/" className="d-none d-md-block">
        <Navbar.Brand
          className="
            w-auto
            d-flex
            justify-content-start
            align-items-center
            text-center
          "
        >
          <div className="d-flex align-items-center">
            <div className="logo-container me-3">
              <Img fixed={logoweb} />
            </div>
            <div className="brand-text">
              <div>
                <Titulowebv1>{t("header.title")}</Titulowebv1>
              </div>
              <div>
                <Subtitulowebv1>{t("header.subtitle")}</Subtitulowebv1>
              </div>
            </div>
          </div>
        </Navbar.Brand>
      </Link>
    </StyledBrand>
  )
}

export default Brand

const StyledBrand = styled.div``

// img {
//     margin: 0px !important;
//     padding: 0px !important;
//     height: 68px !important;
//     max-height: 68px !important;
//     width: 68px !important;
//     max-width: 68px !important;
//   }

//   a {
//     text-decoration: none !important;
//   }

//   * {
//     user-select: none !important;
//     -webkit-user-select: none; /* Chrome all / Safari all */
//     -moz-user-select: none; /* Firefox all */
//     -ms-user-select: none; /* IE 10+ */
//   }

//   .logo-container {
//     flex-shrink: 0;
//   }

//   .brand-text {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//   }
