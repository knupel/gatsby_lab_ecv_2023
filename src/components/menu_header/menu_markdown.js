import React from "react";

import { NavCell } from "../gui";
import { useStaticQuery, graphql } from "gatsby";

export function MenuMD() {
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
	for(let i = 0 ; i <  allFile.edges.length ; i++) {
		let buffer = allFile.edges[i].node.childrenMarkdownRemark[0].frontmatter;
		menu.push(buffer);
	}

	return <>
	{menu.map((elem, key) => (
		<NavCell to={elem.slug}>{elem.menu}</NavCell>
	))}
	</>
}