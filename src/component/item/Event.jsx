import React, { Component } from "react";
import "./Event.css";
import dompurify from "dompurify";
import { Link } from "react-router-dom";
// import NoImage from "../box/NoImage.jsx";
import { getApiURL } from "../../utils/env.jsx";
import { dateToString } from "../../utils/date.jsx";

export default class Event extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return <article>
			<header>
				<span className="date">
					{dateToString(this.props.info.start_date, "DD MMM YYYY HH:mm")}
					&nbsp;-&nbsp;
					{dateToString(this.props.info.end_date, "DD MMM YYYY HH:mm")}
				</span>

				<h2>
					<a
						href={this.props.info.link}
						target="_blank"
						rel="noreferrer"
					>
						{this.props.info.title}
					</a>
				</h2>
			</header>
			
			<a
				href={this.props.info.link}
				target="_blank"
				rel="noreferrer"
				className="image fit"
			>
				<img src={getApiURL() + "public/get_public_image/" + this.props.info.image}/>
			</a>

			<p>
				<div dangerouslySetInnerHTML={{
					__html:
					dompurify.sanitize(this.props.info.abstract),
				}} />
			</p>

			<ul className="actions">
				<li>
					<a
						href={this.props.info.link}
						target="_blank"
						rel="noreferrer"
						className="button"
					>
						Know more
					</a>
				</li>
			</ul>
		</article>;
	}
}
