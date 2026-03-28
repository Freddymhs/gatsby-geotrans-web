import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

const SERVICE_COUNT = 17;
const SERVICE_KEYS = Array.from({ length: SERVICE_COUNT }, (_, i) => `serviciosGeotrans.${i + 1}.nombre`);

const ServiciosTagCloud = () => {
  const { t } = useTranslation();

  return (
    <Styles>
      <Container>
        <h2 className="section-title">{t("footer.services")}</h2>
        <div className="tag-container">
          {SERVICE_KEYS.map((key) => (
            <span key={key} className="service-tag">
              {t(key)}
            </span>
          ))}
        </div>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  text-align: center;

  .section-title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 2rem;
    color: var(--text-dark);
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .service-tag {
    font-family: Montserrat;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--text-dark);
    background: var(--ghost-white);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 8px 18px;
    transition: all 0.2s ease;
    cursor: default;

    &:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
  }
`;

export default ServiciosTagCloud;
