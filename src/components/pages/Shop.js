import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/shop/Content'

const Shop = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Code On Us | Shop</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"about"} />
            <Content />
            <Footer />
        </Fragment>
    )
}

export default Shop;