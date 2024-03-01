import React from "react";
import "./PageAutumn.css";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import { getPrivateAppURL } from "../../utils/env.jsx";
import Event from "../item/Event.jsx";

export default class PageAutumn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: null,
			coreEventTitle: "HACK.LU 2024",
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
				.filter((v) => v.name === "CSWL 2024 - AUTUMN EDITION");

			if (tv.length > 0) {
				const params = {
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

	getContent() {
		const content = [];

		this.state.events.items
			.filter((e) => e.title.toUpperCase() !== this.state.coreEventTitle)
			.map((e) => {
			content.push(
				<Event
					info={e}
				/>
			);
		})

		content.push(<article>
			<BoxAddYourEvent/>
		</article>);

		return content
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id={"main"} className="PageAutumn light-fade-in-effect">
				<h2>Core event</h2>

				<section className="PageAutumn-coreevent">
					{this.state.events
						&& this.state.events.items
						.filter((e) => e.title.toUpperCase() === this.state.coreEventTitle)
						.map((e) => {
							return <Event
								info={e}
							/>
						}
					)}
				</section>

				<h2>Full agenda</h2>

				<section className="posts">
					{this.state.events
						&& this.getContent()
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
