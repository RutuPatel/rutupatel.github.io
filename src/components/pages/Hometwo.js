import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Headerthree'
import Footer from '../layouts/Footer'
import Content from '../sections/hometwo/Content'

const Hometwo = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Homepage</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Hometwo;