import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import services from "../../../helper/serviceHelper"

function Service() {
    return (
        <section className="service-section section-gap">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                {/* Services Boxes */}
                <Fade right cascade>
                    <div className="row service-boxes justify-content-center">
                        {services.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6 col-10">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3><Link to={item.url}>{item.title}</Link></h3>
                                    <p>{item.text}</p>
                                    <Link to={item.url} className="service-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Service;