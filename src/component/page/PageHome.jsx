import React from "react";
import "./PageHome.css";
import { Link } from "react-router-dom";


export default class PageHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		window.addEventListener("hashchange", () => {
			this.scrollToElement();
		});

		this.scrollToElement()
	}

	scrollToElement() {
		const div = document.getElementById(location.hash && location.hash.replaceAll("#", ""));

		if (div) {
			div.scrollIntoView({ behavior: "smooth" });
		}
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id={"PageHome"}>
				fezfref
			</div>
		);
	}
}
