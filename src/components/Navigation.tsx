import * as React from "react"
import { Tween } from "react-gsap"
import styled from "styled-components"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"

const NavigationStyle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  grid-area: 1/1/1/3;
  padding: 1rem 2rem;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 1;
`
const ClickableSpan = styled.span`
  cursor: pointer;
  padding: 0 10px;
`

const StyledStrong = styled.strong`
  width: 10vw;
`

const Navigation = () => {
  const { t } = useTranslation()
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }
  return (
    <NavigationStyle>
      <Tween from={{ y: "25px", opacity: 0, delay: 0.75 }}>
        <span>{t("languageChange")}</span>
        <ClickableSpan onClick={() => changeLanguage("en")}>
          {t("languageEnglish")}
        </ClickableSpan>
        <ClickableSpan onClick={() => changeLanguage("hr")}>
          {t("languageCroatian")}
        </ClickableSpan>
      </Tween>
    </NavigationStyle>
  )
}

export default Navigation
