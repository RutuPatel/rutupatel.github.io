import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Content from '../sections/home/Content'

const Home = () => {
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

export default Home;