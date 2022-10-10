import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/portfolio/Content'

const Portfolio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Portfolio</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"Portfolio"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Portfolio;