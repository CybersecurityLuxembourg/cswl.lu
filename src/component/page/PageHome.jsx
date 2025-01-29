import React from "react";
import "./PageHome.css";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";

export default class PageHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    scrollToElement() {
        const div = document.getElementById(location.hash && location.hash.replaceAll("#", ""));

        if (div) {
            div.scrollIntoView({behavior: "smooth"});
        }
    }

    changeState(field, value) {
        this.setState({[field]: value});
    }

    render() {
        return (
            <div id={"main"} className={"PageHome light-fade-in-effect"}>
                <div className={"description"}>
                    <p>
                        The CYBERSECURITY Week Luxembourg 2025, the national campaign
                        coordinated by the <a
                        href="https://www.lhc.lu"
                        target="_blank"
                        rel="noreferrer">
                        Luxembourg House of Cybersecurity</a>,
                        will frame the events
                        that will be organised by CYBERSECURITY Luxembourg ecosystem
                        members pursuing the objective of widening and achieving
                        cybersecurity awareness as well as fostering collaboration.
                    </p>

                    <p>
                        The CSWL is divided into 2 key sessions.
                    </p>
                </div>
                <div className="editions-small">
                    <div className="edition">
                        <h3>Spring edition<br/>in June 2025</h3>
                        <p>Core event:</p>

                        <a href="/spring"
                           rel="noreferrer"
                           target="_blank">
                            <b>Luxembourg GRC Conference</b><br/>5 June 2025
                            <div className="image-container">
                                <img
                                    src="/img/CSWL_2025_SPRING_LINKEDIN_COMPANY_BANNER.svg"
                                    alt="CSWL 2025 Spring light"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="edition">
                        <h3>Autumn edition<br/>in October 2025</h3>
                        <p>Core event:</p>

                        <a href="https://hack.lu/"
                           rel="noreferrer"
                           target="_blank">
                            <b>hack.lu</b><br/>
                           21 - 24 October 2025<br/>
                           Parc Hotel Alvisse, Luxembourg
                            <div className="image-container">
                                <img
                                    src="/img/hacklu2024.png"
                                    alt="CSWL 2024 Hack.lu"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="edition">
                        <h3>SPECIAL EDITION 2025</h3>
                        <p>Core event:</p>

                        <a href="#"
                           rel="noreferrer"
                           target="_blank">
                            <b>CSWL @Expo Osaka 2025</b><br/>
                            28 August - 03 September 2025
                            <div className="image-container">
                                <img
                                    src="/img/pavilion.jpg"
                                    alt="OSAKA"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                <div className={"description"}>

                    <p>
                        In addition, a series of events will be organised addressing different
                        types of topics, targeting a wide range of audiences.
                    </p>

                    <p>
                        Because joint efforts have greater resonance, the CSWL aims at bringing
                        together and federating the cybersecurity community, in one hand, and
                        promoting the hard work put together by this same community following
                        a common objective of achieving cyber resilience, in the other hand.
                    </p>
                </div>
                <div className={"editions-small"}>
                  
                    <div className={"edition"}>
                        <a
                            href="/spring"
                            rel="noreferrer"
                            target="_blank">
                            <img
                                src={"/img/CSWL_2025_SPRING_LINKEDIN POST-07.svg"}
                                alt="CSWL 2025 Spring light"
                            />

                        </a>
                    </div>
                    <div className={"edition"}>
                        <a
                            href="/autumn"
                            rel="noreferrer"
                            target="_blank">
                            <img
                                src={"/img/CSWL_2025_Autumn.svg"}
                                alt="CSWL 2025 Autumnn light"
                            />
                        </a>
                    </div>
                    
                </div>

                <div className={"editions"}>
                    <BoxAddYourEvent/>
                </div>

                <div className={"editions"}>
                    <div className={"brand-kit"}>
                        <a
                            href={"https://cloudshare.secin.lu/index.php/s/gwY9iYHBWa8ETZ7"}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-picture-o"/>
                            <h4>Download the brand kit</h4>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
