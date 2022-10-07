import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import services from "../../../helper/serviceHelper"
import { Link } from 'react-router-dom'

function Advancedtab(props) {
    const [active, setActive] = useState(1);

    return (
        <section className="advanced-tab grey-bg section-gap">
            <div className="container">
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Our Service</span>
                </div>
                {/* Tabs Buttons */}
                <div className="tab-buttons">
                    <Tab.Container defaultActiveKey={services[0].id}>
                        <Nav variant="tabs">
                            {services.map((item, i) => (
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey={item.id}
                                        active={active === item.id}
                                        onClick={() => setActive(item.id)}>{item.title}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                        {/* Tabs Content */}
                        <Tab.Content>
                            {services.map((item, i) => (
                                <Tab.Pane eventKey={item.id}>
                                    {(active === item.id) &&
                                        <div className="row service-boxes justify-content-center">
                                            {item.subservices.map((subservice, i) => (
                                                <div key={i} className="col-lg-3 col-sm-6 col-10 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="700ms">
                                                    <div className="service-box-three border-0">
                                                        <div className="icon">
                                                            <i className={subservice.icon}></i>
                                                        </div>
                                                        <h3><Link to={subservice.url}>{subservice.title}</Link></h3>
                                                        <p>{subservice.text}</p>
                                                        <Link to={subservice.url} className="service-link">
                                                            <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    );
}

export default Advancedtab;