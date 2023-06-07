import React from "react";
import "./PageGala.css";
import Popup from "reactjs-popup";
import { NotificationManager as nm } from "react-notifications";
import { Link } from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import { getPrivateAppURL } from "../../utils/env.jsx";
import Entity from "../item/Entity.jsx";
import ShadowBox from "../box/ShadowBox.jsx";



export default class PageGala extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.ref1 = React.createRef();
		this.ref2 = React.createRef();
		this.ref3 = React.createRef();
		this.ref4 = React.createRef();
		this.ref5 = React.createRef();
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
				<div className="details">
					<div className="detail">
						<i className="fa fa-calendar"/>
						<div>19th October 2023</div>
					</div>
					<div className="detail">
						<i className="fa fa-map-marker"/>
						<div>Kinepolis, Kirchberg Luxembourg</div>
					</div>
				</div>

				<p>The Awards & Gala Night is the flagship and closing event
				of the Cybersecurity Week Luxembourg that brings together the
				cybersecurity community and celebrates the most promising
				cybersecurity talents & professionals.</p>

				<h2>Cybersecurity Awards</h2>

				<div className="awards">
					<Popup
						className={"Popup-small-size"}
						trigger={
							<div ref={this.ref1}>
								<ShadowBox
									className="CyberWeekTheAwards-ShadowBox-award-inhouse"
									title={"CISO of the Year"}
									icon={"fa fa-shield"}
								/>
							</div>
						}
					>
						{(close) => (
							<div>
								<button
									className="close-button"
									onClick={() => close()}>
									<i className="fa fa-times"/>
								</button>

								<h2>CISO of the Year</h2>

								<h3>The purpose of the Award</h3>

								<p>This recognition is personal and is meant as a career-booster.</p>

								<p>The CISO of the Year Award has been created to give a
								platform to the talented professionals that make up the information
								security community of Luxembourg. The purpose of this recognition
								is to highlight the vision and achievements of the winners
								as well as to extend their network and visibility in order
								to encourage more meaningful exchanges within the community.</p>

								<p>The CISO of the Year becomes the Ambassador of the
								community for the coming year and will be invited to
								several events to represent the Luxembourg ecosystem.</p>

								<p>The CISO of the Year will also remain within the
								CISO of the Year-awarded family as (s)he will become
								the next Vice-President of the jury one year following
								the nomination, and respectively President of the Jury
								on the second year after his/her nomination.</p>

								<h3>Who can apply?</h3>

								<p>The Award is not only intended to candidates having the
								CISO function, but any other information security lead with
								a similar role as a CISO’s. Of course, CISO-on-demand and
								ISO are more than welcome to apply.</p>

								<h3>Why apply?</h3>

								<ul>
									<li>To give visibility to your work and achievements
									as well as your organisation and increase your credibility</li>
									<li>To expand your network and be evaluated by peers</li>
									<li>To become even more active in the cybersecurity
									community in Luxembourg and help strengthen its
									voice (via various opportunities such as participating
									in interviews, networking sessions, conferences, awareness
									sessions, mentorships, etc)</li>
								</ul>

								<h3>How to apply?</h3>

								<ul>
									<li>Take your chance by filling in this form and add
									your most recent CV.</li>
									<li>2In a second step, you will be sent a
									questionnaire. The questionnaire will invite you to
									share your vision and thoughts on information security
									in the current context as well as to present your greatest
									achievement(s) and/or challenging project(s) you have
									worked on.</li>
									<li>A jury (to be announced soon) will select the participants
									who will proceed to the next stage: the interview with the
									jury. Selected candidates will be invited to present their
									application to the jury.</li>
									<li>The winner will be announced at the Gala & Awards
									Night on <b>19 OCTOBER 2023</b>.</li>
								</ul>

								<button
									onClick={() => window.open(
										"https://community.cybersecurity.lu/form?tab=4",
										"_blank")}>
									Apply now
								</button>
							</div>
						)}
					</Popup>
					<Popup
						className={"Popup-small-size"}
						trigger={
							<div ref={this.ref2}>
								<ShadowBox
									className="CyberWeekTheAwards-ShadowBox-award-inhouse"
									title={"DPO of the Year"}
									icon={"fa fa-lock"}
								/>
							</div>
						}
						modal
					>
						{(close) => (
							<div>
								<button
									className="close-button"
									onClick={() => close()}>
									<i className="fa fa-times"/>
								</button>

								<h2>DPO of the Year</h2>

								<h3>The purpose of the Award</h3>

								<p>This recognition is personal and is meant as a career-booster.</p>

								<p>The DPO of the Year Award has been created to give a platform to the
								talented professionals that make up the data protection
								community of Luxembourg. The purpose of this recognition
								is to highlight the vision and achievements of the winners
								as well as to extend their network and visibility in order
								to encourage more meaningful exchanges within the community.</p>

								<p>The DPO of the Year becomes the Ambassador of the community
								for the coming year and will be invited to several events to
								represent the Luxembourg ecosystem.</p>

								<p>The DPO of the Year will also remain within the DPO
								of the Year-awarded family as (s)he will become the next
								Vice-President of the jury one year following the
								nomination, and respectively President of the Jury on the
								second year after his/her nomination.</p>

								<h3>Who can apply?</h3>

								<p>The Award is not only intended to candidates having the CISO
								function, but any other information security lead with a
								similar role as a CISO’s. Of course, CISO-on-demand
								and ISO are more than welcome to apply.</p>

								<h3>Why apply?</h3>

								<ul>
									<li>To give visibility to your work and achievements
									as well as your organisation and increase
									your credibility</li>
									<li>To expand your network and be evaluated by peers</li>
									<li>To become even more active in the cybersecurity
									community in Luxembourg and help strengthen its
									voice (via various opportunities such as participating
									in interviews, networking sessions, conferences, awareness
									sessions, mentorships, etc)</li>
								</ul>

								<h3>How to apply?</h3>

								<ul>
									<li>Take your chance by filling in this
									form and add your most recent CV.</li>
									<li>In a second step, you will be sent a
									questionnaire. The questionnaire will invite
									you to share your vision and thoughts on
									information security in the current context
									as well as to present your greatest achievement(s) and/or
									challenging project(s) you have worked on.</li>
									<li>A jury (to be announced soon) will select the
									participants who will proceed to the next stage: the
									interview with the jury. Selected candidates will be
									invited to present their application to the jury.</li>
									<li>The winner will be announced at the Gala & Awards
									Night on <b>19 OCTOBER 2023</b>.</li>
								</ul>

								<button
									onClick={() => window.open(
										"https://community.cybersecurity.lu/form?tab=3",
										"_blank")}>
									Apply now
								</button>
							</div>
						)}
					</Popup>
					<Popup
						className={"Popup-small-size"}
						trigger={
							<div ref={this.ref3}>
								<ShadowBox
									className="CyberWeekTheAwards-ShadowBox-award-inhouse"
									title={"Young Talent of the Year"}
									icon={"fa fa-trophy"}
								/>
							</div>
						}
						modal
					>
						{(close) => (
							<div>
								<button
									className="close-button"
									onClick={() => close()}>
									<i className="fa fa-times"/>
								</button>

								<h2>Young Talent of the Year</h2>

								<p>The Award will recognize the members of the national
								team, who participated in the European Cybersecurity
								Challenge (24-27 October 2023 in Hamar, Norway).</p>

								<p>More about the selection of the national team <a
									href="https://lcsc.lu/"
									target="_blank"
									rel="noreferrer">
									here.
									</a>
								</p>
							</div>
						)}
					</Popup>
					<Popup
						className={"Popup-small-size"}
						trigger={
							<div ref={this.ref4}>
								<ShadowBox
									className="CyberWeekTheAwards-ShadowBox-award-inhouse"
									title={"Best Paper @hack.lu 2023"}
									icon={"fa fa-book"}
								/>
							</div>
						}
						modal
					>
						{(close) => (
							<div>
								<button
									className="close-button"
									onClick={() => close()}>
									<i className="fa fa-times"/>
								</button>

								<h2>Best Paper @hack.lu 2023</h2>

								<p>The Award will recognize the commitment and
								contribution to the whole information
								security community.</p>
							</div>
						)}
					</Popup>
					<Popup
						className={"Popup-small-size"}
						trigger={
							<div ref={this.ref5}>
								<ShadowBox
									className="CyberWeekTheAwards-ShadowBox-award-inhouse"
									title={"Cybersecurity Startup of the Year"}
									icon={"fa fa-rocket"}
								/>
							</div>
						}
						modal
					>
						{(close) => (
							<div>
								<button
									className="close-button"
									onClick={() => close()}>
									<i className="fa fa-times"/>
								</button>

								<h2>Cybersecurity Startup Award 2023</h2>

								<p>Stay tuned… Details to be announced soon with
								exciting opportunities!</p>
							</div>
						)}
					</Popup>
				</div>
			</div>
		);
	}
}
