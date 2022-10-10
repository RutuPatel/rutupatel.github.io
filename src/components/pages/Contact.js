import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/contact/Content'

const Contact = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Contact Us</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"Contact"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Contact;