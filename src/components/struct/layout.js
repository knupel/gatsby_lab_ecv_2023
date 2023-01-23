import React from "react";

import { Header} from "./header"
import { Footer} from "./footer"

import "./layout.css"
import { get_css_value } from "../../utils/utils"

const style_layout = {
	background: get_css_value("--color_3"),
}

export function Layout(props) {

	return (
		<div style={style_layout} className="design">
		<Header/>
		 {props.children}
		 <Footer/>
		</div>
	)
}