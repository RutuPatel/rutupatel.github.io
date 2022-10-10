import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
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
            <Footer />
        </Fragment>
    )
}

export default About;