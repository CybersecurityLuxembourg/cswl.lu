import React from "react";
import "./PageGala.css";
import { Carousel } from "react-responsive-carousel";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
				<h2>CSWL 2023 album</h2>

				<Carousel
					dynamicHeight={false}
					showStatus={false}
					showThumbs={false}
					infiniteLoop={true}
					autoPlay={true}
					interval={5000}
				>
					<img src="/img/CSWL_2023_pict-11.jpg"/>
					<img src="/img/CSWL_2023_pict-5.jpg"/>
					<img src="/img/CSWL_2023_pict-4.jpg"/>
					<img src="/img/CSWL_2023_pict-9.jpg"/>
					<img src="/img/CSWL_2023_pict-10.jpg"/>
					<img src="/img/CSWL_2023_pict-12.jpg"/>
					<img src="/img/CSWL_2023_pict-6.jpg"/>
					<img src="/img/CSWL_2023_pict-8.jpg"/>
					<img src="/img/CSWL_2023_pict-13.jpg"/>
					<img src="/img/CSWL_2023_pict-1.jpg"/>
					<img src="/img/CSWL_2023_pict-7.jpg"/>
					<img src="/img/CSWL_2023_pict-2.jpg"/>
					<img src="/img/CSWL_2023_pict-3.jpg"/>
				</Carousel>

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
