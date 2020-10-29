import React from "react"
import { Navbar } from "react-bootstrap"
import menuicon from "../../../../images/iconos/menu.svg"
import styled from "styled-components"

const Togglee = ({ estilos }) => {
  return (
    <Styled>
      <Navbar.Toggle
     

        // style={{ ...estilos.toggle.colortoggle }}
      >
        <p className="p-0 m-0 "> 
        {/* w-100 h-100  */}
          <img src={menuicon} alt="buscador geotrans" />
        </p>
      </Navbar.Toggle>
    </Styled>
  )
}

const Styled = styled.div`
  /* width: auto; */
  /* element.style {
    background-color: rgb(41, 67, 78);
    min-height: 39px;
  } */

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0) !important;
    border-color: rgba(0, 0, 0, 0) !important;
  }
  .navbar-toggler:focus,
  .navbar-toggler:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 0) !important;
    border-color: rgba(0, 0, 0, 0) !important;
  }
  .navbar-toggler {
    /* padding: 0.55rem 0.75rem; */
    font-size: 1.25rem;
    line-height: 1.25;
    background-color: #27424f !important;
    border: 0px solid #ff6e40 !important;
    border-radius: 0rem;
  }

  /* .navbar-toggler {
    width: 100% !important;
  } */
  .collapsed {
    width: 100vw !important;
  }

  img {
    width: 100%;
    height: 2.7rem;
  }
`
export default Togglee
