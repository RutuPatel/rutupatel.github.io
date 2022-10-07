import React, { Component, Fragment } from 'react'
import Advancedtab from './Advancedtab'
import Cta from './Cta'
import Workingprocess from './Workingprocess'
import Services from './Service'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Services />
                {/* <Advancedtab /> */}
                <Workingprocess />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;