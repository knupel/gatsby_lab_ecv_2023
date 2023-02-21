import * as React from "react"

import { graphql } from "gatsby";
import Home  from "./home.js"

// Dans le cadre d'une page on peut utiliser le Query global

// const IndexPage = ({data}) => {
//   return (
//     <Home data={data}/>
//   )
// }

const IndexPage = () => {
  return (
    <Home/>
  )
}

export default IndexPage

export const myQuery = graphql`query {
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