import React from "react";
import "./PageHome.css";
import {Link} from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import {getRequest} from "../../utils/request.jsx";
import {dictToURI} from "../../utils/url.jsx";
import Event from "../item/Event.jsx";
import {getPrivateAppURL} from "../../utils/env.jsx";

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
                        The CYBERSECURITY Week Luxembourg 2024, the national campaign
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

                <div className={"editions-small"}>
                    <div className={"edition-white"}/>
                    <div className={"edition"}>
                        <h3>Spring edition<br/>in June 2024</h3>
                        <p>Core event:</p>
                        <a
                            href="https://www.nexus2050.com/"
                            rel="noreferrer"
                            target="_blank">
                            <img
                                src={"/img/spring_core_event.png"}
                                alt="CSWL 2024 Spring light"
                            />
                        </a>
                    </div>
                    <div className={"edition"}>
                        <h3>Autumn edition<br/>in October 2024</h3>
                        <p>Core event:</p>
                        <a
                            href="https://hack.lu/"
                            rel="noreferrer"
                            target="_blank">

                           <b>hack.lu<br/>
                            22 – 25 October 2024<br/>
                            Parc Hotel Alvisse, Luxembourg<br/></b>
                            <img
                                src={"/img/hacklu2024.png"}
                                alt="CSWL 2024 Hack.lu"
                            />
                        </a>
                    </div>
                    <div className={"edition-white"}/>
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
                    <div className={"edition-white"}/>
                    <div className={"edition"}>
                        <a
                            href="/spring"
                            rel="noreferrer"
                            target="_blank">
                            <img
                                src={"/img/short_2024_Spring.png"}
                                alt="CSWL 2024 Spring light"
                            />

                        </a>
                    </div>
                    <div className={"edition"}>
                    <a
                            href="/autumn"
                            rel="noreferrer"
                            target="_blank">
                            <img
                                src={"/img/short_2024_Autumn.png"}
                                alt="CSWL 2024 Autumnn light"
                            />
                        </a>
                    </div>
                    <div className={"edition-white"}/>
                </div>

                <div className={"editions"}>
                    <div className={"edition"}/>

                    <BoxAddYourEvent/>

                    <div className={"edition"}/>
                </div>

                <div className={"editions"}>
                    <div className={"edition"}/>

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

                    <div className={"edition"}/>
                </div>
            </div>
        );
    }
}
