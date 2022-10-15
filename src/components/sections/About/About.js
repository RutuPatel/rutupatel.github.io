import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import illustration from '../../../assets/img/illustration/about-us.png'

const About = () => {
    const location = useLocation()
    return (
        <section className="about-section about-illustration-img section-gap">
            <div className="container">
                <div className="illustration-img">
                    <Fade left>
                        <img src={illustration} alt="" />
                    </Fade>
                </div>
                <div className="row no-gutters justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text-two">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Professional Business <br /> Guidance Agency </h2>
                            </div>
                            <p className="mb-25">
                                Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremq
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                            <p>
                                Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
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
                            {location.pathname !== "/about" && <Link to="/about" className="main-btn">Learn More</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;