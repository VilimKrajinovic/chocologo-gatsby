import * as React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ImgStyled = styled(Img)`
  height: ${props => props.theme.pictureLinks.height};
  width: ${props => props.theme.pictureLinks.width};
  object-fit: cover;
  border-radius: 10px !important;
  margin: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: ${props => props.theme.pictureLinks.minHeight};
    width: ${props => props.theme.pictureLinks.minWidth};
  }
`

const GalleryImage = props => {
  return <ImgStyled fluid={props.fluid} alt="image"></ImgStyled>
}

const Gallery = props => {
  return (
    <>
      <Container>
        <Row>
          {props.data.allFile.edges.map(edge => {
            return (
              <Col>
                <GalleryImage fluid={edge.node.childImageSharp.fluid} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Gallery
