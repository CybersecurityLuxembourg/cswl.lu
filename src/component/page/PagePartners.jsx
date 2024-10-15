import React from "react";
import "./PagePartners.css";
import { NotificationManager as nm } from "react-notifications";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import { getPrivateAppURL } from "../../utils/env.jsx";
import Entity from "../item/Entity.jsx";

export default class PagePartners extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			springPartners: null,
			autumnPartners: null,
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
				.filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2024")
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
				.filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2024")
				.filter((v) => v.name === "SPRING EDITION PARTNER");

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
			<div id={"main"} className="PagePartners light-fade-in-effect">
				<h2>Autumn edition partners</h2>

				<section className="posts">
					{this.state.autumnPartners
						&& this.getContent(this.state.autumnPartners)
					}
				</section>

				{!this.state.autumnPartners
					&& <Loading
						height={400}
					/>
				}

				{this.state.autumnPartners
					&& this.state.autumnPartners.length === 0
					&& <Message
						text={"No partner found"}
						height={400}
					/>
				}
				<h2>Spring edition partners</h2>

				<section className="posts">
					{this.state.springPartners
						&& this.getContent(this.state.springPartners)
					}
				</section>

				{!this.state.springPartners
					&& <Loading
						height={400}
					/>
				}

				{this.state.springPartners
					&& this.state.springPartners.length === 0
					&& <Message
						text={"No partner found"}
						height={400}
					/>
				}
			</div>
		);
	}
}
