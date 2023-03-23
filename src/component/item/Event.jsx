import React, { Component } from "react";
import "./Event.css";
import dompurify from "dompurify";
import { Link } from "react-router-dom";
import NoImage from "../box/NoImage.jsx";
import { getApiURL } from "../../utils/env.jsx";
import { dateToString } from "../../utils/date.jsx";
import CardSocialMedia from "./CardSocialMedia.jsx";

export default class Event extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	getBoxContent() {
		return <article>
        	<header>
	            <span className="date">August 15, 2019</span>
	            <h2>
	            	<a href="http://localhost:1313/post/comments-example/">
	            		Comments example
	            	</a>
	            </h2>
	        </header>
	        
	        <a
	        	href="http://localhost:1313/post/comments-example/"
	        	className="image fit"
	        >
	        	<img src="/images/pic04.jpg" alt="">
	        </a>

	        <p>es ac ante ipsum primisolor imperdiet do.</p>

	        <ul className="actions">
	            <li>
	            	<a
	            		href="http://localhost:1313/post/comments-example/"
	            		className="button"
	            	>
	            		Full Story
	            	</a>
	            </li>
	        </ul>
	    </article>;
	}

	render() {
		return this.props.info.link
			&& this.props.info.link.length > 0
			? <a
				href={this.props.info.link}
				target={"_blank"}
				rel="noreferrer"
				className="Event-link">
				{this.getBoxContent()}
			</a>
			: <Link
				to={"/event/" + this.props.info.handle}
				className="Event-link">
				{this.getBoxContent()}
			</Link>;
	}
}
