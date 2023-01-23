import React from "react";

import {NavCell} from "../goto";



export function Menu() {
	return(<>
		<NavCell to="/">Home</NavCell>
		<NavCell to="/pagea">AAA</NavCell>
		<NavCell to="/pageb">BBB</NavCell>
		<NavCell to="/pagec">CCC</NavCell>
		</>
	)
}