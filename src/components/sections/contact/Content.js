import React, { Component } from 'react'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/man-with-earth-02.png'

class Content extends Component {
    render() {

        return (
            <section className="contact-section contact-page section-gap">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={illustration} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Get In Touch</span>
                                        <h2 className="title">Need Any Help For Business &amp; Consulting</h2>
                                    </div>
                                    <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was
                                    </p>
                                    <Fade right cascade>
                                        <ul>
                                            <li className="phone">
                                                <Link to="tel:+0123456789"><i className="far fa-phone" />+012 (345) 6789</Link>
                                            </li>
                                            <li><i className="far fa-envelope-open" /><Link to="#">support@gmail.com</Link></li>
                                            <li>
                                                <a target="_blank" href='https://goo.gl/maps/uT6LMQ7qjpFwvwGd9' rel="noreferrer">
                                                    <i className="far fa-map-marker-alt" />
                                                    Broklyn Street USA
                                                </a>
                                            </li>
                                        </ul>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Fade bottom>
                        <div className="contact-form grey-bg">
                            <div className="row no-gutters justify-content-center">
                                <div className="col-10">
                                    <div className="section-title text-center mb-40">
                                        <h2 className="title">Don’t Hesited To Contact Us</h2>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="text" placeholder="Your Full Name" />
                                                    <span className="icon"><i className="far fa-user-circle" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="email" placeholder="Your Email Address" />
                                                    <span className="icon"><i className="far fa-envelope-open" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="text" placeholder="Your Phone" />
                                                    <span className="icon"><i className="far fa-phone" /></span>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-30">
                                                    <textarea placeholder="Write Message" defaultValue={""} />
                                                    <span className="icon"><i className="far fa-pencil" /></span>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="main-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="container container-1600">
                    <div className="contact-map">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2066075456128!2d-79.66802868465413!3d43.768569879117486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3cba3895807d%3A0x2c74e4fc6def2065!2s58%20Crystalview%20Crescent%2C%20Brampton%2C%20ON%20L6P%202S3!5e0!3m2!1sen!2sca!4v1664840442830!5m2!1sen!2sca"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;