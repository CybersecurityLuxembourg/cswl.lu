import React from "react";
import "./InsideApp.css";
import {
	Route, Switch, withRouter, Redirect
} from "react-router-dom";
import { NotificationManager as nm } from "react-notifications";
import { getRequest } from "../utils/request.jsx";
import Menu from "./bar/Menu.jsx";
import Footer from "./bar/Footer.jsx";
import PageHome from "./page/PageHome.jsx";
import PageAutumn from "./page/PageAutumn.jsx";
import PageSpring from "./page/PageSpring.jsx";
import PagePartners from "./page/PagePartners.jsx";
import PageGala from "./page/PageGala.jsx";
import Page404 from "./page/Page404.jsx";

class InsideApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lhc: null,
			analytics: null,
			backgroundImage: "url('../img/cswl_2023_bg.jpg')",
			logoImage: "url('../img/CSWL_2024.png')",
			bgOpacity: 1,
		};
	}

	componentDidMount() {
		this.updateBackgroundAndLogo();
		this.getAnalytics();
		this.getLHC();

		this.scrollListener = () => {
			const opacity = 1 - (window.scrollY / window.innerHeight * 1.5);
			this.setState({ bgOpacity: Math.max(0, opacity) });
		};

		window.addEventListener("scroll", this.scrollListener);

		this.unlisten = this.props.history.listen(() => {
			this.updateBackgroundAndLogo();
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
		this.unlisten();
	}

	updateBackgroundAndLogo() {
		const { pathname } = this.props.location;
		let backgroundImage = "url('../img/cswl_2023_bg.jpg')";
		let logoImage = "url('../img/CSWL_2025_SPRING_CSWL_16-9_copy.svg')";

		if (pathname === "/gala") {
			backgroundImage = "url('../img/cswl_2023_bg_dark.png')";
			logoImage = "url('../img/CSWL_Socials_GALA_2024LOGO.png')";
		} else if (pathname === "/spring") {
			logoImage = "url('../img/CSWL_2024_Spring_website.png')";
		} else if (pathname === "/autumn") {
			logoImage = "url('../img/CSWL_2024_Autumn-website.png')";
		}

		this.setState({ backgroundImage, logoImage });
	}

	getLHC() {
		getRequest.call(this, "public/get_public_entities?name=(LHC)", (data) => {
			if (data.length === 1) {
				this.setState({ lhc: data[0] });
			} else if (data.length === 0) {
				nm.error("LHC data not found. Please contact administrators.");
			} else {
				nm.error("Multiple entity found for LHC. Please contact administrators.");
			}
		}, (response) => {
			nm.warning(response.statusText);
		}, (error) => {
			nm.error(error.message);
		});
	}

	getAnalytics() {
		getRequest.call(this, "public/get_public_analytics", (data) => {
			this.setState({ analytics: data });
		}, (response) => {
			nm.warning(response.statusText);
		}, (error) => {
			nm.error(error.message);
		});
	}

	render() {
		const { lhc, analytics, backgroundImage, logoImage, bgOpacity } = this.state;

		return (
			<div id="wrapper" className="fade-in" style={{ backgroundImage }}>
				<div id="intro">
					<ul className="actions">
						<li><a href="#main" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
					</ul>
				</div>

				<Route path="/:path?" render={(props) => <Menu
					lhc={lhc}
					analytics={analytics}
					{...props}
				/>}/>

				<div>
					<Switch>
						<Route exact path="/" render={(props) => <PageHome lhc={lhc} analytics={analytics} {...props} />} />
						<Route exact path="/spring" render={(props) => <PageSpring lhc={lhc} analytics={analytics} {...props} />} />
						<Route exact path="/autumn" render={(props) => <PageAutumn lhc={lhc} analytics={analytics} {...props} />} />
						<Route exact path="/partners" render={(props) => <PagePartners lhc={lhc} analytics={analytics} {...props} />} />
						<Route exact path="/gala" render={(props) => <PageGala lhc={lhc} analytics={analytics} {...props} />} />
						<Route render={(props) => <Page404 {...props} />} />
					</Switch>
				</div>

				<div id="bg" className="bg fixed" style={{ backgroundImage: logoImage, opacity: bgOpacity, transform: "none" }} />
				<link rel="preload" as="image" href="/img/CSWL_2024.png"/>
				<link rel="preload" as="image" href="/img/CSWL_2024_Spring_website.png"/>
				<link rel="preload" as="image" href="/img/CSWL_2024_Autumn-website.png"/>
				<link rel="preload" as="image" href="/img/CSWL_Socials_GALA_2024LOGO.png"/>
				<Footer/>
			</div>
		);
	}
}

export default withRouter(InsideApp);