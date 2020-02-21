import * as React from "react";

import {createGlobalStyle, ThemeProvider} from "styled-components";
import "../fonts/Raleway-Regular.ttf";
import "../fonts/Lato-LightItalic.ttf";

import Header from "../components/Header";
import AngledStrip from "../components/AngledStrip";

import {graphql} from "gatsby";
import FixedBackground from "../components/FixedBackground";
import Caption from "../components/Caption";

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: Raleway;
src: url(${"../fonts/Raleway-Regular.ttf"}) format('truetype');
font-style: normal;
}


@font-face {
font-family: Lato;
src: url(${"../fonts/Lato-LightItalic.ttf"}) format('truetype');
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
    backgroundImages: {
        height: "60em",
    }
};

const Index = ({data}) => {
    return (
        <div>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Header title="Chocologo" description={"Vaša najslađa poruka"}
                        img={data.headerBackground.childImageSharp.fluid.src}/>
                <AngledStrip title={"Who we are?"}
                             description={`We are a small chocolate company located in Zagreb, Croatia\nOur chocolates are made with the finest Belgian ingredients and melted on perfect temperatures\nDecorated with your own personalized photos and logos.`}/>
                <FixedBackground img = {data.firstFixedBackground.childImageSharp.fluid.src}>
                    <Caption caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, mollitia."}/>
                </FixedBackground>
                <AngledStrip title={"What we do?"} description={"We are a small chocolate company located in Zagreb, Croatia\nOur chocolates are made with the finest Belgian ingredients and melted on perfect temperatures\nDecorated with your own personalized photos and logos."}/>
                <FixedBackground img = {data.secondFixedBackground.childImageSharp.fluid.src}>
                    <Caption caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, mollitia."}/>
                </FixedBackground>
            </ThemeProvider>
        </div>
    );
};

export const query = graphql`
    {
        headerBackground: file(relativePath: {eq: "background_main.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        firstFixedBackground: file(relativePath: {eq: "first.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        secondFixedBackground: file(relativePath: {eq: "second.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export default Index;
