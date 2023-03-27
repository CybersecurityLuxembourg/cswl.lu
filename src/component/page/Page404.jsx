import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

export default class Page404 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id={"main"} className="Page404">
				<div>
					<i className="icon fa-chain-broken"/>
					<br/>
					This link is broken
					<br/>
					<Link to="/">Back to the home page</Link>
				</div>
			</div>
		);
	}
}
