import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import img2 from '../../../assets/img/video-bg/poster-2.jpg'
import img3 from '../../../assets/img/video-bg/poster-3.jpg'

function About() {
    return (
        <section className="about-section-three section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="about-text-three">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Professional Business <br /> Guidance Agency </h2>
                            </div>
                            <p className="mb-25">
                                Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                            <p>
                                Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                            <ul className="about-list">
                                <li> <i className="far fa-check" /> Business &amp; Consulting Agency</li>
                                <li> <i className="far fa-check" /> Awards Winning Business Comapny</li>
                                <li> <i className="far fa-check" /> Business &amp; Consulting Agency</li>
                                <li> <i className="far fa-check" /> Awards Winning Business Comapny</li>
                            </ul>
                            <Link to="/about" className="main-btn main-btn-4">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <div className="about-tile-gallery">
                            <Fade cascade right duration={1500} delay={400}>
                                <img src={img3} alt="" className="image-one" />
                                <img src={img2} alt="" className="image-two" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;