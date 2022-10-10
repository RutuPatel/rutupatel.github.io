import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ctabg from '../../assets/img/sidebar/cta.jpg'
import services from '../../helpers/serviceHelper'

const Servicesidebar = () => {
    const {service} = useParams()
    return (
        <div className="sidebar">
            {/* Services List Widget */}
            <div className="widget cat-widget">
                <h4 className="widget-title">All Service List</h4>
                <ul>
                    {services.map((item, i) => (
                        <li key={i}>
                            <Link
                                className={service === item.name ? "active" : ""}
                                to={item.url}>
                                {item.name}
                                <span>
                                    <i className="far fa-angle-right" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Contact Widget */}
            <div className="widget contact-widget">
                <h4 className="widget-title">Conatct Us</h4>
                <form action="#">
                    <input type="text" placeholder="Your Email" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="main-btn main-btn-3">Send Message</button>
                </form>
            </div>
            {/* CTA Widget */}
            <div className="widget cta-widget" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                <h4 className="title">Need Any Consultations</h4>
                <Link to="/contact" className="main-btn">Send Message</Link>
            </div>
        </div>
    )
}

export default Servicesidebar