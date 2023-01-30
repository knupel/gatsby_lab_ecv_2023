import React from "react";

import { NavCell } from "../gui";
import tree from "./../../../media/tree.json";

import { useStaticQuery, graphql } from "gatsby";

const style_box = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	maxWidth: "600px",
}

function MenuMD() {
	// GRAPHQL
	const data = useStaticQuery(
	graphql`
		query {
			allFile(filter: {sourceInstanceName: {eq: "markdown pages"}}) {
				edges {
					node {
						childrenMarkdownRemark {
							frontmatter {
								slug
								menu
								title
							}
						}
					}
				}
			}
		}
	`
	)

	const { allFile } = data;
	const menu = [];

	return <></>
}


export function Menu() {
	return(<div style={style_box}>
		<NavCell to="/">{tree.fr.home}</NavCell>
		<NavCell to="/pagea">{tree.fr.main}</NavCell>
		<NavCell to="/pageb">{tree.fr.about}</NavCell>
		<NavCell to="/pagec">{tree.fr.contact}</NavCell>
		</div>
	)
}