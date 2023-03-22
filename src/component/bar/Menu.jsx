import React from "react";
import "./Menu.css";
import { NotificationManager as nm } from "react-notifications";
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
			<nav id="nav">
				<ul className="links">
					<li className="active"><a href="/">Massively</a></li><li className=""><a href="/generic-page">Generic Page</a></li>
					<li><a href="/#footer">Contact</a></li>
					<li className="active"><a href="http://localhost:1313/">English</a></li>
					<li><a href="http://localhost:1313/es/">Español</a></li>
				</ul>
				<ul className="icons">
					<li><a href="https://twitter.com/" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="https://facebook.com" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
					<li><a href="https://instagram.com" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="https://www.linkedin.com" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
					<li><a href="https://github.com/" className="icon fa-github"><span className="label">GitHub</span></a></li>
					<li><a href="https://youtube.com/" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
					<li><a href="https://plus.google.com/" className="icon fa-google-plus"><span className="label">Google Plus</span></a></li>
					<li><a href="https://last.fm/" className="icon fa-lastfm"><span className="label">Last.fm</span></a></li>
					<li><a href="https://flickr.com/" className="icon fa-flickr"><span className="label">Flickr</span></a></li>
				</ul>
			</nav>
		);
	}
}
