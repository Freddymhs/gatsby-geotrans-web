import React from "react"

import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { useI18next } from "gatsby-plugin-react-i18next"
import { TextLanguage } from "./MisTextos"

const SwitchLang = () => {
  const { t } = useTranslation() // necesario
  const { languages, changeLanguage } = useI18next()
  return (
    <ButtonGroup
      variant="outline-secondary "
      className="m-auto  w-100 h-100"
      aria-label="First group"
    >
      <table className=" mt-3 w-100 h-100">
        <tr>
          <td style={{ textTransform: "uppercase" }} colSpan={2}>
            <TextLanguage>{t("elidioma")}</TextLanguage>
          </td>
        </tr>
        <tr>
          {languages.map(lng => (
            <td>
              <Button
                className="my-0 py-0  rounded  "
                style={{
                  fontSize: "2.7rem",
                  marginLeft: "0.1rem",
                  marginRight: "0.1rem",
                  width: "91%",
                }}
                variant="outline-secondary"
                key={lng}
                onClick={() => changeLanguage(lng)}
              >
                {lng}
              </Button>
            </td>
          ))}
        </tr>
      </table>
    </ButtonGroup>
  )
}

const btnestilo = { backgrondColor: "red" }

export default SwitchLang
