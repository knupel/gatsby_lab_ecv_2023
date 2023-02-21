import * as React from "react"

import Home from "./home.js"
import { graphql } from "gatsby";

// Dans le cadre d'une page on peut utiliser le Query global

const IndexPage = ({data}) => {
  return (
    <Home data={data}/>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "accueil" } } }) {
      edges {
        node {
          frontmatter {
          categorie
          menu
          lang
          title
          }
          html
        }
      }
    }
  }
`;