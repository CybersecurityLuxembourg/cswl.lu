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
import { dictToURI } from "../utils/url.jsx";

class InsideApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lhc: null,
			analytics: null,
		};
	}

	componentDidMount() {
		this.changeBackground();
		this.changeLogo();
		this.getAnalytics();
		this.getLHC();

		addEventListener("scroll", (event) => {
			document.getElementById("bg").style.opacity = 1 - (document.documentElement.scrollTop / window.innerHeight * 1.5);
		});
	}

	componentWillMount() {
		this.unlistenLogo = this.props.history.listen((location, action) => {
			this.changeLogo();
		});

		this.unlistenBackground = this.props.history.listen((location, action) => {
			this.changeBackground();
		});
	}

	changeBackground() {
		const element = document.getElementById("App");

		if (location.pathname !== "/gala") {
			element.style.backgroundImage = "url('../img/cswl_2023_bg.jpg')";
		} else {
			element.style.backgroundImage = "url('../img/cswl_2023_bg_dark.png')";
		}
	}

	changeLogo() {
		const element = document.getElementById("bg");

		if (location.pathname === "/spring") {
			element.style.backgroundImage = "url('../img/cswl_2023_spring.png')";
		} else if (location.pathname === "/autumn") {
			element.style.backgroundImage = "url('../img/cswl_2023_autumn.png')";
		} else {
			element.style.backgroundImage = "url('../img/cswl_2023_main.png')";
		}
	}

	componentWillUnmount() {
		this.unlistenLogo();
		this.unlistenBackground();
	}

	getLHC() {
		getRequest.call(this, "public/get_public_entities?name=(LHC)", (data) => {
			if (data.length === 1) {
				this.setState({
					lhc: data[0],
				});
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
			this.setState({
				analytics: data,
			});
		}, (response) => {
			nm.warning(response.statusText);
		}, (error) => {
			nm.error(error.message);
		});
	}

	render() {
		return (
			<div id="wrapper" className="fade-in">
				<div id="intro">
				    <ul className="actions">
				        <li><a href="#main" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
				    </ul>
				</div>

				<Route path="/:path?" render={(props) => <Menu
					lhc={this.state.lhc}
					analytics={this.state.analytics}
					{...props}
				/>}/>

				<div>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <PageHome
								lhc={this.state.lhc}
								analytics={this.state.analytics}
								{...props}
							/>}
						/>
						<Route
							exact
							path="/spring"
							render={(props) => <PageSpring
								lhc={this.state.lhc}
								analytics={this.state.analytics}
								{...props}
							/>}
						/>
						<Route
							exact
							path="/autumn"
							render={(props) => <PageAutumn
								lhc={this.state.lhc}
								analytics={this.state.analytics}
								{...props}
							/>}
						/>
						<Route
							exact
							path="/partners"
							render={(props) => <PagePartners
								lhc={this.state.lhc}
								analytics={this.state.analytics}
								{...props}
							/>}
						/>
						<Route
							exact
							path="/gala"
							render={(props) => <PageGala
								lhc={this.state.lhc}
								analytics={this.state.analytics}
								{...props}
							/>}
						/>

						{/* 404 */}

						<Route
							render={(props) => <Page404
								{...props}
							/>}
						/>
					</Switch>
				</div>

				<div id="bg" className="bg fixed" style={{ transform: "none" }}/>
				<link rel="preload" as="image" href="/img/cswl_2023_main.png"/>
				<link rel="preload" as="image" href="/img/cswl_2023_spring.png"/>
				<link rel="preload" as="image" href="/img/cswl_2023_autumn.png"/>
				<Footer/>
			</div>
		);
	}
}

export default withRouter(InsideApp);
