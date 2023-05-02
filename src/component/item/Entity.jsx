import React, { Component } from "react";
import "./Entity.css";
import dompurify from "dompurify";
import { Link } from "react-router-dom";
import { getApiURL } from "../../utils/env.jsx";
import { dateToString } from "../../utils/date.jsx";

export default class Entity extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return <article className="Entity">
			<header>
				<h2>
					<a
						href={this.props.info.link}
						target="_blank"
						rel="noreferrer"
					>
						{this.props.info.name}
					</a>
				</h2>
			</header>
			
			{this.props.info.image
				? <img src={getApiURL() + "public/get_public_image/" + this.props.info.image}/>
				: <i className="fa fa-building"/>}
		</article>;
	}
}
