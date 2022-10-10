import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import Bannerimg from '../../../assets/img/illustration/Banner.png'

function Banner(props) {
    return (
        <section className="banner-section banner-section-three">
            <div className="banner-slider">
                <div className="single-banner">
                    <div className="container container-1600">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="banner-content">
                                    <Fade left cascade duration={1500}>
                                        <div>
                                            <span className="promo-text">business &amp; consulting</span>
                                            <h1>
                                                Perfect Agency <br /> For Innovative <br /> Business
                                            </h1>
                                        </div>
                                    </Fade>
                                    <Fade bottom cascade duration={1500} delay={600}>
                                        <ul className="btn-wrap">
                                            <li>
                                                <Link to="/contact" className="main-btn">Get Started Now</Link>
                                            </li>
                                            <li>
                                                <Link to="/services" className="main-btn main-btn-3">Our Services</Link>
                                            </li>
                                        </ul>
                                    </Fade>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <Fade right duration={1500} delay={800}>
                                    <div className="banner-img text-right">
                                        <img className="banner-img" src={Bannerimg} alt="Banner" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="banner-shapes">
                        <div className="one" />
                        <div className="two" />
                        <div className="three" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;