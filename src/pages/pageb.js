import React from "react";
import { Layout } from "./../components/struct/layout.js"

import { graphql } from "gatsby";

// Dans le cadre d'une page on peut utiliser le Query global

export const PageB = ({data}) => {
  console.log("query global page B",data);
  return <Layout><h1>Projet B</h1></Layout>;
};

export default PageB;

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "à propos" } } }) {
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


