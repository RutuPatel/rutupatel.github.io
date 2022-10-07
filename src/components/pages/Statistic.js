import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Counter from '../sections/hometwo/Counter'

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
            <Breadcrumbs pagename={"about"} />
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap">
                        <Counter />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Statistics;