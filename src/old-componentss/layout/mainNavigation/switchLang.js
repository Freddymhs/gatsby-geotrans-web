import React from "react";

import { ButtonGroup, Button } from "react-bootstrap";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useI18next } from "gatsby-plugin-react-i18next";
import { TextLanguage } from "../../../componentsv2/shared/Texts";

const SwitchLang = () => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  return (
    <ButtonGroup
      variant="outline-secondary"
      className="m-auto w-100 h-100"
      aria-label="Selector de idioma"
    >
      {languages.map((lng) => (
        <Button
          key={lng}
          className="my-0 py-0 rounded"
          style={{
            fontSize: "2.7rem",
            marginLeft: "0.1rem",
            marginRight: "0.1rem",
            width: "91%",
          }}
          variant="outline-secondary"
          onClick={() => changeLanguage(lng)}
        >
          <TextLanguage>{lng}</TextLanguage>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SwitchLang;
