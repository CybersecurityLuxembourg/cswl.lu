import React from "react";
import "./PageGala.css";
import { NotificationManager as nm } from "react-notifications";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import { getPrivateAppURL } from "../../utils/env.jsx";
import Entity from "../item/Entity.jsx";

export default class PageGala extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		this.getSpringPartners();
		this.getAutumnPartners();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.lhc !== this.props.lhc) {
			this.getSpringPartners();
			this.getAutumnPartners();
		}

		if (prevProps.analytics !== this.props.analytics) {
			this.getSpringPartners();
			this.getAutumnPartners();
		}
	}

	getSpringPartners(page) {
		if (this.props.lhc && this.props.analytics) {
			const tv = this.props.analytics.taxonomy_values
				.filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2023")
				.filter((v) => v.name === "SPRING EDITION PARTNER");

			if (tv.length > 0) {
				const params = {
					taxonomy_values: tv.map((t) => t.id),
				};

				getRequest.call(this, "public/get_public_entities?" + dictToURI(params), (data) => {
					this.setState({
						springPartners: data,
					});
				}, (response) => {
					nm.warning(response.statusText);
				}, (error) => {
					nm.error(error.message);
				});
			}
		}
	}

	getAutumnPartners(page) {
		if (this.props.lhc && this.props.analytics) {
			const tv = this.props.analytics.taxonomy_values
				.filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2023")
				.filter((v) => v.name === "AUTUMN EDITION PARTNER");

			if (tv.length > 0) {
				const params = {
					taxonomy_values: tv.map((t) => t.id),
				};

				getRequest.call(this, "public/get_public_entities?" + dictToURI(params), (data) => {
					this.setState({
						autumnPartners: data,
					});
				}, (response) => {
					nm.warning(response.statusText);
				}, (error) => {
					nm.error(error.message);
				});
			}
		}
	}

	getContent(list) {
		const content = [];

		list.map((e) => {
			content.push(
				<Entity
					info={e}
				/>
			);
		})

		return content
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id={"main"} className="PageGala light-fade-in-effect">
				<h2>Save the date!</h2>

				<p>The traditional Gala & Awards Night will
				take place on <b>19 October 2023</b> evening.</p>

				<p>Let’s recall some of last year’s memories!</p>

				<br/><br/>

				<div style={{ paddingBottom:"50px" }}>
					<div style={{ position: "relative", paddingBottom:"50%", width: "100%" }}>
						<iframe
							style={{ width: "100%", height:"100%", position: "absolute", left: 0, top: 0 }}
							title="CSWL 2022 - RECAP"
							width="100%"
							height="100%"
							src="https://peertube.securitymadein.lu/videos/embed/81bd7059-432d-4182-92cc-caa62e88ee72"
							frameborder="0"
							allowfullscreen=""
							sandbox="allow-same-origin allow-scripts allow-popups"
						/>
					</div>
				</div>
			</div>
		);
	}
}
