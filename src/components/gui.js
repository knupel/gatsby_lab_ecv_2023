import React from "react";
import { Link, navigate } from "gatsby";


export function NavCell({to, children}) {
	function mouse_click(event) {
		event.preventDefault();
		navigate(to);
	}
	return <div onClick={mouse_click}>
		{children}
	</div>
}

export function LinkCell({to, children}) {
	return<li><Link to={to}>{children}</Link></li>
}