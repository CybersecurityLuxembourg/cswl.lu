import React from "react";
import "./PageAutumn.css";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import Event from "../item/Event.jsx";

export default class PageAutumn extends React.Component {
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

		if (prevProps.analytics !== this.props.analytics) {
			this.getEvents();
		}
	}

	getEvents(page) {
		if (this.props.lhc && this.props.analytics) {
			const tv = this.props.analytics.taxonomy_values
				.filter((v) => v.category === "EVENT CATEGORY")
				.filter((v) => v.name === "CSWL 2023 - AUTUMN EDITION");

			if (tv.length > 0) {
				const params = {
					entities: this.props.lhc.id,
					type: "EVENT",
					taxonomy_values: tv.map((t) => t.id),
					page: page || 1
				};

				getRequest.call(this, "public/get_public_articles?" + dictToURI(params), (data) => {
					this.setState({
						events: data,
					});
				}, (response) => {
					nm.warning(response.statusText);
				}, (error) => {
					nm.error(error.message);
				});
			}
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
			<div id={"main"} className="PageAutumn light-fade-in-effect">
				<h2>Agenda</h2>

				<section className="posts">
					{this.state.events
						&& this.state.events.items.map((e) => (
							<Event
								info={e}
							/>
						))
					}
				</section>

				{!this.state.events
					&& <Loading
						height={400}
					/>
				}

				{this.state.events
					&& this.state.events.pagination.total === 0
					&& <Message
						text={"No event found"}
						height={400}
					/>
				}
			</div>
		);
	}
}
