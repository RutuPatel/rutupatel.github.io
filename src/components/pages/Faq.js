import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/faq/Content'

const Faq = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | FAQ's</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"about"} />
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

export default Faq;