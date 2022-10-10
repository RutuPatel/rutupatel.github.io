import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import line1 from '../../../assets/img/lines/12.png'
import line2 from '../../../assets/img/lines/11.png'

import services from "../../../helpers/serviceHelper"

const Service = () => {
    return (
        <section className="service-section shape-style-two service-line-shape section-gap grey-bg">
            <div className="container">
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Company Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                <Fade right cascade>
                    <div className="row service-boxes justify-content-center">
                        {services.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6 col-10">
                                <div className="service-box-two text-center">
                                    <div className="icon">
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <h3><Link to={item.url}>{item.name}</Link></h3>
                                    <p>{item.description}</p>
                                    <Link to={item.url} className="service-link">
                                        <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="view-more-btn text-center mt-50">
                        <Link to="/services" className="main-btn main-btn-3">View All Services</Link>
                    </div>
                </Fade>
            </div>
            <div className="line-one">
                <img src={line1} alt="line-shape" />
            </div>
            <div className="line-two">
                <img src={line2} alt="line-shape" />
            </div>
        </section>
    );
}

export default Service;