import React from "react";
import "./PageHome.css";
import { Link } from "react-router-dom";


export default class PageHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: null,
		};
	}

	componentDidMount() {
		this.getEvents();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.lhc !== this.props.lhc) {
			this.getEvents();
		}
	}

	getEvents(page) {
		if (this.props.lhc) {
			const params = {
				entities: this.props.lhc.id,
				type: "EVENT",
				page: page || 1
			};

			getRequest.call(this, "public/get_public_articles?" + dictToURI(params), (data2) => {
				this.setState({
					events: data2.items,
				});
			}, (response) => {
				nm.warning(response.statusText);
			}, (error) => {
				nm.error(error.message);
			});
		}
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
