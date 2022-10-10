import React, { Component, Fragment } from 'react';
import About from './About'
import Advancedtab from './Advancedtab'
// import Testimonials from './Testimonials'
import Whyus from '../home/Whyus';
import Video from './Video'
import Cta from './Cta';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Advancedtab />
                <Video />
                {/* <Testimonials /> */}
                <Whyus/>
                <Cta/>
            </Fragment>
        );
    }
}

export default Content;