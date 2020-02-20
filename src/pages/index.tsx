import * as React from "react";

import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import {createGlobalStyle} from "styled-components";
import Raleway from "../fonts/Raleway-Regular.ttf";

import Header from "../components/Header";
import AngledStrip from "../components/AngledStrip";

import {graphql} from "gatsby";

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: Raleway;
src: url(${Raleway}) format('truetype');
font-style: normal;
}

body{
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: Raleway, sans-serif;
}

`;

const theme = {
    typography: {
        heading: {
            color: "white",
            fontSize: "6rem",
            description: {
                fontSize: "1rem"
            }
        },
        strips: {
            color: "white",
            fontSize: "4rem"
        }
    },
    strips: {
        gradient: {
            from: "#f77700",
            to: "#bf6000"
        }
    },
    main: "mediumseagreen"
};

const Index = ({data}) => {
    return (
        <div>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Header title="Chocologo" description={"Vaša najslađa poruka"} img={data.img.childImageSharp.fluid.src}/>
                <AngledStrip title={"Who we are?"}
                             description={`We are a small chocolate company located in Zagreb, Croatia\nOur chocolates are made with the finest Belgian ingredients and melted on perfect temperatures\nDecorated with your own personalized photos and logos.`}/>
            </ThemeProvider>
        </div>
    );
};


export const query = graphql`
    {
        img: file(relativePath: {eq: "background_main.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export default Index;
