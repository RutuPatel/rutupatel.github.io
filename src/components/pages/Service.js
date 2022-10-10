import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/service/Content'

const Service = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Services</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"Services"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Service;