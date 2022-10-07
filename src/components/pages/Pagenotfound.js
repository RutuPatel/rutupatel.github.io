import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'

const Pagenotfound = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | 404</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"pagenotfound"} />
            <Footer />
        </Fragment>
    )
}

export default Pagenotfound;