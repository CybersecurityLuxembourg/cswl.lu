import React from "react";
import "./PageGala.css";
import {Carousel} from "react-responsive-carousel";
import Popup from "reactjs-popup";
import {NotificationManager as nm} from "react-notifications";
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import Loading from "../box/Loading.jsx";
import Message from "../box/Message.jsx";
import BoxAddYourEvent from "../box/BoxAddYourEvent.jsx";
import {getRequest} from "../../utils/request.jsx";
import {dictToURI} from "../../utils/url.jsx";
import {getPrivateAppURL} from "../../utils/env.jsx";
import Entity from "../item/Entity.jsx";
import ShadowBox from "../box/ShadowBox.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement('#root');

export default class PageGala extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            currentCategory: '',
            springPartners: [],
            autumnPartners: []
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                .filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2024")
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
                .filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2024")
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

    openModal(category) {
        this.setState({modalIsOpen: true, currentCategory: category});
    }

    closeModal() {
        this.setState({modalIsOpen: false, currentCategory: ''});
    }

    renderModalContent() {
        const {currentCategory, springPartners, autumnPartners} = this.state;

        switch (currentCategory) {
            case 'cisoOfTheYear2024':
                return (
                    <div>
                        <h2>CISO of the Year 2024</h2>
                        <p>
                            This recognition is personal and is meant as a career-booster.
                        </p>
                        <p>
                            The CISO of the Year Award has been created to give a platform to the talented professionals
                            that make up the information security community of Luxembourg. The purpose of this
                            recognition is to highlight the vision and achievements of the winners as well as to extend
                            their network and visibility in order to encourage more meaningful exchanges within the
                            community.
                        </p>
                        <p>
                            The CISO of the Year becomes the Ambassador of the community for the coming year and will be
                            invited to several events to represent the Luxembourg ecosystem.
                        </p>
                        <p>
                            The CISO of the Year will also remain within the CISO of the Year-awarded family as (s)he
                            will become the next Vice-President of the jury one year following the nomination, and
                            respectively President of the Jury on the second year after his/her nomination.
                        </p>

                        <h2>WHY YOU SHOULD APPLY?</h2>
                        <ul>
                            <li>To give visibility to your work and achievements as well as your organisation and
                                increase your credibility
                            </li>
                            <li>To expand your network and be evaluated by peers</li>
                            <li>To become even more active in the cybersecurity community in Luxembourg and help
                                strengthen its voice (via various opportunities such as participating in interviews,
                                networking sessions, conferences, awareness sessions, mentorships, etc)
                            </li>
                        </ul>

                        <h2>WHO CAN APPLY?</h2>
                        <p>
                            The Award is not only intended for candidates having the CISO function, but any other
                            information security lead with a similar role as a CISO’s. Of course, CISO-on-demand and ISO
                            are more than welcome to apply.
                        </p>

                        <h2>HOW TO APPLY?</h2>
                        <h3>A 2-step process:</h3>
                        <p>
                            1/ Apply by filling in the dedicated form (available soon) and adding your most recent CV.
                            Applications must be submitted <strong>between 09 September 2024 and 30 September
                            2024</strong>.
                        </p>
                        <p>
                            2/ Interview with the jury. The selected candidates will be invited to meet the members of
                            the jury on <strong>the afternoon of 15 October 2024 at the Luxembourg House of
                            Cybersecurity</strong>. Attendance in person is compulsory.
                        </p>
                        <p>
                            The winner will be announced at the gala evening and prize-giving ceremony on <strong>24
                            OCTOBER 2024</strong>. Candidates must be present.
                        </p>

                        <h2>TIMELINE</h2>
                        <img src={"/img/timeline.png"} alt={"ciso timeline"}/>
                    </div>
                );
            case 'dpoOfTheYear2024':
                return (
                    <div>
                        <h2>DPO of the Year 2024</h2>
                        <p>This recognition is personal and is meant as a career-booster.</p>
                        <p>The CISO of the Year Award has been created to give a platform to the talented professionals
                        that make up the information security community of Luxembourg. The purpose of this recognition
                        is to highlight the vision and achievements of the winners as well as to extend their network
                        and visibility in order to encourage more meaningful exchanges within the community.</p>
                        <p>The CISO of the Year becomes the Ambassador of the community for the coming year and will be
                        invited to several events to represent the Luxembourg ecosystem.</p>
                        <p>The CISO of the Year will also remain within the CISO of the Year-awarded family as (s)he will
                        become the next Vice-President of the jury one year following the nomination, and respectively
                            President of the Jury on the second year after his/her nomination.</p>

                        <h2>WHY YOU SHOULD APPLY?</h2>
                        <ul>
                            <li>Professional recognition</li>
                            <li>Motivation and commitment of DPOs</li>
                            <li>Promoting compliance and data protection</li>
                            <li>Improving sector practices</li>
                            <li>Professional and personal development</li>
                            <li>Benchmarking and standards</li>
                            <li>Ethical and social responsibilities</li>
                            <li>Networking and community</li>
                        </ul>

                        <h2>WHO CAN APPLY?</h2>
                        <p>
                            The prize is not only open to candidates who are DPOs, but to any other Luxembourg-based
                            data protection officer with a role similar to that of a DPO. Applications are of course
                            open to DPOs on request.
                        </p>

                        <h2>HOW TO APPLY?</h2>
                        <h3>A 2-step process:</h3>
                        <p>
                            1/ Apply by filling in the dedicated form (available soon) and adding your most recent CV.
                            Applications must be submitted <strong>between 09 September 2024 and 30 September
                            2024</strong>.
                        </p>
                        <p>
                            2/ Interview with the jury. The selected candidates will be invited to meet the members of
                            the jury on <strong>the afternoon of 14 October 2024 at the Luxembourg House of
                            Cybersecurity</strong>. Attendance in person is compulsory.
                        </p>
                        <p>
                            The winner will be announced at the gala evening and prize-giving ceremony on <strong>24
                            OCTOBER 2024</strong>. Candidates must be present.
                        </p>

                        <h2>TIMELINE</h2>
                        <div style={{textAlign: 'center'}}>
                            <img src="/img/timeline.png" alt="Timeline"/>
                        </div>

                    </div>
                );
            case 'mostPromising24':
                return (
                    <div>
                        <h2>Most Promising Young Talent</h2>
                        <p>The Most Promising Young Talent award will celebrate the national team that will represent Luxembourg at the European Cybersecurity Challenge 2024</p>
                        <p><b>Find more out about the team <a target={"_blank"} href={"https://lcsc.lu"}>here</a></b></p>
                    </div>
                );
            case 'bestpaperhack24':
                return (
                    <div>
                        <h2>Bestpaper@hack.lu 2024</h2>
                        <b>Information to be released soon</b>
                    </div>
                );
            case 'CybersecurityStartAward':
                return (
                    <div>
                        <h2>Cybersecurity Startup Award 2024</h2>
                        <b>Information to be released soon</b>
                    </div>
                );
            default:
                return <div>No content available</div>;
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
        this.setState({[field]: value});
    }

    render() {
        return (

            <div id={"main"} className="PageGala light-fade-in-effect">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="modal"
                    contentLabel="Category Modal"
                >
                    <button onClick={this.closeModal}>Close</button>
                    {this.renderModalContent()}
                </Modal>
                <div>
                    <h2>SAVE THE DATE!</h2>
                    <p>The Gala & Awards Night will take place on 24 October 2024 at Hotel Alvisse!</p>
                    <b>5 categories will be rewarded (click on a category to know more!):</b>
                    <div className="gala-category">
                        <div onClick={() => this.openModal('cisoOfTheYear2024')}
                             className="gala-categoryItem">CISO-of-the-Year
                            2024
                        </div>
                        <div onClick={() => this.openModal('dpoOfTheYear2024')} className="gala-categoryItem">DPO-of-the-Year
                            2024
                        </div>
                        <div onClick={() => this.openModal('mostPromising24')}
                             className="gala-categoryItem">Most-Promising-Young-Talent 2024
                        </div>
                        <div onClick={() => this.openModal('bestpaperhack24')} className="gala-categoryItem">Bestpaper@hack.lu
                            2024
                        </div>
                        <div onClick={() => this.openModal('CybersecurityStartAward')}
                             className="gala-categoryItem">Cybersecurity-Startup-Award 2024
                        </div>
                    </div>
                </div>

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
                    <table className="table">
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
                                    <img className="profile" src="/img/franck_bedell_award.png"
                                         alt={"franck bedell award"}/>
                                </div>
                                Franck Bedell
                                <a className="linkedin-link" href="https://www.linkedin.com/in/franckbedell/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://open.spotify.com/episode/2neFPrxXGDp2ziDO7EWwsL?si=f085000fbc65489c"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                            <td>
                                <div>
                                    <img className="profile" src="/img/julien_winkin_award.png"/>
                                </div>
                                Julien Winkin
                                <a className="linkedin-link" href="https://www.linkedin.com/in/julienwinkin/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://open.spotify.com/episode/1xib3kK7re9Mt2rPdg7doV?si=Fbzn3MAVSOWi7UVptqRaX"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td><b>2022</b></td>
                            <td>
                                Guy Isler
                                <a className="linkedin-link" href="https://www.linkedin.com/in/guy-isler-21184875/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/fvMgd2C1cVKxThrpxedAVA"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                            <td>
                                Maximilien Spielmann
                                <a className="linkedin-link"
                                   href="https://www.linkedin.com/in/max-spielmann-369963269/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/vhZkZy7GSG92gPzkDk1Uw2"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td><b>2021</b></td>
                            <td>
                                Dalia Khader
                                <a className="linkedin-link" href="https://www.linkedin.com/in/dalia-khader-2b13b6a/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/jXVXXgX3TkCUa5j9TpgcQq"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                            <td>
                                Matthieu Gatineau
                                <a className="linkedin-link"
                                   href="https://www.linkedin.com/in/matthieu-gatineau-78ba3611/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/wMo5GxPmupHLonZzWHU4ED"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td><b>2020</b></td>
                            <td>
                                Stephane Bianchin
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/oPHoWo16WbAyT3WXPfYxzC"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                            <td>
                                Eric Bedell
                                <a className="linkedin-link" href="https://www.linkedin.com/in/eric-bedell-86916b11/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/uEwSJfMM4C1VTLB4EhFHaa"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td><b>2019</b></td>
                            <td>
                                Jelena Zelenovic Matone
                                <a className="linkedin-link" href="https://www.linkedin.com/in/jelenazelenovic/"><i
                                    class="fa fa-linkedin"/></a>
                                <br/>
                                <a href="https://peertube.securitymadein.lu/w/ifxKNoiuDhttnnBfA6CSYh"><img
                                    src="img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"/></a>
                            </td>
                            <td>
                                Stéphane Omnes
                                <a className="linkedin-link" href="https://www.linkedin.com/in/stephaneomnes/"><i
                                    class="fa fa-linkedin"/></a>
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
