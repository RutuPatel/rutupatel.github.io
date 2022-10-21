import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo/CodeonusLight.png'

const Offcanvas = () => {
    return (
        <Fragment>
            <div className="widget about-widget">
                <div className="site-logo mb-30">
                    <img src={logo} alt="logo" />
                </div>
                <p>
                    Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi.
                </p>
            </div>
            <div className="widget contact-info-widget">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                    <li>
                        <i className="far fa-map-marked-alt" />
                        6701 Democracy Blvd, Suite 300, USA
                    </li>
                    <li>
                        <i className="far fa-phone" />
                        0800-123456 (24/7 Support Line)
                    </li>
                    <li>
                        <i className="far fa-envelope-open" />
                        info@example.com
                    </li>
                </ul>
            </div>
            <div className="widget social-link">
                <h5 className="widget-title">Follow us</h5>
                <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                    <li><Link to="#"><i className="fab fa-google" /></Link></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Offcanvas;