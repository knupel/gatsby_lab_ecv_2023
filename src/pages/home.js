import React from "react";

import { Layout } from "../components/struct/layout.js"

// Dans le cadre d'une page on peut utiliser le Query global
// par contre dans le cadre d'un composant cela n'est pas possble donc ici
// on utilise la fonction hook de gatsby pour l'appeler en local.

// ici c'est encore plus particulier car on doit passer par la page index pour recevoir la graphql ???

// export default function Home({data}) {
// 	console.log("data query from index",data);
// 	return <Layout>
// 		<h1>Home</h1>
// 	</Layout>
// }

export default function Home() {
	return <Layout>
		<h1>Home</h1>
	</Layout>
}



