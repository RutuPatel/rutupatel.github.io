import React from 'react'
import { Link } from 'react-router-dom'
import lines from '../../../assets/img/lines/07.png'
import services from "../../../helper/serviceHelper"

function Service(props) {
    return (
        <section className="service-section shape-style-one section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-30">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {services.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-8 col-10 col-tiny-12 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="service-box text-center">
                                <div className="icon">
                                    <img src={item.icon} alt="Icon" />
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
            </div>
            <div className="dots-line">
                <img src={lines} alt="" />
            </div>
        </section>
    );
}

export default Service;