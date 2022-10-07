import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Headerthree'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/About/Content'

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | About Us</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"About Us"} />
            <Content />
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap line-top">
                        <Client />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default About;