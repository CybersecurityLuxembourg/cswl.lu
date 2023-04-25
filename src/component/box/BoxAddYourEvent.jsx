import React from "react";
import "./BoxAddYourEvent.css";
import { getPrivateAppURL } from "../../utils/env.jsx";

export default class BoxAddYourEvent extends React.Component {
	render() {
		return (
			<div className={"BoxAddYourEvent"}>
				<a
					href={getPrivateAppURL()}
					rel="noreferrer"
					target="_blank"
					alt="Add your event"
				>
					<i className="fa fa-calendar"/>
					<h4>Add your event</h4>
				</a>
			</div>
		);
	}
}
