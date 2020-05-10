import { darken } from "polished"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {
  I18nextProvider,
  useTranslation,
  withTranslation,
  Translation,
} from "react-i18next"
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

import Carousel from "react-bootstrap/Carousel"
// import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: Riesling;
src: url(${Riesling}) format('truetype');
font-style: normal;
}

@font-face {
font-family: Raleway;
src: url(${Raleway}) format('truetype');
font-style: normal;
}

@font-face {
font-family: Lato;
src: url(${Lato}) format('truetype');
font-style: normal;
}

body{
  width: 100%;
  height: 100%;
  font-family: Raleway, sans-serif;
  margin: 0 0 10vh;
}

.carousel-inner img {
  height: 70vh;
  margin: auto;
  object-fit: cover;
}

`

const theme = {
  typography: {
    heading: {
      color: "white",
      fontSize: "6vw",
      description: {
        fontSize: "1vw",
      },
    },
    strips: {
      color: "white",
      fontSize: "4rem",
    },
  },
  strips: {
    gradient: {
      from: "#f77700",
      to: "#bf6000",
    },
  },
  backgroundImages: {
    height: "60em",
  },
  pictureLinks: {
    paddingTop: "40vh",
    width: "300px",
    height: "300px",
    minWidth: "200px",
    minHeight: "200px",
    description: {
      fontSize: "2rem",
    },
  },
  colors: {
    tonalOffset: 0.3,
    footer: {
      main: "#FFFFFF",
      dark: darken(0.2, "#FFFFFF"),
    },
  },
}

const StyledCarousel = styled(Carousel)`
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
          height="100vh"
        >
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-75 mh-75"
                src={data.image1.childImageSharp.fluid.src}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75"
                src={data.image1.childImageSharp.fluid.src}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75"
                src={data.image1.childImageSharp.fluid.src}
                alt="First slide"
              />
            </Carousel.Item>
          </StyledCarousel>
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