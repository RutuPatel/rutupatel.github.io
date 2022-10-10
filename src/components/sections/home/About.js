import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/video-bg/poster-1.jpg'
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <section className="about-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <Fade left cascade>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-video">
                                <div className="video-poster-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ backgroundImage: "url(" + img1 + ")" }}></div>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text-two">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Professional Business Guidance Agency </h2>
                            </div>
                            <p>
                                Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                            <Fade bottom cascade>
                                <ul className="about-list">
                                    <li> <i className="fas fa-check" /> There are many variations of passages of LoreIpsum
                                        available, but the majority have suffered</li>
                                    <li> <i className="fas fa-check" /> It uses a dictionary of over 200 Latin wor combined with a
                                        handful of model sentence structure</li>
                                    <li> <i className="fas fa-check" /> Richard McClintock, a Latin profe hampden-sydney College
                                        in Virginia, looked up one more</li>
                                </ul>
                            </Fade>
                            <Link to="/about" className="main-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;