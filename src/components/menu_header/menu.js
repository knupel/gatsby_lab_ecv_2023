import React from "react";

import { NavCell } from "../goto";

const style_box = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	maxWidth: "600px",
}



export function Menu() {
	return(<div style={style_box}>
		<NavCell to="/">Home</NavCell>
		<NavCell to="/pagea">AAA</NavCell>
		<NavCell to="/pageb">BBB</NavCell>
		<NavCell to="/pagec">CCC</NavCell>
		</div>
	)
}