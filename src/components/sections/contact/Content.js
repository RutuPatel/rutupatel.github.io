import React, { Component } from 'react'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/contact-us.jpg'
import ErrorMessage from '../../../helpers/ErrorMessage';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: {
                name: {
                    valid: false,
                    message: "",
                },
                email: {
                    valid: false,
                    message: "",
                },
                phone: {
                    valid: false,
                    message: "",
                },
                message: {
                    valid: false,
                    message: "",
                }
            }
        }
    }

    //onSend Send Inquiry Email
    handleSubmit(e) {
        e.preventDefault();

        const SibApiV3Sdk = require('sib-api-v3-typescript');
        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        let apiKey = apiInstance.authentications['apiKey'];
        // TODO : MODIFY AFTER NRE REGISTRATION
        apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY;

        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        sendSmtpEmail = {
            subject: "{{params.subject}}",
            templateId: 1,
            // TODO : MODIFY THIS
            sender: { "name": "John Doe", "email": "example@example.com" },
            to: [{ "email": "rutva40@gmail.com", "name": "Rutva Patel" }],
            params: { "to_name": "Test", "subject": "Code On Us  New Inquiry - " + e.target.elements.full_name.value }
        };

        apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        }, function (error) {
            console.error(error);
        });
    }

    // Onchange handler for all form fields
    handleChange = (event) => {
        const { name, value } = event.target
        const error = this.checkValidation(name, value)
        this.setState({
            [name]: value,
            error
        })
    }

    // Validation Checker for all form fields
    checkValidation = (field, value) => {
        let { error } = this.state

        if (field === "name") {
            if (value.trim() === "") {
                error.name.valid = false
                error.name.message = "name is required"
            } else {
                error.name.valid = true
                error.name.message = ""
            }
        } else if (field === "email") {
            if (value.trim() === "") {
                error.email.valid = false
                error.email.message = "email is required"
            } else if (!this.validateEmail(value)) {
                error.email.valid = false
                error.email.message = "email is invalid"
            } else {
                error.email.valid = true
                error.email.message = ""
            }
        } else if (field === "phone") {
            if (value.trim() === "") {
                error.phone.valid = false
                error.phone.message = "phone is required"
            } 
            else if (!this.validatePhone(value)) {
                error.phone.valid = false
                error.phone.message = "phone is invalid"
            }else {
                error.phone.valid = true
                error.phone.message = ""
            }
        } else {
            if (value.trim() === "") {
                error.message.valid = false
                error.message.message = "message is required"
            } else {
                error.message.valid = true
                error.message.message = ""
            }
        }
        return error
    }

    validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    validatePhone= (phone) => {
        return phone.match(
            /^\+?[1-9][0-9]{7,14}$/
        );
    };

    //Handle Send button disable or not
    shouldSendDisabled = () => {
        let { error } = this.state
        let disabled = false
        if (
            !error.name.valid ||
            !error.email.valid ||
            !error.phone.valid ||
            !error.message.valid
        ) {
            disabled = true
        }
        return disabled
    }

    render() {

        return (
            <section className="contact-section contact-page section-gap">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={illustration} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-10 order-1 order-lg-2">
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Get In Touch</span>
                                        <h2 className="title">Need Any Help For Business &amp; Consulting</h2>
                                    </div>
                                    <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was
                                    </p>
                                    <Fade right cascade>
                                        <ul>
                                            <li className="phone">
                                                <Link to="#"><i className="far fa-phone" />+1 (226) 899-6424</Link>
                                            </li>
                                            <li><i className="far fa-envelope-open" /><Link to="#">info@codeonus.com</Link></li>
                                            <li>
                                                <a target="_blank" href='https://goo.gl/maps/uT6LMQ7qjpFwvwGd9' rel="noreferrer">
                                                    <i className="far fa-map-marker-alt" />
                                                    58 Crystalview crescent, Brampton ON L6P2S3
                                                </a>
                                            </li>
                                        </ul>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Fade bottom>
                        <div className="contact-form grey-bg">
                            <div className="row no-gutters justify-content-center">
                                <div className="col-10">
                                    <div className="section-title text-center mb-40">
                                        <h2 className="title">Don’t Hesited To Contact Us</h2>
                                    </div>
                                    <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="text" name="name" placeholder="Your Full Name" value={this.state.name} onChange={this.handleChange} />
                                                    <span className="icon"><i className="far fa-user-circle" /></span>
                                                    <ErrorMessage error={this.state.error.name} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="email" name="email" placeholder="Your Email Address" value={this.state.email} onChange={this.handleChange} />
                                                    <span className="icon"><i className="far fa-envelope-open" /></span>
                                                    <ErrorMessage error={this.state.error.email} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="input-group mb-30">
                                                    <input type="tel" name="phone" placeholder="Your Contact number" value={this.state.phone} onChange={this.handleChange} />
                                                    <span className="icon"><i className="far fa-phone" /></span>
                                                    <ErrorMessage error={this.state.error.phone} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-30">
                                                    <textarea placeholder="Write Message" name="message" value={this.state.message} onChange={this.handleChange} />
                                                    <span className="icon"><i className="far fa-pencil" /></span>
                                                    <ErrorMessage error={this.state.error.message} />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button disabled={this.shouldSendDisabled()} type="submit" className="main-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="container container-1600">
                    <div className="contact-map">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2066075456128!2d-79.66802868465413!3d43.768569879117486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3cba3895807d%3A0x2c74e4fc6def2065!2s58%20Crystalview%20Crescent%2C%20Brampton%2C%20ON%20L6P%202S3!5e0!3m2!1sen!2sca!4v1664840442830!5m2!1sen!2sca"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;