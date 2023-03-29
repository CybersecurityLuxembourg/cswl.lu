import React from "react";
import "./Menu.css";
import { NotificationManager as nm } from "react-notifications";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Message from "../box/Message.jsx";
import { dictToURI } from "../../utils/url.jsx";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	setHash(hash) {
		window.location.hash = hash;
	}

	render() {
		return (
			<Nav id="nav" className="mr-sm-2 ml-auto">
				<ul className="links">
					<Nav.Link>
						<Link to="/">
							<li className={window.location.pathname === "/" && "active"}><a>About</a></li>
						</Link>
					</Nav.Link>
					<Nav.Link className="nav-link-spring">
						<Link to="/spring">
							<li className={window.location.pathname === "/spring" && "active"}><a>Spring Edition</a></li>
						</Link>
					</Nav.Link>
					<Nav.Link className="nav-link-autumn">
						<Link to="/autumn">
							<li className={window.location.pathname === "/autumn" && "active"}><a>Autumn Edition</a></li>
						</Link>
					</Nav.Link>
				</ul>
				<ul className="icons">
					<li><a href="https://twitter.com/cyberluxembourg" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="https://www.linkedin.com/company/cybersecurity-luxembourg/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
				</ul>
			</Nav>
		);
	}
}
