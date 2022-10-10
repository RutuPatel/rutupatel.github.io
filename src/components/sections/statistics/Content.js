import React, { Component, Fragment } from 'react';
import Cta from './Cta';
import Statics from './Statics';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Statics/>
                <Cta/>
            </Fragment>
        );
    }
}

export default Content;