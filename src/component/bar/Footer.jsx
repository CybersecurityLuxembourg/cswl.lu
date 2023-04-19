import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { getPrivateAppURL, getApiURL } from "../../utils/env.jsx";

export default class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id="Footer">
				<div className="Footer-content">
					<div className="Footer-contact">
						<div className="Footer-title">CONTACT</div>
						<br/>
						<div>Luxembourg House of Cybersecurity</div>
						<div>122 rue Adolphe Fischer</div>
						<div>L-1521 Luxembourg</div>
						<br/>
						<div>(+352) 274 00 98 601</div>
						<div>
							<a href="mailto:info@cybersecurity-luxembourg.com">info@cybersecurity-luxembourg.com</a>
						</div>
						<br/>
						<div>Copyright © Luxembourg House of Cybersecurity g.i.e. 2023</div>
					</div>

					<div className="Footer-space"/>

					<div className="Footer-links">
						<div className="Footer-network">
							<a
								href="https://twitter.com/cyberluxembourg"
								rel="noreferrer"
								target="_blank"
								title="Twitter CYBERLUX"
								className="text-capitalize">
								<i className="fa fa-twitter Footer-network"/>
							</a>
							<a
								href="https://www.linkedin.com/company/cybersecurity-luxembourg/"
								rel="noreferrer"
								target="_blank"
								title="LinkedIn CYBERLUX"
								className="text-capitalize">
								<i className="fa fa-linkedin Footer-network"/>
							</a>
							<a
								href="https://github.com/CybersecurityLuxembourg/"
								rel="noreferrer"
								target="_blank"
								title="GitHub CYBERLUX"
								className="text-capitalize">
								<i className="fa fa-github Footer-network"/>
							</a>
						</div>

						<div className="Footer-documentation-and-terms">
							<a
								href={getApiURL() + "public/get_public_document/CYBERLUX_Legal_Notice.pdf"}
								rel="noreferrer"
								target="_blank"
								title="Terms of use"
								className="text-capitalize">
								<i className="fa fa-file-text"/> Terms of Service & Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
