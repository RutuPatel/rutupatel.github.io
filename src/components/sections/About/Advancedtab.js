import React from 'react'
import { Tab, Nav } from 'react-bootstrap'

import mission from '../../../assets/img/illustration/mission.png'
import history from '../../../assets/img/illustration/history.png'
import businessgoals from '../../../assets/img/illustration/businessgoals.png'

const missiontab = [
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
]
const historytab = [
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
]
const businessgoalstab = [
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
]

function Advancedtab(props) {

    return (
        <section className="advanced-tab section-gap">
            <div className="container">
                {/* Tabs Buttons */}
                <div className="tab-buttons">
                    <Tab.Container defaultActiveKey="mission">
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="mission">Our Mission &amp;  Vision</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="history">Company History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="businessgoals">Business Goals</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="mission">
                                <div className="tab-text-block">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-text">
                                                <h2 className="title">Professional Business Guidance Agency</h2>
                                                <p>
                                                    Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium
                                                    doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore
                                                    veritatis et quasi
                                                </p>
                                                <ul>
                                                    {missiontab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-image">
                                                <img src={mission} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="history">
                                <div className="tab-text-block">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-image">
                                                <img src={history} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-text">
                                                <h2 className="title">Professional Business Guidance Agency</h2>
                                                <p>
                                                    Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium
                                                    doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore
                                                    veritatis et quasi
                                                </p>
                                                <ul>
                                                    {historytab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="businessgoals">
                                <div className="tab-text-block">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-text">
                                                <h2 className="title">Professional Business Guidance Agency</h2>
                                                <p>
                                                    Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium
                                                    doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore
                                                    veritatis et quasi
                                                </p>
                                                <ul>
                                                    {businessgoalstab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-image">
                                                <img src={businessgoals} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    );
}
export default Advancedtab;