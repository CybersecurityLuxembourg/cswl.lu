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

		// Centralized image mapping
		this.imageMap = {
			default: {
				background: "/img/cswl_2023_bg.jpg",
				logo: "/img/CSWL_2025_SPRING_CSWL_16-9_copy.svg"
			},
			gala: {
				background: "/img/cswl_2023_bg_dark.png",
				logo: "/img/CSWL_Socials_GALA_2025LOGO.svg"
			},
			spring: {
				background: "/img/cswl_2023_bg.jpg",
				logo: "/img/CSWL_2025_SPRING_LINKEDIN_COMPANY_BANNER.svg"
			},
			autumn: {
				background: "/img/cswl_2023_bg.jpg",
				logo: "/img/CSWL_2025_Autumn_LINKEDIN_POST.svg"
			}
		};

		this.state = {
			lhc: null,
			analytics: null,
			backgroundImage: `url('${this.imageMap.default.background}')`,
			logoImage: `url('${this.imageMap.default.logo}')`,
			bgOpacity: 1,
		};
	}

	componentDidMount() {
		// Pre-load all images immediately
		Object.values(this.imageMap).forEach(({ background, logo }) => {
			new Image().src = background;
			new Image().src = logo;
		});

		this.updateBackgroundAndLogo();
		this.getAnalytics();
		this.getLHC();

		this.scrollListener = () => {
			const opacity = 1 - (window.scrollY / window.innerHeight * 1.5);
			this.setState({ bgOpacity: Math.max(0, opacity) });
		};

		window.addEventListener("scroll", this.scrollListener);

		// Listen for route changes
		this.unlisten = this.props.history.listen(() => {
			requestAnimationFrame(() => {
				this.updateBackgroundAndLogo();
			});
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
		this.unlisten();
	}

	updateBackgroundAndLogo() {
		const { pathname } = this.props.location;
		const route = pathname.substring(1) || 'default';
		const images = this.imageMap[route] || this.imageMap.default;

		this.setState({
			backgroundImage: `url('${images.background}')`,
			logoImage: `url('${images.logo}')`
		});
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

				<div id="bg" className="bg fixed" style={{
					backgroundImage: logoImage,
					opacity: bgOpacity,
					transform: "none",
					transition: "background-image 0.3s ease-in-out"
				}} />
				<Footer/>
			</div>
		);
	}
}

export default withRouter(InsideApp);