import React from "react";
import "./PageHome.css";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import Event from "../item/Event.jsx";
import { getPrivateAppURL } from "../../utils/env.jsx";

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
				<div className={"description"}>
					<p>
						The CYBERSECURITY Week Luxembourg 2023 will frame the events
						that will be organised by CYBERSECURITY Luxembourg ecosystem
						members pursuing the objective of widening and increasing
						cybersecurity awareness as well as fostering collaboration. 
					</p>

					<p>
						This year, the CSWL will be divided into 2 key sessions:
					</p>

					<div className={"editions-small"}>
						<div className={"edition"}/>
						<div className={"edition"}>
							<a
								href="https://www.ictspring.com/"
								rel="noreferrer"
								target="_blank">
								<img
									src={"/img/ict_spring_2023.png"}
									alt="CSWL 2023 Spring light"
								/>
							</a>
						</div>
						<div className={"edition"}>
							<a
								href="https://hack.lu/"
								rel="noreferrer"
								target="_blank">
								<img
									src={"/img/hack_lu_2023.png"}
									alt="CSWL 2023 Spring light"
								/>
							</a>
						</div>
						<div className={"edition"}/>
					</div>

					<p>
						A series of events will be organised addressing different
						types of topics, targeting a wide range of audiences. 
					</p>

					<p>
						Because joint efforts have greater resonance, the CSWL aims at bringing
						together and federating the cybersecurity community, in one hand, and
						promoting the hard work put together by this same community following
						a common objective of achieving cyber resilience, in the other hand.
					</p>
				</div>

				<div className={"editions"}>
					<div className={"edition"}>
						<Link to="spring">
							<img
								src={"/img/cswl_2023_spring_light.jpg"}
								alt="CSWL 2023 Spring light"
							/>
						</Link>
					</div>

					<div className={"edition"}>
						<Link to="autumn">
							<img
								src={"/img/cswl_2023_autumn_light.jpg"}
								alt="CSWL 2023 Autumn light"
							/>
						</Link>
					</div>
				</div>

				<div className={"editions"}>
					<div className={"edition"}/>

					<div className={"brand-kit"}>
						<a
							href={getPrivateAppURL()}
							rel="noreferrer"
							target="_blank"
							alt="Brand kit"
						>
							<i className="fa fa-calendar"/>
							<h4>Add your event</h4>
						</a>
					</div>

					<div className={"edition"}/>
				</div>

				<div className={"editions"}>
					<div className={"edition"}/>

					<div className={"brand-kit"}>
						<a
							href={"https://cloudshare.secin.lu/index.php/s/56iykxe2s7SnGyG"}
							rel="noreferrer"
							target="_blank"
							alt="Brand kit"
						>
							<i className="fa fa-picture-o"/>
							<h4>Download the brand kit</h4>
						</a>
					</div>

					<div className={"edition"}/>
				</div>
			</div>
		);
	}
}
