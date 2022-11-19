import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo/Codeonus-Dark.png'
import shape1 from '../../assets/img/lines/01.png'
import shape2 from '../../assets/img/lines/02.png'

import services from "../../helpers/serviceHelper"
import { Fade } from 'react-reveal';


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const getCurrentYear = () => {
        let date = new Date()
        const year = date.getFullYear()
        return year === 2022 ? "" : ` - ${year}`
    }

    return (
        <footer>
            <div className="container">
                <div className="footer-widget">
                    <div className="row">
                        <div className="col-lg-4 col-sm-5 order-1">
                            <div className="widget site-info-widget">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                                <Fade bottom cascade>
                                    <p>Power of choice is untrammelled &amp; when nothing prevents our being able</p>
                                    <ul className="social-links">
                                        <li key="facebook"><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li key="twitter"><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                        <li key="linkedin"><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                        <li key="google"><Link to="#"><i className="fab fa-google" /></Link></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 order-2">
                            <div className="widget nav-widget">
                                <h4 className="widget-title">Services</h4>
                                <Fade bottom cascade>
                                    <ul>
                                        {services.map((item, i) => (
                                            <li key={i}><Link to={item.url} state={{ serviceId: item.id }}>{item.name}</Link></li>
                                        ))}
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-4 order-5">
                            <div className="row">
                                <div className="col-lg-5 col-sm-5">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">Company</h4>
                                        <Fade bottom cascade>
                                            <ul>
                                                <li key="about"><Link to="/about">About Comapny</Link></li>
                                                <li key="portfolio"><Link to="/portfolio">Portfolio</Link></li>
                                                <li key="statistics"><Link to="/statistics">Company Statistics</Link></li>
                                            </ul>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7">
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <Fade bottom cascade>
                                            <ul className="contact-infos">
                                                <li key="phone">
                                                    <Link to="#">
                                                        <i className="far fa-phone" />
                                                        +1 (226) 899-6424
                                                    </Link>
                                                </li>
                                                <li key="e-mail">
                                                    <Link to="#">
                                                        <i className="far fa-envelope-open" />
                                                        connect@codeonus.com
                                                    </Link>
                                                </li>
                                                <li key="address">
                                                    <a target="_blank" href='https://goo.gl/maps/uT6LMQ7qjpFwvwGd9' rel="noreferrer">
                                                        <i className="far fa-map-marker-alt" />
                                                        58 Crystalview crescent, Brampton ON L6P2S3
                                                    </a>
                                                </li>
                                            </ul>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright-text">
                        <span>Copy@ 2022 {getCurrentYear()} <Link to="#">Code On Us</Link></span>
                        <span>All Rights Reserved</span>
                    </p>
                    <Link to="#" className="back-to-top" onClick={scrollToTop}><i className="far fa-angle-up" /></Link>
                </div>
            </div>
            {/* Lines */}
            <img src={shape1} alt="line" className="line-one" />
            <img src={shape2} alt="line" className="line-two" />
        </footer>
    );
}

export default Footer;