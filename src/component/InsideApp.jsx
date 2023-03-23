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
		this.getAnalytics();
		this.getLHC();
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
				    <h1>CYBERSECURITY Week<br/>Luxembourg</h1>
				    <p>Catchy phrase</p>
				    <ul class="actions">
				        <li><a href="#header" class="button icon solo fa-arrow-down scrolly">Continue</a></li>
				    </ul>
				</div>

				<Route path="/:path?" render={(props) => <Menu
					lhc={this.state.lhc}
					analytics={this.state.analytics}
					{...props}
				/>}/>

				<div id="main">
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

						{/* 404 */}

						<Route
							render={(props) => <Page404
								{...props}
							/>}
						/>
					</Switch>
				</div>

				<div className="bg fixed" style={{ transform: "none" }}/>
				{/* <Footer/> */}
			</div>
		);
	}
}

export default withRouter(InsideApp);
