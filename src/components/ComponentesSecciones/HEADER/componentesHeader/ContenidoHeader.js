import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps
import { TextMenu } from "../../../ComponentesGlobales/MisTextos"
const Contenido = ({ estilos, SwitchLang }) => {
  const { t } = useTranslation() // necesario
  return (
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="ml-auto text-center       d-flex align-items-center">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">
              <TextMenu>{t("header.Home")}</TextMenu>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/us/">
              <TextMenu> {t("header.About Us")}</TextMenu>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/services/">
              <TextMenu> {t("header.Services")}</TextMenu>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <NavDropdown
          style={estilos.menugral}
          title={<TextMenu> {t("header.Contact")}</TextMenu>}
        >
          <NavDropdown.Item
            className="text-center text-sm-left"
            // style={{ backgroundColor: "#27424F" }}
          >
            <Nav.Item>
              <Nav.Link>
                <Link to="/contactus/">
                  <TextMenu> {t("header.Contact us")}</TextMenu>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </NavDropdown.Item>
          {/* <NavDropdown.Item
            className="text-center  text-sm-left"
            style={{ backgroundColor: "#001C26" }}
          >
            <Nav.Item>
              <Nav.Link>
                <Link to="/contactus/">
                  <TextMenu> {t("header.Work with us")}</TextMenu>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </NavDropdown.Item> */}
          <NavDropdown.Divider />
        </NavDropdown>
        {/* <Nav.Item>
          <Nav.Link>
            <Link to="/news">
              <TextMenu> {t("header.News")}</TextMenu>
            </Link>
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <SwitchLang />
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Contenido
