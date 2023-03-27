import React from "react";
import "./PageFall.css";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import Event from "../item/Event.jsx";

export default class PageFall extends React.Component {
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
				.filter((v) => v.name === "CSWL 2023 - FALL EDITION");

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
			<div id={"PageFall"} id={"main"}>
				<img
					src={"/img/CSWL23_AUTUMN_nodate_CSWL 16-9.jpg"}
					alt="CSWL 2023 AUTUMN"
				/>

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

				<h2>Agenda</h2>

				<section className="posts">
					{this.state.events
						? this.state.events.items.map((e) => (
							<Event
								info={e}
							/>
						))
						: <Loading
							height={400}
						/>
					}
				</section>

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
