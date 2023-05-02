import React from "react";
import "./BoxAddYourEvent.css";
import Popup from "reactjs-popup";
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
					<div>
						<i className="fa fa-calendar"/>
						<i className="fa fa-plus-circle"/>
					</div>
					<h4>Add your event</h4>
				</a>

				<Popup
					trigger={<a>How to proceed?</a>}
					modal
					closeOnDocumentClick
				>
					<div className={"BoxAddYourEvent-Howto"}>
						<h2>How to add an event?</h2>
						<h3>Step 1: Log into your CYBERSECURITY Luxembourg account</h3>
						<div>Use your CYBERSECURITY Luxembourg credentials to identity.</div>
						<div>If you don't have an account, please create one with the "I want to create an account"
						button of the login page.</div>
						<img src={"/img/howto-1.png"}/>
						<h3>Step 2: Select the article page</h3>
						<img src={"img/howto-2.png"}/>
						<h3>Step 3: Add a new article</h3>
						<div>You can add the new article by filling in the title and the entity of the article.</div>
						<div>If you don't have any entity on the list, you should proceed
						to a claim or a registration of your entity via this <a
							href="https://community.cybersecurity.lu/add_entity"
							target="_blank"
							rel="noreferrer">link</a>.</div>
						<img src={"img/howto-3.png"}/>
						<h3>Step 4: Click the editing button of your new article</h3>
						<div>Now the article has been created, we can edit the content by
						selecting the "Open editor" button.</div>
						<img src={"img/howto-4.png"}/>
						<h3>Step 5: Edit the event</h3>
						<div>Complete the edition by filling the following fields:</div>
						<ul>
							<li>Title: You already have filled the title, it can now be modified</li>
							<li>Type: It is important to set the article as an "EVENT"</li>
							<li>Abstract: Set a small description of the event</li>
							<li>Status: By making it "PUBLIC", it will become visible on the
							CYBERSECURITY Luxembourg platform (https://cybersecurity.lu)</li>
							<li>Start date</li>
							<li>End date</li>
							<li>Edit image: Add an image to illustrate your event</li>
							<li>Edit body: You can fill an external URL to redirect to your web page</li>
						</ul>
						<img src={"img/howto-5.png"}/>
						<h3>All set!</h3>
						<div>You are now all done! The CSWL team wil revise your event and add it into the event list.</div>
					</div>
				</Popup>
			</div>
		);
	}
}
