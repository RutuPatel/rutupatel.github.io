import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import services from '../../../helpers/serviceHelper'

const Service = () => {
    return (
        <section className="service-section grey-bg service-line-shape section-gap">
            <div className="container">
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Our Service</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                <Fade bottom cascade>
                    <div className="row service-boxes justify-content-center">
                        {services.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6 col-10 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="700ms">
                                <div className="service-box-three border-0">
                                    <div className="icon">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <h3><Link to={item.url} state={{ serviceId: item.id }}>{item.name}</Link></h3>
                                    <p>{item.description}</p>
                                    <Link to={item.url} state={{ serviceId: item.id }} className="service-link">
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