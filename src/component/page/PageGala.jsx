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
								<td><b>2023</b></td>
								<td>
									<div>
										<img className="profile" src="/img/franck_bedell_award.png"/>
									</div>
									Franck Bedell
									<a className="linkedin-link" href="https://www.linkedin.com/in/franckbedell/"><i class="fa fa-linkedin"/></a>
								</td>
								<td>
									<div>
										<img className="profile" src="/img/julien_winkin_award.png"/>
									</div>
									Julien Winkin
									<a className="linkedin-link" href="https://www.linkedin.com/in/julienwinkin/"><i class="fa fa-linkedin"/></a>
								</td>
							</tr>
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
