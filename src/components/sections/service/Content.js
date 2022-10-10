import React, { Component, Fragment } from 'react'
import Cta from './Cta'
import Services from './Service'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Services />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;