import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/statistics/Content';

const Statistics = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Statistics</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"statistics"} />
            <Content/>
            <Footer />
        </Fragment>
    )
}

export default Statistics;