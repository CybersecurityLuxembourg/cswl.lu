import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import "./PageGala.css";
import { Carousel } from "react-responsive-carousel";
import { NotificationManager as nm } from "react-notifications";
import Modal from 'react-modal';
import { getRequest } from "../../utils/request.jsx";
import { dictToURI } from "../../utils/url.jsx";
import Entity from "../item/Entity.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

Modal.setAppElement('#root');

const SponsoringPackages = lazy(() => import('./PageGala/SponsoringPackages'));

const GalaCategory = React.memo(({ title, description, onClick }) => (
    <div onClick={onClick} className="gala-categoryItem">
        {title}
        <i className="gala-categoryItemDescription"><br />{description}</i>
    </div>
));

GalaCategory.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

const GalaCategories = React.memo(({ openModal }) => (
    <div className="gala-category">
        <GalaCategory
            title="CISO of the Year 2024"
            description="Apply now and Click here!"
            onClick={() => openModal('cisoOfTheYear2024')}
        />
        <GalaCategory
            title="DPO of the Year 2024"
            description="Apply now and Click here!"
            onClick={() => openModal('dpoOfTheYear2024')}
        />
        <GalaCategory
            title="Most Promising Young Talent 2024"
            description=""
            onClick={() => openModal('mostPromising24')}
        />
        <GalaCategory
            title="Bestpaper@hack.lu 2024"
            description=""
            onClick={() => openModal('bestpaperhack24')}
        />
        <GalaCategory
            title="Cybersecurity Startup Award 2024"
            description=""
            onClick={() => openModal('CybersecurityStartAward')}
        />
    </div>
));

GalaCategories.propTypes = {
    openModal: PropTypes.func.isRequired,
};

