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

	getContent() {
		if (this.props.info.website) {
			return <a
				href={this.props.info.website}
				target={"_blank"}
				rel={"noreferrer"}
			>
				{this.getImage()}
			</a>
		}

		return this.getImage();
	}

	getImage() {
		if (this.props.info.image) {
			return <img src={getApiURL() + "public/get_public_image/" + this.props.info.image}/>
		}

		return <div>
			<i className="fa fa-building"/>
			<h3>{this.props.info.name}</h3>
		</div>;
	}

	render() {
		return <article className="Entity">
			<div>{this.getContent()}</div>
		</article>;
	}
}
