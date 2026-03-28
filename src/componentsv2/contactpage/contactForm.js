import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {} from "gatsby";

export const StyledFormControl = styled(Form.Control)`
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 15px 18px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff6e40;
    box-shadow: 0 0 0 0.2rem rgba(255, 110, 64, 0.15);
    background-color: #fff;
  }

  &::placeholder {
    color: #999;
  }
`;

export const FormTitle = styled.h2`
  color: #001b27;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Sección de empresas más elegante
export const CompaniesSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  h3 {
    color: #001b27;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

export const BtnPrimario = styled.button`
  color: red;
`;

// Formulario mejorado
export const FormContainer = styled(Card)`
  background: white;
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const remitente = "geopagedomain@gmail.com";
    const destinatario = "tadmgeo@gmail.com";
    const form = e.target;
    const formData = {
      nombre: form.nombre.value,
      email: form.email.value,
      telefono: form.telefono.value,
      empresa: form.empresa.value,
      mensaje: form.mensaje.value,
    };

    const formattedData = {
      ...formData,
      remitente: remitente,
      destinatario: destinatario,
    };
    try {
      const response = await fetch(process.env.GATSBY_API_AWS_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        setMessage(t("Contacto.form.success"));
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          empresa: "",
          mensaje: "",
        });
      } else {
        setMessage(t("Contacto.form.error"));
      }
    } catch (error) {
      setMessage(t("Contacto.form.error"));
    } finally {
      setIsLoading(false);
    }
  };
  const { t } = useTranslation();

  return (
    <FormContainer className="py-5">
      <FormTitle className="text-center mb-3">
        {t("Contacto.sendProject")}
      </FormTitle>
      <p className="text-center text-muted mb-4 fs-5">
        {t("Contacto.responseTime")}
      </p>

      <Form onSubmit={handleSubmit}>
        <Row className="gy-3">
          <Col md={6}>
            <Form.Group>
              <StyledFormControl
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder={t("Contacto.form.fullName")}
                className="w-100"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <StyledFormControl
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("Contacto.form.email")}
                className="w-100"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <StyledFormControl
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder={t("Contacto.form.phone")}
                className="w-100"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <StyledFormControl
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder={t("Contacto.form.company")}
                className="w-100"
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group>
              <StyledFormControl
                as="textarea"
                rows={5}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder={t("Contacto.form.moreAbout")}
                required
                className="w-100"
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="text-center mt-3">
            <StyledButton type="submit" disabled={isLoading}>
              {isLoading ? t("Contacto.form.sending") : t("Contacto.form.send")}
            </StyledButton>

            {message && (
              <div
                className={`alert mt-5 ${
                  message === t("Contacto.form.success")
                    ? "alert-success"
                    : "alert-danger"
                }`}
              >
                <strong>{message}</strong>
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};
export const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #ff6e40, #ff5722);
  border: none;
  border-radius: 25px;
  padding: 15px 40px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: linear-gradient(135deg, #ff5722, #e64a19);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 110, 64, 0.4);
  }

  &:disabled {
    background: #ccc;
    transform: none;
    box-shadow: none;
  }
`;

export default ContactForm;
