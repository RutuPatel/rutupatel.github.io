import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from "../../../helpers/projectHelper"
import Slider from 'react-slick'

const Relatedproducts = () => {
    const [relatedProjects, setRelatedProjects] = useState(projects)
    const location = useLocation()
    const { projectId } = location.state

    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: true,
        dotsClass: "testimonial-dots slick-dots slick-thumb",
        swipe: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                arrows: false
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            },
        }]

    }

    useEffect(() => {
        const currentProject = projects.find(item => item.id === projectId)
        let filteredProjects = projects.filter((project) => project.category.includes(currentProject.category[0]))
        filteredProjects = filteredProjects.filter(item => item.id !== currentProject.id)
        setRelatedProjects(filteredProjects)
    }, [projectId])

    const renderRelatedProjects = relatedProjects.map((item, i) => (
        <div key={i} className="col">
            <div key={i} className="project-box">
                <div className="project-thumb">
                    <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + item.image + ")" }} />
                </div>
                <div className="project-desc text-center">
                    <h4><Link to={item.url} state={{ projectId: item.id }}>{item.name}</Link></h4>
                    <p className="text-truncate">{item.description}</p>
                    <Link to={item.url} state={{ projectId: item.id }} className="project-link">
                        <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))

    if (relatedProjects.length > 0) {
        return (
            <section className="shop-details-wrap">
                <div className="container section-gap-bottom">
                    <div className="row">
                        <div className="text-center">
                            <h2 className="title">Related Projects</h2>
                        </div>
                    </div>
                    <Slider className="row project-boxes mt-80 justify-content-start" id="testimonialSliderTwo" {...settings}>
                        {renderRelatedProjects}
                    </Slider>
                </div>
            </section>
        )
    } else {
        return (
            <Fragment></Fragment>
        )
    }


}

export default Relatedproducts;