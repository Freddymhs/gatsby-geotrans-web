import React, { useEffect, Component, useState, useContext } from "react"
import { Formik } from "formik"
import { Row, Col, Container, Button, Modal } from "react-bootstrap"
import styled from "styled-components"
import {
  ParrafoColor,
  ParrafoMiniListado,
} from "../../ComponentesGlobales/MisTextos"
import {
  BtnTerciario,
  BtnPrimario,
  BtnSecundario,
} from "../../ComponentesGlobales/Misbotones"

import emailjs from "emailjs-com"
import { useTranslation } from "react-i18next"

// INICIO npm i react-pure-modal
// import PureModal from "react-pure-modal"
// import "react-pure-modal/dist/react-pure-modal.min.css"
import { Link } from "gatsby"
// fin  react-pure-modal

// const { t } = useTranslation() // necesario
import { CartContext } from "../../../context/CartContext"

const FormularioPersonalizado = props => {
  const [cart, setcart] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const { t } = useTranslation()
  useEffect(() => {
    cart == ""
      ? setShow(true)
      : (document.getElementById("details").innerHTML = `${cart
          .map(val => `${val}`)
          .join("\n")}`)
  }, [])

  return (
    <>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="text-center  w-100">
            <ParrafoMiniListado>{t("Contacto.ModalA")}</ParrafoMiniListado>
            <ParrafoMiniListado>{t("Contacto.ModalB")}</ParrafoMiniListado>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Link className="col-6">
                <BtnTerciario onClick={handleClose}>
                  {t("Contacto.ModalC")}
                </BtnTerciario>
              </Link>
              <Link to="/services/" className="col-6">
                <BtnPrimario onClick={handleClose}>
                  {t("Contacto.ModalD")}
                </BtnPrimario>
              </Link>
            </Row>
          </Modal.Footer>
        </Modal>
      </>
      {/* x */}
      <EstiloForm>
        <Formik
          initialValues={{ name: "", phone: "", email: "", details: "" }}
          validate={values => {
            const errors = {}
            // valida nombre
            if (!values.name) {
              errors.name = "Required "
            } else if (values.name.length < 3) {
              errors.name = "Invalid name address"
            }
            // valida telefono
            if (!values.phone) {
              errors.phone = "Required "
            } else if (
              !/^[0-9]+$/.test(values.phone) ||
              values.phone.length < 9
            ) {
              errors.phone = "Invalid phone address"
            }
            //  valida email
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            // valida details
            if (!values.details) {
              errors.details = "Required "
            } else if (values.details.length < 10) {
              errors.details = "Invalid name address"
            }

            if (errors.length == 0) {
              alert("sin eror")
            } else {
              // alert("si tenemos errores")
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
              // emailjs

              emailjs
                .send(
                  "service_lcq9xod",
                  "template_eern02a",
                  values,
                  "user_gtDZqbc0iEWWvKKsUiDuq"
                )
                .then(
                  response => {
                    console.log("SUCCESS!", response.status, response.text)
                    alert("Correo Enviado con exito")
                  },
                  err => {
                    console.log("FAILED...", err)
                    alert("Correo Fallo al Enviar")
                  }
                )

              // emailjs
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              class="form-horizontal  w-100 p-auto m-auto p-5 bg-white"
            >
              <fieldset>
                <legend>GEOTRANS</legend>
                <hr />
                <div class="form-group">
                  <label class="x control-label" for="name">
                    {t("Contacto.fmr1")}
                  </label>
                  <div class="x">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t("Contacto.formName")}
                      class="form-control input-md"
                      required=""
                    />
                    <p className="text-white bg-danger">
                      {errors.name && touched.name && errors.name}
                    </p>
                    {/* <span class="help-block">su nombre.</span> */}
                  </div>
                </div>

                <div class="form-group">
                  <label class="cx control-label" for="phone">
                    {t("Contacto.fmr2")}
                  </label>
                  <div class="x">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder={t("Contacto.formPhone")}
                      class="form-control input-md"
                    />
                    <p className="text-white bg-danger">
                      {errors.phone && touched.phone && errors.phone}
                    </p>
                    {/* <span class="help-block">su numero telefonico</span> */}
                  </div>
                </div>

                <div class="form-group">
                  <label class="x control-label" for="email">
                    {t("Contacto.fmr3")}
                  </label>

                  <div class="x">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email"
                      name="email"
                      type="text"
                      placeholder={t("Contacto.formEmail")}
                      class="form-control input-md"
                      required=""
                    />
                    <p className="text-white bg-danger">
                      {errors.email && touched.email && errors.email}
                    </p>
                    {/* <span class="help-block">
                  su correo electrónico de contacto
                </span> */}
                  </div>
                </div>

                {/* x */}

                {/* x */}

                <div class="form-group">
                  <label class="x control-label" for="details">
                    {t("Contacto.fmr4")}
                  </label>
                  <div class="x">
                    <textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.details}
                      class="form-control"
                      id="details"
                      name="details"
                      rows="12"
                    ></textarea>

                    <p className="text-white bg-danger">
                      {errors.details && touched.details && errors.details}
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <BtnPrimario type="submit" disabled={isSubmitting}>
                    {t("Contacto.fmr5")}
                  </BtnPrimario>
                </div>
              </fieldset>
            </form>
          )}
        </Formik>
      </EstiloForm>
    </>
  )
}

export default FormularioPersonalizado

const EstiloForm = styled.div`
  legend {
    /* font-size: 2.8rem; */
  }
  input {
    /* background-color:red; */
    padding: 1rem;
    font-size: 1.6rem;
    color: #001b27;
  }
  span {
    padding: 1rem;
    font-size: 1.4rem;
    color: #526d7b;
  }
  label {
    padding: 1rem;
    font-size: 1.8rem;
    color: #ff6e40;
  }
  .form-group {
    /* background-color: red; */
  }
`

const Formulario = () => {
  return <p>x</p>
}