const PageGala = ({ lhc, analytics }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');
    const [springPartners, setSpringPartners] = useState([]);
    const [autumnPartners, setAutumnPartners] = useState([]);
    const [isSponsoringPackagesLoaded, setSponsoringPackagesLoaded] = useState(false);

    const openModal = useCallback((category) => {
        setModalIsOpen(true);
        setCurrentCategory(category);
    }, []);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
        setCurrentCategory('');
    }, []);

    const getPartners = useCallback((partnerType, setPartners) => {
        if (lhc && analytics) {
            const tv = analytics.taxonomy_values
                .filter((v) => v.category === "CYBERSECURITY WEEK PARTNER 2024")
                .filter((v) => v.name === partnerType);

            if (tv.length > 0) {
                const params = {
                    taxonomy_values: tv.map((t) => t.id),
                };

                getRequest("public/get_public_entities?" + dictToURI(params),
                    (data) => setPartners(data),
                    (response) => nm.warning(response.statusText),
                    (error) => nm.error(error.message)
                );
            }
        }
    }, [lhc, analytics]);

    useEffect(() => {
        getPartners("SPRING EDITION PARTNER", setSpringPartners);
        getPartners("AUTUMN EDITION PARTNER", setAutumnPartners);
    }, [getPartners]);

    const renderModalContent = useMemo(() => {
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
                            <a href="https://community.cybersecurity.lu/form?tab=14">
                                <b>Apply here!</b></a>
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
                        <div style={{textAlign: 'center'}}>
                            <img src="/img/slide_time_CISO.png" alt="Timeline"/>
                        </div>
                    </div>
                );
            case 'dpoOfTheYear2024':
                return (
                    <div>
                        <h2>DPO of the Year 2024</h2>
                        <p>This recognition is personal and is meant as a career-booster.</p>
                        <p>The CISO of the Year Award has been created to give a platform to the talented professionals
                            that make up the information security community of Luxembourg. The purpose of this
                            recognition
                            is to highlight the vision and achievements of the winners as well as to extend their
                            network
                            and visibility in order to encourage more meaningful exchanges within the community.</p>
                        <p>The CISO of the Year becomes the Ambassador of the community for the coming year and will be
                            invited to several events to represent the Luxembourg ecosystem.</p>
                        <p>The CISO of the Year will also remain within the CISO of the Year-awarded family as (s)he
                            will
                            become the next Vice-President of the jury one year following the nomination, and
                            respectively
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
                            <a href="https://community.cybersecurity.lu/form?tab=15">
                                <b>Apply here!</b></a>
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
                            <img src="/img/slides_DPO.png" alt="Timeline"/>
                        </div>

                    </div>
                );
            case 'mostPromising24':
                return (
                    <div>
                        <h2>Most Promising Young Talent</h2>
                        <p>The Most Promising Young Talent award will celebrate the national team that will represent
                            Luxembourg at the European Cybersecurity Challenge 2024</p>
                        <p><b>Find more out about the team <a target="_blank" rel="noopener noreferrer" href="https://lcsc.lu">here</a></b></p>
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
    }, [currentCategory]);

    const renderPartners = useCallback((partners) => {
        return partners.map((partner, index) => (
            <Entity key={index} info={partner} />
        ));
    }, []);

    return (
        <div id="main" className="PageGala light-fade-in-effect">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                contentLabel="Category Modal"
            >
                <button onClick={closeModal}>Close</button>
                {renderModalContent}
            </Modal>

            <div>
                <h2>SAVE THE DATE!</h2>
                <p>The Gala & Awards Night will take place on 22 October 2025 at Parc Hotel Alvisse!</p>
            </div>

            <h2>BECOME A PARTNER!</h2>
            <p>Enhance your visibility within the cybersecurity community by partnering with us! Reach out to <a
                href="mailto:info@lhc.lu">info(at)lhc(dot)lu</a>!</p>


            <h2>CSWL 2024 album & video</h2>
            <div className="responsive-iframe-container">
                <iframe
                    src="https://www.youtube.com/embed/uxPLxkA4rfk?si=SpwxJJ90IDL93Wod"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16].map((num) => (
                    <LazyLoadImage                        key={num}
                        src={`/img/album/BLA_${num}.jpg`}
                        alt={`CSWL 2024 picture ${num}`}
                        effect="blur"
                    />
                ))}
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
                        <td><b>2024</b></td>
                        <td>
                            <div>
                                <LazyLoadImage className="profile" src="/img/1677170558464.png"
                                               alt=" Luc Cottin award" effect="blur"/>
                            </div>
                           Luc Cottin
                            <a className="linkedin-link" href="https://www.linkedin.com/in/luccottin/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                        </td>
                        <td>
                            <div>
                                <LazyLoadImage className="profile" src="/img/BLA_6858.jpg"
                                               alt="julien winkin award" effect="blur"/>
                            </div>
                            Claudio Orlando Miele
                            <a className="linkedin-link" href="https://www.linkedin.com/in/claudio-orlando-miele-439461138/, "><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>2023</b></td>
                        <td>
                            Franck Bedell
                            <a className="linkedin-link" href="https://www.linkedin.com/in/franckbedell/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://open.spotify.com/episode/2neFPrxXGDp2ziDO7EWwsL?si=f085000fbc65489c">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                        <td>
                            Julien Winkin
                            <a className="linkedin-link" href="https://www.linkedin.com/in/julienwinkin/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://open.spotify.com/episode/1xib3kK7re9Mt2rPdg7doV?si=Fbzn3MAVSOWi7UVptqRaX">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><b>2022</b></td>
                        <td>
                            Guy Isler
                            <a className="linkedin-link" href="https://www.linkedin.com/in/guy-isler-21184875/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/fvMgd2C1cVKxThrpxedAVA">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                        <td>
                            Maximilien Spielmann
                            <a className="linkedin-link" href="https://www.linkedin.com/in/max-spielmann-369963269/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/vhZkZy7GSG92gPzkDk1Uw2">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><b>2021</b></td>
                        <td>
                            Dalia Khader
                            <a className="linkedin-link" href="https://www.linkedin.com/in/dalia-khader-2b13b6a/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/jXVXXgX3TkCUa5j9TpgcQq">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                        <td>
                            Matthieu Gatineau
                            <a className="linkedin-link" href="https://www.linkedin.com/in/matthieu-gatineau-78ba3611/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/wMo5GxPmupHLonZzWHU4ED">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><b>2020</b></td>
                        <td>
                            Stephane Bianchin
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/oPHoWo16WbAyT3WXPfYxzC">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                        <td>
                            Eric Bedell
                            <a className="linkedin-link" href="https://www.linkedin.com/in/eric-bedell-86916b11/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/uEwSJfMM4C1VTLB4EhFHaa">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><b>2019</b></td>
                        <td>
                            Jelena Zelenovic Matone
                            <a className="linkedin-link" href="https://www.linkedin.com/in/jelenazelenovic/"><i
                                className="fa fa-linkedin"/></a>
                            <br/>
                            <a href="https://peertube.securitymadein.lu/w/ifxKNoiuDhttnnBfA6CSYh">
                                <LazyLoadImage src="/img/Letz talk about cyber logo_transparent.png" alt="LTAC logo"
                                               effect="blur"/>
                            </a>
                        </td>
                        <td>
                            Stéphane Omnes
                            <a className="linkedin-link" href="https://www.linkedin.com/in/stephaneomnes/"><i
                                className="fa fa-linkedin"/></a>
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

            <h2>Spring Partners</h2>
            <div className="partners-container">
                {renderPartners(springPartners)}
            </div>

            <h2>Autumn Partners</h2>
            <div className="partners-container">
                {renderPartners(autumnPartners)}
            </div>
        </div>
    );
};

PageGala.propTypes = {
    lhc: PropTypes.object,
    analytics: PropTypes.object,
};

export default React.memo(PageGala);