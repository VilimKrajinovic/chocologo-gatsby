import { darken } from "polished"

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
  galleryImages: {
    paddingTop: "30vh",
    width: "500px",
    height: "500px",
    minWidth: "200px",
    minHeight: "200px",
  },
}

export default theme
