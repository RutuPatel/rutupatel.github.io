import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Headerthree'
import Client from '../layouts/Client'
import Footer from '../layouts/Footertwo'
import Content from '../sections/homethree/Content'

const Homethree = () => {
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
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap">
                        <Client />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Homethree;