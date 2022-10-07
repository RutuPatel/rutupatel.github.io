import React, { Component, Fragment } from 'react'
import Relatedproducts from './Relatedproducts';
import Cta from './Cta'
import Details from './Details'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Details />
                <Relatedproducts/>
                <Cta />
            </Fragment>
        );
    }
}

export default Content;