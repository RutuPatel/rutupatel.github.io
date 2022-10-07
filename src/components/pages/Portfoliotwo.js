import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Headerthree'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/portfoliotwo/Content'

const Portfoliotwo = () => {
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

export default Portfoliotwo;