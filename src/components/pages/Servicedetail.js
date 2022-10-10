import React from 'react';
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/servicedetail/Content'
import { ServiceContextProvider } from '../../contexts/ServiceContext';

const Servicedetail = () => {
    return (
        <ServiceContextProvider>
            <Helmet>
                <title>Code On Us | Service Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </Helmet>
            <Header />
            <Breadcrumbs pagename={"servicedetail"} />
            <Content />
            <Footer />
        </ServiceContextProvider >
    )
}

export default Servicedetail;