import * as React from "react";

import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import Raleway from "../../static/fonts/Raleway-Regular.ttf";
import Lato from "../../static/fonts/Lato-LightItalic.ttf";
import Riesling from "../../static/fonts/Riesling.ttf";

import Header from "../components/Header";
import AngledStrip from "../components/AngledStrip";

import {graphql} from "gatsby";
import FixedBackground from "../components/FixedBackground";
import Caption from "../components/Caption";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PictureLink from "../components/PictureLink";

import "../../static/styles/bootstrap.css";

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
  margin: 0;
  font-family: Raleway, sans-serif;
}
`;

const StyledContainer = styled(Container)`
  padding-top: ${props => props.theme.pictureLinks.paddingTop};
  width: 80vw;
`;

const StyledCol = styled(Col)`
  float: none;
  margin: 0 auto;
`;

const theme = {
    typography: {
        heading: {
            color: "white",
            fontSize: "6vw",
            description: {
                fontSize: "1vw"
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
    },
    pictureLinks: {
        paddingTop: "30vh",
        width: "300px",
        height: "300px",
        minWidth: "200px",
        minHeight: "200px",
        description: {
            fontSize: "30px",
        }
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

                <FixedBackground img={data.firstFixedBackground.childImageSharp.fluid.src}>
                    <Caption caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, mollitia."}/>
                </FixedBackground>

                <AngledStrip title={"What we do?"}
                             description={"We are a small chocolate company located in Zagreb, Croatia\nOur chocolates are made with the finest Belgian ingredients and melted on perfect temperatures\nDecorated with your own personalized photos and logos."}/>

                <FixedBackground img={data.secondFixedBackground.childImageSharp.fluid.src}>
                    <Caption caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, mollitia."}/>
                </FixedBackground>

                <AngledStrip title={"Our products?"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis debitis expedita facilis neque praesentium suscipit veniam voluptatem? Amet aperiam assumenda fugit harum incidunt libero maiores minus nostrum quod reiciendis!"}/>

                <FixedBackground img={data.thirdFixedBackground.childImageSharp.fluid.src} height="auto">
                    <StyledContainer>
                        <Row className="justify-content-center text-center">
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                            <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                                <PictureLink to={"/"}
                                             src={data.image1.childImageSharp.fluid.src}
                                             description={"Lorem ipsum dolor sit amet."}/>
                            </StyledCol>
                        </Row>
                    </StyledContainer>
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
        thirdFixedBackground: file(relativePath: {eq: "third.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        image1: file(relativePath: {eq: "chocolate1.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export default Index;
