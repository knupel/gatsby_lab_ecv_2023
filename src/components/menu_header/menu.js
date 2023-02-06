import React from "react";

import { NavCell } from "../gui";
import tree from "./../../../media/tree.json";

import { MenuMD } from "./menu_markdown";


const style_box = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	maxWidth: "600px",
}


export function Menu() {
	return(<div style={style_box}>
		<NavCell to="/">{tree.fr.home}</NavCell>
		<NavCell to="/pagea">{tree.fr.main}</NavCell>
		<NavCell to="/pageb">{tree.fr.about}</NavCell>
		<NavCell to="/pagec">{tree.fr.contact}</NavCell>
		<MenuMD/>
		</div>
	)
}