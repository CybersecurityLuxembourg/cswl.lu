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
						<div>19th October 2023<br/>as of 5:30 PM</div>
					</div>
					<div className="detail">
						<i className="fa fa-map-marker"/>
						<div>Kinepolis, Kirchberg Luxembourg</div>
					</div>
				</div>

				<p className="centered">The Awards & Gala Night is the flagship and closing
				event of the Cybersecurity Week Luxembourg campaign.</p>

				<p className="centered"><b><i>A magical night will unfold!</i></b></p>

				<p className="centered">The awards are a tribute to remarkable cybersecurity and
				privacy professionals as well as to the young generation of
				tomorrow’s experts whose achievements are making a significant
				impact to creating a safer digital space and ecosystem.</p>

				<div className="magician-row">
					<div>
						<div className="photo-magicien">
							<img
								src={"/img/Photo_magicien.jpg"}
								alt="Photo Christoph Wilke"
							/>
						</div>
					</div>
					<div>
						<p>Next to the annual awards celebration, you can expect a
						surprising show from the iPad magician Christoph Wilke followed
						by a walking dinner. A live-performance group will give the
						rhythm of the rest of the night - adding an extra touch of
						excitement to the evening!</p>
					</div>
				</div>

				<p className="centered"><b>The event is by invitation only and seats are limited.</b></p>

				<h2>Cybersecurity Awards</h2>

				<div className="awards">
					<Popup
						trigger={
							<div ref={this.ref1}>
								<ShadowBox
									title={"CISO of the Year"}
									icon={"fa fa-shield"}
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

								<p>The Award is not only intended for candidates having the
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
									<li>Take your chance by filling in the form below and add your
									most recent CV by 29 September 2023. The questionnaire invites
									you to share your vision and thoughts on information security in
									the current context as well as to present your greatest
									achievement(s) and/or challenging project(s) you have worked on.</li>
									<li>A jury (to be announced soon) will select the participants
									who will proceed to the next stage: the interview with the
									jury. Selected candidates will be invited to present their
									application to the jury.</li>
									<li>The winner will be announced at the Gala & Awards
									Night on <b>19 OCTOBER 2023</b>.</li>
								</ul>

								<button
									onClick={() => window.open(
										"https://community.cybersecurity.lu/form?tab=5",
										"_blank")}
									disabled={true}>
									Applications are now closed
								</button>
							</div>
						)}
					</Popup>
					<Popup
						trigger={
							<div ref={this.ref2}>
								<ShadowBox
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

								<p>The DPO Award is intended not only for the candidates
								having the official DPO function, but also for any other
								data protection and privacy responsible within an organisation
								of whatever size. It comes without saying that DPO-on-demand
								are also welcome to apply.</p>

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
									<li>Take your chance by filling in the form below and add your
									most recent CV by 29 September 2023. The questionnaire invites
									you to share your vision and thoughts on data privacy in the
									current context as well as to present your greatest achievement(s)
									and/or challenging project(s) you have worked on.</li>
									<li>A jury (to be announced soon) will select the
									participants who will proceed to the next stage: the
									interview with the jury. Selected candidates will be
									invited to present their application to the jury.</li>
									<li>The winner will be announced at the Gala & Awards
									Night on <b>19 OCTOBER 2023</b>.</li>
								</ul>

								<button
									onClick={() => window.open(
										"https://community.cybersecurity.lu/form?tab=6",
										"_blank")}
									disabled={true}>
									Applications are now closed
								</button>
							</div>
						)}
					</Popup>
					<Popup
						trigger={
							<div ref={this.ref3}>
								<ShadowBox
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
						trigger={
							<div ref={this.ref4}>
								<ShadowBox
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

								<p>The paper will be selected amongst the papers
								presented at hack.lu 2023. More details about the
								Call for Papers <a
									href="https://pretalx.com/hack-lu-2023/cfp"
									target="_blank"
									rel="noreferrer">
									here
									</a>.</p>
							</div>
						)}
					</Popup>
					<Popup
						trigger={
							<div ref={this.ref5}>
								<ShadowBox
									title={"Cybersecurity Startup Award 2023"}
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

								<div className="row">
									<div className="col-md-12">
										<h2>Cybersecurity Startup Award 2023</h2>
									</div>

									<div className="col-md-12">
										<h4>Calling all startups operating in Cybersecurity</h4>

										<p>Apply now, and before 14 August 2023, to <a
											href="https://www.startupluxembourg.com/fit-4-start"
											target="_blank"
											rel="noreferrer">Fit4Start
										</a>, the
										Luxembourg’s leading startup accelerator programme in
										order to get a chance to be selected for the Cybersecurity
										Startup Award 2023.</p>

										<p>Stay tuned, more details to be unveiled very soon…!</p>
									</div>
								</div>

								
							</div>
						)}
					</Popup>
				</div>

				<h2>Past editions</h2>

				<p>Rediscover the winners from previous years!</p>

				<div className="cisos-and-dpos">
					<table class="table">
						<thead>
							<tr>
								<th>Year</th>
								<th>CISOs of the Year</th>
								<th>DPOs of the Year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><b>2022</b></td>
								<td>
									<div>
										<img className="profile" src="/img/guy_isler_award.jpg"/>
									</div>
									Guy Isler
									<a className="linkedin-link" href="https://www.linkedin.com/in/guy-isler-21184875/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/fvMgd2C1cVKxThrpxedAVA"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
								<td>
									<div>
										<img className="profile" src="/img/maximilien_spielmann_award.jpg"/>
									</div>
									Maximilien Spielmann
									<a className="linkedin-link" href="https://www.linkedin.com/in/max-spielmann-369963269/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/vhZkZy7GSG92gPzkDk1Uw2"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
							</tr>
							<tr>
								<td><b>2021</b></td>
								<td>
									Dalia Khader
									<a className="linkedin-link" href="https://www.linkedin.com/in/dalia-khader-2b13b6a/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/jXVXXgX3TkCUa5j9TpgcQq"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
								<td>
									Matthieu Gatineau
									<a className="linkedin-link" href="https://www.linkedin.com/in/matthieu-gatineau-78ba3611/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/wMo5GxPmupHLonZzWHU4ED"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
							</tr>
							<tr>
								<td><b>2020</b></td>
								<td>
									Stephane Bianchin
									<br/>
									<a href="https://peertube.securitymadein.lu/w/oPHoWo16WbAyT3WXPfYxzC"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
								<td>
									Eric Bedell
									<a className="linkedin-link" href="https://www.linkedin.com/in/eric-bedell-86916b11/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/uEwSJfMM4C1VTLB4EhFHaa"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
							</tr>
							<tr>
								<td><b>2019</b></td>
								<td>
									Jelena Zelenovic Matone
									<a className="linkedin-link" href="https://www.linkedin.com/in/jelenazelenovic/"><i class="fa fa-linkedin"/></a>
									<br/>
									<a href="https://peertube.securitymadein.lu/w/ifxKNoiuDhttnnBfA6CSYh"><img src="img/logo-ltac-transparent.png" alt="LTAC logo"/></a>
								</td>
								<td>
									Stéphane Omnes
									<a className="linkedin-link" href="https://www.linkedin.com/in/stephaneomnes/"><i class="fa fa-linkedin"/></a>
								</td>
							</tr>
							<tr>
								<td><b>2018</b></td>
								<td>Grégory Nou</td>
								<td></td>
							</tr>
							<tr>
								<td><b>2017</b></td>
								<td>Maria Dolores Perez</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
