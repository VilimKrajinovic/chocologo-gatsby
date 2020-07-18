import { darken } from "polished"
import { createGlobalStyle } from "styled-components"
import Lato from "../static/fonts/Lato-LightItalic.ttf"
import Raleway from "../static/fonts/Raleway-Regular.ttf"
import Riesling from "../static/fonts/Riesling.ttf"

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
    paddingTop: "30vh",
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
  galleryImages: {
    paddingTop: "30vh",
    width: "500px",
    height: "500px",
    minWidth: "200px",
    minHeight: "200px",
  },
  footer: {
    height: "120px",
  },
  body: {
    margin: "0 0 120px",
  },
}

export default theme

export const GlobalStyle = createGlobalStyle`

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
  margin: ${theme.body.margin};
}
`
