import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "./Gallery"

const BrithdayDataRenderer = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { regex: "/birthdays/" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 500) {
                base64
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Gallery data={data}></Gallery>
    </>
  )
}

export default BrithdayDataRenderer
