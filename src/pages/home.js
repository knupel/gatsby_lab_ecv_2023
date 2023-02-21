import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Layout } from "../components/struct/layout.js"

// Dans le cadre d'une page on peut utiliser le Query global
// par contre dans le cadre d'un composant cela n'est pas possble donc ici
// on utilise la fonction hook de gatsby pour l'appeler en local.

export default function Home() {
	const data = useStaticQuery (
		graphql`query {
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
		`
	)
	console.log("data query local",data);
	return <Layout>
			<h1>Home</h1>
	</Layout>
}



