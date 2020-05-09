import { graphql } from "gatsby"
import { darken } from "polished"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
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
import Caption from "../components/Caption"
import FixedBackground from "../components/FixedBackground"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PictureLink from "../components/PictureLink"
import i18n from "../i18n"

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
`

const StyledContainer = styled(Container)`
  padding-top: ${props => props.theme.pictureLinks.paddingTop};
  width: 80vw;
`

const StyledCol = styled(Col)`
  float: none;
  margin: 0 auto;
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

const Index = ({ data }) => {
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
          title={t("first.title")}
          description={t("first.description")}
        />

        <FixedBackground
          img={data.firstFixedBackground.childImageSharp.fluid.src}
        >
          <Caption caption={t("first.floating.badge")} />
        </FixedBackground>

        <AngledStrip
          title={"What we do?"}
          description={
            "We are a small chocolate company located in Zagreb, Croatia\nOur chocolates are made with the finest Belgian ingredients and melted on perfect temperatures\nDecorated with your own personalized photos and logos."
          }
        />

        <FixedBackground
          img={data.secondFixedBackground.childImageSharp.fluid.src}
        >
          <Caption
            caption={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, mollitia."
            }
          />
        </FixedBackground>

        <AngledStrip
          title={"Our products?"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Aliquid blanditiis debitis expedita facilis neque praesentium suscipit veniam voluptatem?\n Amet aperiam assumenda fugit harum incidunt libero maiores minus nostrum quod reiciendis!"
          }
        />

        <FixedBackground
          img={data.thirdFixedBackground.childImageSharp.fluid.src}
          height="auto"
        >
          <StyledContainer>
            <Row className="justify-content-center text-center">
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Birthdays"}
                />
              </StyledCol>
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Lorem ipsum dolor sit amet."}
                />
              </StyledCol>
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Lorem ipsum dolor sit amet."}
                />
              </StyledCol>
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Lorem ipsum dolor sit amet."}
                />
              </StyledCol>
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Lorem ipsum dolor sit amet."}
                />
              </StyledCol>
              <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                <PictureLink
                  to={"/"}
                  src={data.image1.childImageSharp.fluid.src}
                  description={"Lorem ipsum dolor sit amet."}
                />
              </StyledCol>
            </Row>
          </StyledContainer>
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

export default withTranslation()(Index)
