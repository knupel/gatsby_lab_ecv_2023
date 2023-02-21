import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Layout } from "../components/struct/layout.js"

// Dans le cadre d'une page on peut utiliser le Query global
// par contre dans le cadre d'un composant cela n'est pas possble donc ici
// on utilise la fonction hook de gatsby pour l'appeler en local.

// mais ici il y a encore une exception c'est que c'est une page appelée depuis l'index

export default function Home({data}) {
	console.log("data query from page index",data);
	return <Layout>
			<h1>Home</h1>
	</Layout>
}



