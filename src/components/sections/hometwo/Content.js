import React, { Component, Fragment } from 'react'
import Workingprocess from '../hometwo/Workingprocess'
import About from './About'
import Banner from '../../sections/homethree/Banner'
import Whyus from '../homethree/Whyus'
import Counter from './Counter'
import Project from './Project'
import Service from './Service'
import Testimonials from './Testimonials'
import Video from './Video'
import Cta from '../homethree/Cta'

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