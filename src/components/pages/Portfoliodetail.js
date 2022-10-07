import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Headerthree'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/portfoliodetail/Content'

const Portfoliodetail = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Portfolio Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"portfoliodetail"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Portfoliodetail;