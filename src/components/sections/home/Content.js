import React, { Component, Fragment } from 'react'
import Workingprocess from './Workingprocess'
import About from '../About/About'
import Banner from './Banner'
import Whyus from './Whyus'
import Counter from './Counter'
import Project from './Project'
import Service from './Service'
import Testimonials from './Testimonials'
import Video from './Video'
import Cta from './Cta'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <About />               
                <Service />
                <Project />
                <Counter />
                <Workingprocess />
                <Testimonials />
                <Video />
                <Whyus />
                <Cta/>
            </Fragment>
        );
    }
}

export default Content;