import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/shopdetail/Content'

const Productdetail = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Shop Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"about"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Productdetail;