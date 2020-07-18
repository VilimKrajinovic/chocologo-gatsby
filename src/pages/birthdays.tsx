import { darken } from "polished"
import * as React from "react"
import Carousel from "react-bootstrap/Carousel"
import { I18nextProvider, useTranslation, withTranslation } from "react-i18next"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Lato from "../../static/fonts/Lato-LightItalic.ttf"
import Raleway from "../../static/fonts/Raleway-Regular.ttf"
import Riesling from "../../static/fonts/Riesling.ttf"
import "../../static/styles/bootstrap.css"
import AngledStrip from "../components/AngledStrip"
import FixedBackground from "../components/FixedBackground"
import Footer from "../components/Footer"
import Header from "../components/Header"
import i18n from "../i18n"
import Gallery from "../components/Gallery/Gallery"
import BirthdayDataRenderer from "../components/Gallery/BirthdayDataRenderer"
import theme, { GlobalStyle } from "../theme"

const StyledCarousel = styled(Carousel)`
  padding-top: 20vh;
`
const StyledGallery = styled(Gallery)`
  padding-top: 20vh;
`

const Birthdays = ({ data }) => {
  const { t } = useTranslation()
  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header
          title="Chocologo"
          description={t("headerDescription")}
          img={data.headerBackground.childImageSharp.fluid.src}
        />
        <AngledStrip
          title={t("products.birthdays.title")}
          description={t("products.birthdays.description")}
        />
        <FixedBackground
          img={data.thirdFixedBackground.childImageSharp.fluid.src}
          height="100%"
        >
          <BirthdayDataRenderer></BirthdayDataRenderer>
        </FixedBackground>

        <Footer />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export const query = graphql`
  {
    headerBackground: file(relativePath: { eq: "background_main.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    firstFixedBackground: file(relativePath: { eq: "first.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    secondFixedBackground: file(relativePath: { eq: "second.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thirdFixedBackground: file(relativePath: { eq: "third.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image1: file(relativePath: { eq: "chocolate1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default withTranslation()(Birthdays)
