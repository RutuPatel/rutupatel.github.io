import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );
    return (
        <Button
            variant="link"
            className='text-decoration-none'
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

function Faqs(props) {
    return (
        <section className="faq-section section-gap">
            <div className="container">
                {/* FAQ Page Title */}
                <div className="row faq-page-title mb-60 align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title left-border">
                            <span className="title-tag">FAQ</span>
                            <h2 className="title">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            But must explain to you how all this mistaken idea of denounc easure and praising pain was born
                            and I will give you a compl the system, and expound the actual teachings of the great explorer
                            the truth,
                        </p>
                    </div>
                </div>
                {/* FAQ LOOP */}
                <Accordion defaultActiveKey="0" className="faq-loop grey-header" id="faqAccordion">
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="0">
                                How To Create A Mobile App In Expo And Firebase Meet SmashingConf Live: Our New Interactive
                                Online Conference
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="1">
                                How To Create A Mobile App In Expo And Firebase Meet SmashingConf Live: Our New Interactive
                                Online Conference
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="2">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Blessing Krofegha wrote ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="3">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Meet Sma Ove Online Conference ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="4">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Meet Sma Ove Online Conference ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="5">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Meet Sma Ove Online Conference ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="6">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Meet Sma Ove Online Conference ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="7">
                                How To Build A Vue Survey App Using Firebase Authentication And Database Meet Sma Ove Online Conference ?
                                <span className="icons">
                                    <i className="far fa-plus" />
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7" className="collapseparent">
                            <Card.Body>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minu
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* End Faq LOOP */}
            </div>
        </section>
    );
}

export default Faqs;