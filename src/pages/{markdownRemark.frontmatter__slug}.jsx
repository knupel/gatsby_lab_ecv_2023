import React from "react"
import { graphql } from "gatsby";

import { Layout } from "./../components/struct/layout";


function Contenu(props) {

  const { frontmatter, html } = props.info;
  return <>
    BLABLA
  </>

}

export default function Generic({data}) {
  const { markdownRemark } = data;
	return <Layout>
    <Contenu info={markdownRemark}/>
	</Layout>
}


export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
