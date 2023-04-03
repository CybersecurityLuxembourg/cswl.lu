import React from "react";
import "./PageHome.css";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import Event from "../item/Event.jsx";

export default class PageHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
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
			<div id={"main"} className={"PageHome light-fade-in-effect"}>
				<p>
					The CYBERSECURITY Week Luxembourg - Spring Edition 2023 will frame the events
					that will be organised by CYBERSECURITY Luxembourg ecosystem members pursuing
					the objective of widening and increasing cybersecurity awareness. A series of
					events will be organised throughout the month of June, addressing different
					types of topics, targeting a wide range of audiences. Because joint efforts
					have greater resonance, the CSWL aims at bringing together and federating
					the cybersecurity community, in one hand, and promoting the hard work put
					together by this same community following a common objective of achieving
					cyber resilience, in the other hand.
				</p>

				<h2>Editions</h2>

				<div className={"editions"}>
					<div className={"edition"}>
						<Link to="spring">
							<div className={"spring"}>
								<i className="fa fa-pagelines"/>
								<h2>Spring</h2>
							</div>
						</Link>
					</div>

					<div className={"edition"}>
						<Link to="autumn">
							<div className={"autumn"}>
								<i className="fa fa-leaf"/>
								<h2>Automn</h2>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
