import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Menu = () => {
	return (
		<Nav id="nav" className="mr-sm-2 ml-auto">
			<ul className="links">
				<li>
					<NavLink exact to="/" activeClassName={"active"} className={"nav-link-general"}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/spring" activeClassName={"active"} className={"nav-link-spring"}>
						Spring Edition
					</NavLink>
				</li>
				<li>
					<NavLink to="/autumn" activeClassName={"active"} className={"nav-link-autumn"}>
						Autumn Edition
					</NavLink>
				</li>
				<li>
					<NavLink to="/partners" activeClassName={"active"} className={"nav-link-general"}>
						Partners
					</NavLink>
				</li>
				<li>
					<NavLink to="/gala" activeClassName={"active"} className={"nav-link-general"}>
						Gala and Awards Night
					</NavLink>
				</li>
			</ul>
			<ul className="icons">
				<li>
					<a href="https://twitter.com/cyberluxembourg" className={"icon fa-twitter"} target="_blank" rel="noopener noreferrer">
						<span className="label">Twitter</span>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/cybersecurity-luxembourg/" className={"icon fa-linkedin"} target="_blank" rel="noopener noreferrer">
						<span className="label">LinkedIn</span>
					</a>
				</li>
			</ul>
		</Nav>
	);
};

export default Menu;