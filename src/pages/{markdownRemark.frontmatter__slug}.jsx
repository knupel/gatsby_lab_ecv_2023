import React from "react"
import { graphql } from "gatsby";

import { Layout } from "./../components/struct/layout";


export default function Generic({data}) {
	console.log("data", data);

  const { markdownRemark } = data;
  console.log("markdownRemark", markdownRemark);

  const { frontmatter, html } = markdownRemark;
  console.log("frontmatter", frontmatter);
  console.log("html", html);

	return <Layout>
    {frontmatter.title}
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
